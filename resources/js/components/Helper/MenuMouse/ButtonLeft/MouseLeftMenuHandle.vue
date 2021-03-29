<template>
    <div>
        <ButtonMore></ButtonMore>
        <MyStatus></MyStatus>
        <MDCreate></MDCreate>
    </div>
</template>
<script>
import ButtonMore from './Layouts/ButtonMore.vue'
import MyStatus from './Layouts/MyStatus.vue'
import MDCreate from './Layouts/MDCreate.vue'

export default {
    components: { ButtonMore, MyStatus, MDCreate }
}
</script>