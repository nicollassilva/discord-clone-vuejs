<template>
    <div>
        <transition name="fade">
        <div class="menuMouseAction" v-if="visibility" :style="{ left: `${position.x}px`, top: `${position.y}px` }">
            <li class="menuOption">Entrar em um servidor</li>
            <li class="menuOption">Criar um servidor</li>
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
            if(event.type && event.type === 'optionsCreate') {
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