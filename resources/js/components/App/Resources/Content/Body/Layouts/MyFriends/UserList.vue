<template>
    <div>
        <div class="user-list" v-for="list in lists" :key="list.id" @click="changeBody('conversation', list)">
            <div class="avatar" :style="{ 'background-image': `url('${list.image}')` }">
                <div data-toggle="tooltip" :title="getStatusTitle(list.status)" :class="['status', list.status]"></div>
            </div>
            <div class="infos">
                <span>{{ list.name }}<em>{{ list.hashtagNumber }}</em></span>
                <span>{{ list.activity ? list.activity : getStatusTitle(list.status) }}<i v-if="list.activity" class="fas fa-file-alt ml-1"></i></span>
            </div>
            <div class="buttons">
                <div class="button" data-toggle="tooltip" title="Mensagem" v-html="svg.message"></div>
                <div class="button" data-toggle="tooltip" title="Mais" v-html="svg.moreIcon"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lists: window.appData.friends,
            svg: window.svgHandle
        }
    },
    methods: {
        getStatusTitle(status) {
            return window.appData.realStatusTitle(status)
        },

        changeBody(type, data = {}) {
            window.eventBus.$emit('changeBody', { type, data })
        }
    }
}
</script>