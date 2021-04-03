<template>
    <div>
        <Button
            v-for="group in groups"
            :key="group.id"
            :title="group.name"
            :background="group.icon"
            @contextmenu.native="openContextMenu($event, group)"
            @click.native="changePage(group)"
        ></Button>
    </div>
</template>
<script>
import Button from '../../../Helper/Layouts/Button.vue'

export default {
    components: { Button },
    data() {
        return {
            groups: window.appData.groups
        }
    },
    methods: {
        changePage(group) {
            window.eventBus.$emit('changePage', {
                page: 'group',
                data: group
            })
            this.changeBody('group', group)
        },

        changeBody(type, data) {
            window.eventBus.$emit('changeBody', { type, data })
        },

        openContextMenu(event, group) {
            window.eventBus.toggleMouseMenu({
                type: 'groups',
                positionX: event.clientX,
                positionY: event.clientY,
                group,
                visible: true
            })
        }
    }
}
</script>