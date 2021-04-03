<template>
    <div>
        <transition name="fade">
        <div class="menuMouseAction" v-if="visibility" :style="{ left: `${position.x}px`, top: `${position.y}px` }">
            <li class="menuOption disabled">Marcar como lida</li>
            <div class="separator"></div>
            <li class="menuOption menuLink">Convidar pessoas</li>
            <div class="separator"></div>
            <li class="menuOption">Silenciar Servidor</li>
            <div class="separator"></div>
            <li class="menuOption">Ocultar canais silenciados</li>
            <li class="menuOption">Config. de notificação</li>
            <li class="menuOption">Config. de privacidade</li>
            <li class="menuOption">Alterar apelido</li>
            <div class="separator"></div>
            <li class="menuOption menuDanger">Sair do servidor</li>
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
            }
        }
    },
    mounted() {
        window.eventBus.$on('toggleMouseMenu', event => {
            if(event.type && event.type === 'groups') {
                this.toggleVisibility(event.visible)
                this.setPositions(event.positionX, event.positionY)
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
        }
    }
}
</script>