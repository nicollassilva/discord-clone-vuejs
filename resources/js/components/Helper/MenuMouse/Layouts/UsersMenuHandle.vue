<template lang="">
    <div>
        <div class="menuMouseAction" v-if="visibility" :style="{ left: `${position.x}px`, top: `${position.y}px` }">
            <li class="menuOption disabled">Marcar como lida</li>
            <div class="separator"></div>
            <li class="menuOption">Perfil</li>
            <li class="menuOption">Chamar</li>
            <li class="menuOption">Adicionar nota</li>
            <li class="menuOption">Fechar mensagem direta</li>
            <div class="separator"></div>
            <li class="menuOption">Convidar para o servidor</li>
            <div class="separator"></div>
            <li class="menuOption">Adicionar amigo</li>
            <li class="menuOption">Bloquear</li>
            <div class="separator"></div>
            <li class="menuOption">Silenciar</li>
        </div>
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
            if(event.type && event.type === 'users') {
                this.toggleVisibility(event.visible)
                this.setPositions(event.positionX, event.positionY)
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
        }
    }
}
</script>