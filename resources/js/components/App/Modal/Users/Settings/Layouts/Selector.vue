<template>
    <div :class="['selector-settings', !!active && 'active']" :style="[ border ? { borderLeft: `3px solid ${border}` } : '' ]">
        <div class="checkbox"></div>
        <div class="selector-info">
            <slot name="title"></slot>
            <slot name="description"></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        border: String,
        active: {
            type: Boolean,
            default: false
        }
    }
}
</script>