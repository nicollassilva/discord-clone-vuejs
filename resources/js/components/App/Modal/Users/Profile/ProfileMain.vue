<template>
    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">
    <div class="midModal" v-if="visibility">
        <div class="midModalBody">

        </div>
    </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            visibility: false,
            userProfile: {}
        }
    },
    mounted() {
        document.addEventListener('click', event => {
            if(event.target) {
                let eventElement = event.target
                if(eventElement.classList.contains('midModal')) {
                    eventElement.style.backgroundColor = 'transparent'
                    this.visibility = false
                }
            }
        })

        window.eventBus.$on('openProfile', event => {
            this.visibility = true
            this.userProfile = event
        })
    }
}
</script>