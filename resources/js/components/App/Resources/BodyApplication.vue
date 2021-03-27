<template>
    <div class="body-application">
        <TopBar></TopBar>
    </div>
</template>
<script>
import TopBar from './Content/Body/Layouts/TopBar.vue'
export default {
    components: {
        TopBar
    },
    mounted() {
        window.eventBus.$on('changeBody', event => {
            console.log(event)
        })
    }
}
</script>