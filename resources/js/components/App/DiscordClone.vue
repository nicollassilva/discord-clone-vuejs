<template>
    <div>
        <ColumnGroups></ColumnGroups>
        <ColumnProperties></ColumnProperties>
        <BodyApplication></BodyApplication>
        <MouseRightMenuHandle></MouseRightMenuHandle>
        <MouseLeftMenuHandle></MouseLeftMenuHandle>
    </div>
</template>
<script>

import ColumnGroups from './Resources/ColumnGroups.vue'
import ColumnProperties from './Resources/ColumnProperties.vue'
import BodyApplication from './Resources/BodyApplication.vue'
import MouseRightMenuHandle from '../Helper/MenuMouse/ButtonRight/MouseRightMenuHandle.vue'
import MouseLeftMenuHandle from '../Helper/MenuMouse/ButtonLeft/MouseLeftMenuHandle.vue'

export default {
    components: {
        ColumnGroups,
        ColumnProperties,
        BodyApplication,
        MouseRightMenuHandle,
        MouseLeftMenuHandle
    },
    mounted() {
        setTimeout(() => {
            let firstButton = document.querySelector('.column-properties .button:first-of-type')
            if(firstButton) firstButton.click()
        }, 100)
    }
}
</script>