<template>
    <div class="mid-box">
        <div class="friend-title">{{ title }} — {{ count }}</div>
        <UserList></UserList>
    </div>
</template>
<script>
import UserList from './UserList.vue'
export default {
    components: { UserList },
    data() {
        return {
            title: 'ONLINE',
            count: 0
        }
    },
    mounted() {
        window.eventBus.$on('changeUserList', event => {
            this.title = this.realTitle(event.page)
            this.count = event.data.length
        })
    },
    methods: {
        realTitle(page) {
            if(page == 'disponível') {
                return 'ONLINE'
            } else if(page == 'todos') {
                return 'TODOS OS AMIGOS'
            } else if(page == 'pendente') {
                return 'PENDENTES'
            } else {
                return 'BLOQUEADOS'
            }
        }
    }
}
</script>