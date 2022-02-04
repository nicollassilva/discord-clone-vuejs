<template>
    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">
        <div class="midModalBody profile" v-if="visibility">
            <div class="head-profile">
                <div class="profile-info">
                    <div class="avatar"
                        :style="{ 'background-image': `url('${userProfile.image}')` }">
                        <div data-toggle="tooltip" 
                            :title="getStatusTitle(userProfile.status)"
                            :class="['status', userProfile.status]"></div>
                            Perfil
                    </div>
                </div>
                <div class="profile-menu"></div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            visibility: true,
            userProfile: window.appData.users[0]
        }
    },
    mounted() {
        window.eventBus.$on('openProfile', event => {
            this.visibility = true
            this.userProfile = event

            window.eventBus.$emit('showTransparent', true)
        })

        window.eventBus.$on('closeAllModal', event => this.visibility = event)
    },
    methods: {
        getStatusTitle(status) {
            return window.appData.realStatusTitle(status)
        }
    }
}
</script>