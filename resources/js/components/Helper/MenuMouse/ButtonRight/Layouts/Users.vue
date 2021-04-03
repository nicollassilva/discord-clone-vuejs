<template>
    <div>
        <transition name="fade">
        <div class="menuMouseAction" v-if="visibility" :style="{ left: `${position.x}px`, top: `${position.y}px` }">
            <li class="menuOption disabled" v-if="!listed">Marcar como lida</li>
            <div class="separator" v-if="!listed"></div>
            <li class="menuOption" @click="openProfile">Perfil</li>
            <li class="menuOption" v-if="!listed">Chamar</li>
            <li class="menuOption" v-if="listed">Mensagem</li>
            <li class="menuOption">Adicionar nota</li>
            <li class="menuOption">Fechar mensagem direta</li>
            <div class="separator"></div>
            <li class="menuOption">
                <span>Convidar para o servidor</span>
                <i class="fas fa-chevron-right"></i>    
            </li>
            <div class="separator" v-if="!listed"></div>
            <li class="menuOption" v-if="!listed">Adicionar amigo</li>
            <li class="menuOption" v-if="listed">Desfazer amizade</li>
            <li class="menuOption">Bloquear</li>
            <div class="separator" v-if="!listed"></div>
            <li class="menuOption" v-if="!listed">
                <span>Silenciar <b>@{{ user.name }}</b></span>
                <i class="fas fa-chevron-right"></i>
            </li>
        </div>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: null,
            visibility: false,
            listed: false,
            position: {
                x: 0,
                y: 0
            }
        }
    },
    mounted() {
        window.eventBus.$on('toggleMouseMenu', event => {
            if(event.type && event.type === 'users') {
                this.toggleVisibility(event.visible)
                this.setPositions(event.positionX, event.positionY)
                this.user = event.user
                this.listed = event.listed ? true : false
            } else {
                if(this.visibility) {
                    this.toggleVisibility(false)
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

        openProfile() {
            if(this.user) {
                window.eventBus.$emit('openProfile', this.user)
            }
        }
    }
}
</script>