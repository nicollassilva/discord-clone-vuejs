<template>
    <div>
        <transition name="fade">
        <div class="menuMouseAction menu-custom" v-if="visibility" :style="{ width: '440px',left: `${position.x}px`, top: `${position.y}px` }">
            <span class="selectFriends">SELECIONAR AMIGOS</span>
            <p class="descriptionParagraph">Você pode adicionar mais {{ selectedCounter }} amigos.</p>
            <div class="interactive-input">
                <div class="selected-user" v-for="selectedUser in selectedUsers" :key="selectedUser.id" @click.stop="removeElementSelected(selectedUser.id)">
                    {{ selectedUser.name }}
                    <i class="fas ml-2 mt-1 fa-times"></i>
                </div>
                <input @keyup="filterInput" @click.stop placeholder="Digite o nome de usuário de um amigo">
            </div>
            <div class="scroll-friends">
            <transition-group name="flip-list" tag="div">
                <div :class="['userlist', 'user-' + friend.id]" v-for="friend in friends" :key="friend.id" :ref="['user' + friend.id]" @click.stop="toggleCheckbox($event, friend)">
                    <div class="avatar" :style="{ 'background-image': `url('${friend.image}')` }">
                        <div :class="['status', friend.status]"></div>
                    </div>
                    <span class="name">{{ friend.name }}<em>{{ friend.name + friend.hashtagNumber }}</em></span>
                    <div class="checkbox" v-html="svg.successIcon"></div>
                </div>
            </transition-group>
            </div>
            <button class="createPrivateGroup">Criar grupo privado</button>
        </div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visibility: false,
            position: {
                x: 0,
                y: 0
            },
            selectedCounter: 9,
            selectedUsers: [],
            friends: null,
            svg: window.svgHandle
        }
    },
    mounted() {
        window.eventBus.$on('leftMenuEvent', event => {
            if(event.type && event.type === 'MDCreate') {
                this.toggleVisibility(event.visible)
                this.setPositions(event.positionX, event.positionY)
                this.selectedCounter = 9
                this.selectedUsers = []
                this.friends = window.appData.users.filter(e => !e.pending)
            } else {
                if(this.visibility) {
                    this.toggleVisibility(event.visible)
                }
            }
        })
    },
    methods: {
        toggleVisibility(option) {
            this.visibility = option
        },

        setPositions(x, y) {
            this.position = { x, y }
        },

        toggleCheckbox(event, user) {
            let parentNode = event.target.parentNode.classList,
                secondParent = event.target.parentNode.parentNode.classList

            if(parentNode && parentNode.contains('userlist')) {
                parentNode.contains('selected') ? this.toggleSelectedUser(user, 'remove') : this.toggleSelectedUser(user)
                parentNode.toggle('selected')
            } else {
                secondParent.contains('selected') ? this.toggleSelectedUser(user, 'remove') : this.toggleSelectedUser(user)
                secondParent.toggle('selected')
            }
        },

        toggleSelectedUser(user, action = 'add') {
            if(action == 'add') {
                if(this.selectedUsers.filter(e => e.id === user.id) <= 0) {
                    this.selectedUsers.push(user)
                    this.selectedCounter--
                    
                }
            } else { 
                window.removeByAttr(this.selectedUsers, 'id', user.id)
                this.selectedCounter++
            }
        },

        removeElementSelected(id) {
            this.toggleSelectedUser({ id }, 'remove')
            document.querySelector(`.userlist.user-${id}`).classList.remove('selected')
        },

        filterInput(event) {
            let filter = event.target.value

            if(filter.length > 0) {
                let regex = new RegExp(filter, 'gi')
                this.friends = window.appData.users.filter(e => !!e.name.match(regex))
            } else {
                this.friends = window.appData.users
            }
        }
    }
}
</script>