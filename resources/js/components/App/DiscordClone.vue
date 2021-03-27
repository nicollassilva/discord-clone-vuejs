<template>
    <div>
        <ColumnGroups></ColumnGroups>
        <ColumnProperties></ColumnProperties>
        <BodyApplication></BodyApplication>
        <GroupsMenuHandle></GroupsMenuHandle>
        <UsersMenuHandle></UsersMenuHandle>
    </div>
</template>
<script>

import ColumnGroups from './Resources/ColumnGroups.vue'
import ColumnProperties from './Resources/ColumnProperties.vue'
import BodyApplication from './Resources/BodyApplication.vue'
import GroupsMenuHandle from '../Helper/MenuMouse/GroupsMenuHandle.vue'
import UsersMenuHandle from '../Helper/MenuMouse/UsersMenuHandle.vue'

export default {
    components: {
        ColumnGroups, ColumnProperties, BodyApplication, GroupsMenuHandle, UsersMenuHandle
    }
}
</script>