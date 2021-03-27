<template>
    <div>
        <div class="topbar">
            <div class="column-info">
                <slot name="icon-svg"></slot>
                <span class="name">
                    {{ Data.name }}
                    <div v-if="Type === 'conversation'" :class="['status', Data.status]"></div>
                </span>
                
            </div>
            <div class="column-buttons">
                <div class="button" v-if="Type === 'conversation'" v-html="svg.startCall"></div>
                <div class="button" v-if="Type === 'conversation'" v-html="svg.startCallVideo"></div>
                <div class="button" v-if="Type === 'group'"  @click="silenceChannel = !silenceChannel" v-html="toggleSilenceChannel()"></div>
                <div class="button" v-html="svg.fixedMessages"></div>
                <div class="button" v-if="Type === 'conversation'" v-html="svg.addFriendsToDM"></div>
                <div class="button" v-if="Type === 'group'" v-html="svg.membersChannel"></div>
                <div class="search" @click="toggleWidthInput()" :style="{ 'width': `${widthInput}px` }">
                    <input class="search" placeholder="Buscar">
                    <i v-html="svg.search"></i>
                </div>
                <div class="button" v-html="svg.inbox"></div>
                <div class="button" v-html="svg.help"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        Data: {
            type: Object,
            default: () => { name: 'Gasparzinho' }
        },
        Type: String
    },
    data() {
        return {
            svg: window.svgHandle,
            silenceChannel: false,
            widthInput: 144
        }
    },
    mounted() {
        document.addEventListener('click', event => {
            if(!event.target || event.target.className != 'search') {
                this.widthInput === 244 && this.toggleWidthInput()
            }
        })
    },
    methods: {
        toggleWidthInput() {
            return this.widthInput = this.widthInput === 144 ? 244 : 144
        },

        toggleSilenceChannel() {
            return this.silenceChannel ? this.svg.silenceChannel.enabled : this.svg.silenceChannel.disabled
        },
    }
}
</script>