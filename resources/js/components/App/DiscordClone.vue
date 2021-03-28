<template>
    <div>
        <ColumnGroups></ColumnGroups>
        <ColumnProperties></ColumnProperties>
        <BodyApplication></BodyApplication>
        <MouseMenuHandle></MouseMenuHandle>
    </div>
</template>
<script>

import ColumnGroups from './Resources/ColumnGroups.vue'
import ColumnProperties from './Resources/ColumnProperties.vue'
import BodyApplication from './Resources/BodyApplication.vue'
import MouseMenuHandle from '../Helper/MenuMouse/MouseMenuHandle.vue'

export default {
    components: {
        ColumnGroups, ColumnProperties, BodyApplication, MouseMenuHandle
    },
    mounted() {
        setTimeout(() => {
            let firstButton = document.querySelector('.column-properties .button:first-of-type')
            if(firstButton) firstButton.click()
        }, 100)
    }
}
</script>