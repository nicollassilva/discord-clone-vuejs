<template>
    <div>
    <transition-group name="flip-list" tag="div">
        <div class="user-list"
            v-for="list in lists"
            :key="list.id"
            @contextmenu="openContextMenu($event, list)"
            @click="changeBody('conversation', list)">
            <div class="avatar" :style="{ 'background-image': `url('${list.image}')` }">
                <div data-toggle="tooltip" :title="getStatusTitle(list.status)" :class="['status', list.status]"></div>
            </div>
            <div class="infos">
                <span>{{ list.name }}<em>{{ list.hashtagNumber }}</em></span>
                <span>{{ list.activity && list.status != 'offline' ? list.activity : getStatusTitle(list.status) }}<i v-if="list.activity && list.status != 'offline'" class="fas fa-file-alt ml-1"></i></span>
            </div>
            <div class="buttons">
                <div class="button" data-toggle="tooltip" title="Mensagem" v-html="svg.message"></div>
                <div class="button" data-toggle="tooltip" title="Mais" v-html="svg.moreIcon" @click.stop="menuClick($event, 'moreUserList')"></div>
            </div>
        </div>
    </transition-group>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lists: window.appData.users.filter(e => e.status != 'offline' && !e.pending),
            svg: window.svgHandle,
            page: 'disponível'
        }
    },
    mounted() {
        window.eventBus.$on('changeUserList', event => {
            if(this.page != event) {
                this.page = event.page
                this.lists = event.data
            }
        })
    },
    methods: {
        getStatusTitle(status) {
            return window.appData.realStatusTitle(status)
        },

        changeBody(type, data = {}) {
            window.eventBus.$emit('changeBody', { type, data })
        },

        menuClick(event, menu) {
            window.eventBus.leftMenuClick(menu, event.clientX, event.clientY)
        },

        openContextMenu(event, user) {
            window.eventBus.toggleMouseMenu({
                type: 'users',
                positionX: event.clientX,
                positionY: (event.clientY > 650 ? 590 : event.clientY),
                user,
                visible: true,
                listed: this.page != 'pendente' && this.page != 'bloqueado' ? true : false
            })
        }
    }
}
</script>