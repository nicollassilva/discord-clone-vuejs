<template>
    <div>
        <div :class="['option-settings', !!active && 'active']" @click="toggleActive">
            <slot name="title"></slot>
            <div v-if="option" class="option-box"></div>
            <slot name="description"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        active: {
            type: Boolean,
            default: false
        },
        option: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        toggleActive(event) {
            if(event.target.classList.contains('option-settings')) {
                event.target.classList.toggle('active')
            } else {
                event.target.parentNode.classList.toggle('active')
            }
        }
    }
}
</script>