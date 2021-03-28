<template>
    <div class="body-application">
        <TopBar :Data="data" :Type="type">
            <span class="icon-svg" v-if="type === 'conversation'" slot="icon-svg" v-html="svg.at"></span>
            <span class="icon-svg" v-if="type === 'myFriends'" slot="icon-svg" v-html="svg.friends"></span>
        </TopBar>
        <Conversation v-if="this.type === 'conversation'" :Data="data"></Conversation>
        <MyFriends v-if="this.type === 'myFriends'"></MyFriends>
    </div>
</template>
<script>
import TopBar from './Content/Body/Layouts/TopBar.vue'
import Conversation from './Content/Body/Conversation.vue'
import MyFriends from './Content/Body/MyFriends.vue'

export default {
    components: {
        TopBar, Conversation, MyFriends
    },
    data() {
        return {
            allowedBodys: ['conversation', 'group', 'myFriends'],
            svg: window.svgHandle,
            type: null,
            data: {}
        }
    },
    mounted() {
        window.eventBus.$on('changeBody', event => {
            if(event.type && this.allowedBodys.indexOf(event.type) < 0) {
                return;
            } else {
                this.data = event.data
                this.type = event.type

                window.eventBus.$emit('updateMenuPeoples', event.data)
            }
        })
    }
}
</script>