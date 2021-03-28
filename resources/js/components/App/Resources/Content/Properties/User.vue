<template>
    <div>
       <div class="top-handle flex-column">
            <div class="search-friends flex-column justify-content-center">Encontre ou comece uma conversa</div>
        </div>
        <div class="properties-navigation-me">
            <Button @click.native="changeBody('myFriends', { name: 'Amigos' })">
                <span slot="icon" v-html="svg.friends"></span>
                <template v-slot:info>
                    <span class="text-truncate">Amigos</span>
                </template>
            </Button>
            <Button>
                <span slot="icon" v-html="svg.nitro"></span>
                <template v-slot:info>
                    <span class="text-truncate">Nitro</span>
                </template>
            </Button>
            <div class="separator-property">
                <span>MENSAGENS DIRETAS</span>
                <div class="icon"><i class="fas fa-plus"></i></div>
            </div>
            <Button
                v-for="friend in friends"
                :key="friend.id"
                :avatar="friend.image"
                :status="friend.status"
                menu="users"
                @click.native="changeBody('conversation', friend)"
            >
                <template v-slot:info>
                    <span class="text-truncate">{{ friend.name }}</span>
                    <span class="text-truncate" v-if="!!friend.activity">{{ friend.activity }}<i class="fas fa-file-alt ml-1"></i></span>
                </template>
                <i slot="remove" class="fas fa-times flex-column justify-content-center" @click="hide(friend)"></i>
            </Button>
            <div class="popup-me">
                <div class="avatar" :style="{ 'background-image': `url('${me.image}')` }">
                    <div :class="['status', me.status]"></div>
                </div>
                <div class="info">
                    <span class="text-truncate"><b>{{ me.name }}</b><br>{{ me.nickId }}</span>
                </div>
                <div class="buttons">
                    <button data-toggle="tooltip" title="Dessilenciar" @click="microphone = !microphone" v-html="toggleMicrophone()"></button>
                    <button data-toggle="tooltip" title="Desativar áudio" @click="speaker = !speaker" v-html="toggleSpeaker()"></button>
                    <button data-toggle="tooltip" title="Configurações de Usuário" v-html="svg.settings"></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Button from './Layouts/Button.vue'
export default {
    components: { Button },
    data() {
        return {
            audio: window.audioHandle,
            svg: window.svgHandle,
            microphone: false,
            speaker: true,
            me: window.myUser,
            friends: [
                {
                    id: 1,
                    name: 'Nícollas',
                    image: 'https://cdn.discordapp.com/avatars/275725966536474625/e552ba8d2b889db7f9f0e50b7527041a.png',
                    status: 'busy'
                },
                {
                    id: 2,
                    name: 'Bill Gates',
                    image: 'https://cdn-istoedinheiro-ssl.akamaized.net/wp-content/uploads/sites/17/2021/02/bill-gates-e1613016156235.jpg',
                    status: 'online'
                },
                {
                    id: 3,
                    name: 'Mark Zuckerberg',
                    image: 'https://img.olhardigital.com.br/wp-content/uploads/2019/11/20191106064628.jpg',
                    status: 'busy',
                    activity: 'Navegando no Facebook'
                },
                {
                    id: 4,
                    name: 'Linus Torvalds',
                    image: 'https://diolinux.com.br/wp-content/uploads/2019/04/Linus-Torvalds-sobre-o-Linux-Desktop.jpg',
                    status: 'absent'
                },
                {
                    id: 5,
                    name: 'James Gosling',
                    image: 'https://computerworld.com.br/wp-content/uploads/2020/08/James-Gosling-criador-do-Java-sobre-carreira-Low-Code-e-futuro-da-linguagem.jpg',
                    status: 'online'
                },
                {
                    id: 6,
                    name: 'Guido van Rossum',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Guido_van_Rossum_OSCON_2006.jpg',
                    status: 'busy',
                    activity: 'Jogando Visual Studio Code'
                },
                {
                    id: 7,
                    name: 'Rasmus Lerdorf',
                    image: 'https://pbs.twimg.com/profile_images/918348833205116928/V9ROYRNJ.jpg',
                    status: 'absent'
                }
            ]
        }
    },
    watch: {
        microphone() {
            this.audio.getSound('microphone', this.microphone ? 'enabled' : 'disabled')
        },
        speaker() {
            this.audio.getSound('speaker', this.speaker ? 'enabled' : 'disabled')
        }
    },
    methods: {
        hide(friend) {
            if(friend.id) {
                window.removeByAttr(this.friends, 'id', friend.id)
            }
        },

        changeBody(type, data = {}) {
            window.eventBus.$emit('changeBody', { type, data })
        },

        toggleMicrophone() {
            return this.microphone ? this.svg.microphone.enabled : this.svg.microphone.disabled
        },

        toggleSpeaker() {
            return this.speaker ? this.svg.speaker.enabled : this.svg.speaker.disabled
        }
    }
}
</script>