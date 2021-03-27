<template>
    <div>
        <GroupsMenuHandle></GroupsMenuHandle>
        <UsersMenuHandle></UsersMenuHandle>
    </div>
</template>
<script>
import GroupsMenuHandle from './Layouts/GroupsMenuHandle.vue'
import UsersMenuHandle from './Layouts/UsersMenuHandle.vue'
export default {
    components: {
        GroupsMenuHandle, UsersMenuHandle
    }
}
</script>