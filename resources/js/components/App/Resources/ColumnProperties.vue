<template>
    <div>
        <div class="column-properties">
            <User v-if="layout === 'me'"></User>
            <Group v-else :data="data"></Group>
        </div>
    </div>
</template>
<script>
import User from './Content/Properties/User.vue'
import Group from './Content/Properties/Group.vue'

export default {
    components: {
        User, Group
    },
    data() {
        return {
            layout: 'me',
            data: {}
        }
    },
    mounted() {
        window.eventBus.$on('changePage', (event) => {
            if(event.page && event.data) {
                this.data = event.data
                this.layout = event.page

                setTimeout(() => {
                    let firstButton = document.querySelector('.column-properties .button:first-of-type')
                    if(firstButton) {
                        firstButton.classList.add('active')
                        firstButton.click()
                    }
                }, 100)
            }
        })
    }
}
</script>