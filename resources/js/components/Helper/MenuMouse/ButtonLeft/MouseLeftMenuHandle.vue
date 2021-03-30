<template>
    <div>
        <ButtonMore></ButtonMore>
        <MyStatus></MyStatus>
        <MDCreate></MDCreate>
        <ChangeExcluseAvatar></ChangeExcluseAvatar>
    </div>
</template>
<script>
import ButtonMore from './Layouts/ButtonMore.vue'
import MyStatus from './Layouts/MyStatus.vue'
import MDCreate from './Layouts/MDCreate.vue'
import ChangeExcluseAvatar from './Layouts/UserProfile/ChangeExcluseAvatar.vue'

export default {
    components: { ButtonMore, MyStatus, MDCreate, ChangeExcluseAvatar }
}
</script>