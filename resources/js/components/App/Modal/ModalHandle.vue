<template>
    <div>
        <SettingMain></SettingMain>
        <ProfileMain></ProfileMain>
    </div>
</template>
<script>
import SettingMain from './Users/Settings/SettingMain.vue'
import ProfileMain from './Users/Profile/ProfileMain.vue'

export default {
    components: { SettingMain, ProfileMain }    
}
</script>