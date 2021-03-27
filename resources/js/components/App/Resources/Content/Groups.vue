<template>
    <div>
        <Button
            v-for="group in groups"
            :key="group.id"
            :title="group.name"
            :background="group.icon"
            menu="groups"
            @click.native="changePage(group)"
        ></Button>
    </div>
</template>
<script>
import Button from '../../../Helper/Layouts/Button.vue'

export default {
    components: { Button },
    data() {
        return {
            groups: [
                {
                    id: 1,
                    name: 'Discord Oficial',
                    icon: 'https://cdn.icon-icons.com/icons2/1476/PNG/512/discord_101785.png'
                },
                {
                    id: 2,
                    name: 'Minecraft Group',
                    icon: 'https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/minecraft-icon.png'
                },
                {
                    id: 3,
                    name: 'Facebook Oficial Group 2020',
                    icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png'
                },
                {
                    id: 4,
                    name: 'Twitter Oficial',
                    icon: 'https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg'
                },
                {
                    id: 5,
                    name: 'Instagram Oficial',
                    icon: 'https://neilpatel.com/wp-content/uploads/2017/08/instagram-1.jpg'
                },
                {
                    id: 6,
                    name: 'Snapchat Oficial',
                    icon: 'https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo'
                },
                {
                    id: 7,
                    name: 'WhatsApp Oficial',
                    icon: 'https://imagens.canaltech.com.br/empresas/630.400.jpg'
                },
                {
                    id: 8,
                    name: 'Telegram Oficial',
                    icon: 'https://manualdousuario.net/wp-content/uploads/2018/11/Telegram-logo.png'
                },
                {
                    id: 9,
                    name: 'TikTok Oficial',
                    icon: 'https://s16.tiktokcdn.com/musical/resource/mtact/static/images/share_img.png'
                }
            ]
        }
    },
    methods: {
        changePage(group) {
            window.eventBus.$emit('changePage', {
                page: 'group',
                data: group
            })
        }
    }
}
</script>