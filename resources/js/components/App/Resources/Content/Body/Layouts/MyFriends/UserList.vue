<template>
    <div>
        <div class="user-list" v-for="list in lists" :key="list">
            <div class="avatar"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            lists: 20
        }
    }
}
</script>