<template>
    <div class="widget-user-message">
        <div class="avatar" :style="{ 'background-image': `url('${Data.image}')` }"></div>
        <div class="name">{{ Data.name }}</div>
        <span class="introduction">Este é o começo do seu histórico de mensagens diretas com <b>@{{ Data.name }}</b></span>
    </div>
</template>
<script>
export default {
    props: { Data: Object }
}
</script>