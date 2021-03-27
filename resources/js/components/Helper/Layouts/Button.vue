<template>
    <div class="rounded-icon flex-column justify-content-center"
        :data-placement="dataPlacement"
        data-toggle="tooltip"
        :title="[title ? title : '']"
        :data-menu="[menu ? menu : '']"
        :style="[background ? { 'background-image': `url('${background}')` } : '']"
        :class="[[intuitive ? 'intuitive' : ''], [owner ? 'icon-me active' : '']]"
    >
    <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        dataPlacement: {
            type: String,
            default: 'right'
        },
        background: String,
        menu: String,
        intuitive: Boolean,
        owner: Boolean
    }
}
</script>