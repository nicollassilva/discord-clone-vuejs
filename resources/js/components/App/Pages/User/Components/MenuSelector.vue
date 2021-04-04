<template>
    <div class="menu">
        <div v-if="type && type === 'day'">
            <li v-for="day in 31" :key="day">{{ day }}</li>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'day'
        }
    }
}
</script>