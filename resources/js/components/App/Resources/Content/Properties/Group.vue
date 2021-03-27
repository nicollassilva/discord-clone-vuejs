<template>
    <div>
        <div class="top-handle flex-column">
            <div class="group-name">
                <span class="text-truncate">{{ data.name }}</span>
                <div class="icon flex-column justify-content-center">
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {
                name: 'Default group'
            }
        }
    }
}
</script>