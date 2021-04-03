<template>
    <div>
        <div v-if="showTransparent" class="transparentBackground" @click="closeAll"></div>
        <ColumnGroups></ColumnGroups>
        <ColumnProperties></ColumnProperties>
        <BodyApplication></BodyApplication>
        <MouseRightMenuHandle></MouseRightMenuHandle>
        <MouseLeftMenuHandle></MouseLeftMenuHandle>
        <ModalHandle></ModalHandle>
    </div>
</template>
<script>
import ColumnGroups from './Resources/ColumnGroups.vue'
import ColumnProperties from './Resources/ColumnProperties.vue'
import BodyApplication from './Resources/BodyApplication.vue'
import MouseRightMenuHandle from '../Helper/MenuMouse/ButtonRight/MouseRightMenuHandle.vue'
import MouseLeftMenuHandle from '../Helper/MenuMouse/ButtonLeft/MouseLeftMenuHandle.vue'
import ModalHandle from './Modal/ModalHandle.vue'

export default {
    components: {
        ColumnGroups,
        ColumnProperties,
        BodyApplication,
        MouseRightMenuHandle,
        MouseLeftMenuHandle,
        ModalHandle
    },
    data() {
        return {
            showTransparent: true
        }
    },
    mounted() {
        setTimeout(() => {
            let firstButton = document.querySelector('.column-properties .button:first-of-type')
            if(firstButton) firstButton.click()
        }, 100)

        window.eventBus.$on('showTransparent', event => this.showTransparent = event)
    },
    methods: {
        closeAll() {
            this.showTransparent = false
            window.eventBus.$emit('closeAllModal', false)
        }
    }
}
</script>