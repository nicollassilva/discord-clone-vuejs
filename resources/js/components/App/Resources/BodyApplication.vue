<template>
    <div class="body-application">
        <TopBar
            :Data="data"
            :Type="type">
            <span class="icon-svg" slot="icon-svg" v-html="svg.at">
            </span>
        </TopBar>
        <Conversation v-if="this.type === 'conversation'" :Data="data"></Conversation>
    </div>
</template>
<script>
import TopBar from './Content/Body/Layouts/TopBar.vue'
import Conversation from './Content/Body/Conversation.vue'

export default {
    components: {
        TopBar, Conversation
    },
    data() {
        return {
            svg: window.svgHandle,
            type: null,
            data: {}
        }
    },
    mounted() {
        window.eventBus.$on('changeBody', event => {
            if(event.data && event.data.id && event.data.id != this.data.id) {
                this.type = event.type
                this.data = event.data
            }
        })
    }
}
</script>