<template>
    <div
        class="button"
        :data-menu="[menu ? menu : '']">
        <div class="icon"
            :style="[avatar ? { 'background-image': `url('${avatar}')` } : '']"
            :class="[avatar ? 'user' : '']"
        >
            <slot name="icon"></slot>
            <div class="status"
                v-if="!!this.status"
                :class="[status ? status : '']"
                data-toggle="tooltip"
                :title="status ? getStatusTitle() : ''"
            ></div>
        </div>
        <div class="infos flex-column justify-content-center">
            <slot name="info"></slot>
            <slot name="remove"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        avatar: String,
        status: String,
        menu: String,
        active: Boolean
    },
    methods: {
        getStatusTitle() {
            return window.appData.realStatusTitle(this.status)
        }
    }
}
</script>