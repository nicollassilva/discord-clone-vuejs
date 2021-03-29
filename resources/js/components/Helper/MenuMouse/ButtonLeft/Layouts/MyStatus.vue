<template>
    <div>
        <transition enter-active-class="animated zoomIn" leave-active-class="animated fadeOut" mode="out-in">
        <div class="menuMouseAction" v-if="visibility" :style="[{ 'width': '220px' }, { left: `${position.x}px`, top: (Number.isInteger(position.y) ? position.x + 'px' : position.y) }]">
            <li class="menuOption" @click="updateStatus('online')">
                <div class="image">
                    <div class="status online"></div>
                </div>
                Disponível
            </li>
            <div class="separator"></div>
            <li class="menuOption" @click="updateStatus('absent')">
                <div class="image">
                    <div class="status absent"></div>
                </div>
                Ausente
            </li>
            <li class="menuOption" @click="updateStatus('busy')">
                <div class="image">
                    <div class="status busy"></div>
                </div>
                Não perturbar
                <p>Você não irá mais receber notificações na área de trabalho.</p>
            </li>
            <li class="menuOption" @click="updateStatus('offline')">
                <div class="image">
                    <div class="status offline"></div>
                </div>
                Invisível
                <p>Você não aparecerá como disponível, mas terá acesso completo ao Discord.</p>
            </li>
            <div class="separator"></div>
            <li class="menuOption">
                <div class="image"></div>
                Definir status personalizado
            </li>
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
        window.eventBus.$on('leftMenuEvent', event => {
            if(event.type && event.type === 'myStatus') {
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
        },

        updateStatus(status) {
            let statusNow = window.appData.users[0].status
            if(status != statusNow) {
                window.appData.users[0].status = status
            }
        }
    }
}
</script>