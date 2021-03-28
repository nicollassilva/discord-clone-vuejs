<template>
    <div>
       <div class="top-handle flex-column">
            <div class="search-friends flex-column justify-content-center">Encontre ou comece uma conversa</div>
        </div>
        <div class="properties-navigation-me">
            <Button @click.native="changeBody('myFriends', { name: 'Amigos' })">
                <span slot="icon" v-html="svg.friends"></span>
                <template v-slot:info>
                    <span class="text-truncate">Amigos</span>
                </template>
            </Button>
            <Button>
                <span slot="icon" v-html="svg.nitro"></span>
                <template v-slot:info>
                    <span class="text-truncate">Nitro</span>
                </template>
            </Button>
            <div class="separator-property">
                <span>MENSAGENS DIRETAS</span>
                <div class="icon" data-toggle="tooltip" title="Criar MD"><i class="fas fa-plus"></i></div>
            </div>
            <Button
                v-for="friend in friends"
                :key="friend.id"
                :class="{ 'active': (friend.id === activeId) }"
                :avatar="friend.image"
                :status="friend.status"
                menu="users"
                @click.native="changeBody('conversation', friend)"
            >
                <template v-slot:info>
                    <span class="text-truncate">{{ friend.name }}</span>
                    <span class="text-truncate" v-if="!!friend.activity && friend.status != 'offline'">{{ friend.activity }}<i class="fas fa-file-alt ml-1"></i></span>
                </template>
                <i slot="remove" class="fas fa-times flex-column justify-content-center" @click.stop="hide(friend)"></i>
            </Button>
            <div class="popup-me">
                <div class="avatar" @click.stop="menuClick('myStatus')" :style="{ 'background-image': `url('${me.image}')` }">
                    <div :class="['status', me.status]"></div>
                </div>
                <div class="info">
                    <span class="text-truncate"><b>{{ me.name }}</b><br>{{ me.hashtagNumber }}</span>
                </div>
                <div class="buttons">
                    <button data-toggle="tooltip" title="Dessilenciar" @click="microphone = !microphone" v-html="toggleMicrophone()"></button>
                    <button data-toggle="tooltip" title="Desativar áudio" @click="speaker = !speaker" v-html="toggleSpeaker()"></button>
                    <button data-toggle="tooltip" title="Configurações de Usuário" v-html="svg.settings"></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Button from './Layouts/Button.vue'
export default {
    components: { Button },
    data() {
        return {
            audio: window.audioHandle,
            svg: window.svgHandle,
            microphone: false,
            speaker: true,
            me: window.myUser,
            friends: window.appData.users,
            activeId: null
        }
    },
    watch: {
        microphone() {
            this.audio.getSound('microphone', this.microphone ? 'enabled' : 'disabled')
        },
        speaker() {
            this.audio.getSound('speaker', this.speaker ? 'enabled' : 'disabled')
        }
    },
    mounted() {
        window.eventBus.$on('updateMenuPeoples', event => {
            this.activeId = event.id
        })
    },
    methods: {
        hide(friend) {
            if(friend.id) {
                window.removeByAttr(this.friends, 'id', friend.id)
            }
        },

        changeBody(type, data = {}) {
            window.eventBus.$emit('changeBody', { type, data })
        },

        toggleMicrophone() {
            return this.microphone ? this.svg.microphone.enabled : this.svg.microphone.disabled
        },

        toggleSpeaker() {
            return this.speaker ? this.svg.speaker.enabled : this.svg.speaker.disabled
        },

        menuClick(menu) {
            window.eventBus.leftMenuClick(menu, 81, 'calc(100vh - 355px)')
        }
    }
}
</script>