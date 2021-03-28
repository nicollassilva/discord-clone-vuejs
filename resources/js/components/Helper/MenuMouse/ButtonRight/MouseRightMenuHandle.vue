<template>
    <div>
        <Groups></Groups>
        <Users></Users>
        <OptionsCreate></optionsCreate>
    </div>
</template>
<script>
import Groups from './Layouts/Groups.vue'
import Users from './Layouts/Users.vue'
import OptionsCreate from './Layouts/OptionsCreate.vue'
export default {
    components: {
        Groups,
        Users,
        OptionsCreate
    }
}
</script>