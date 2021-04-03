<template>
    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">
    <div v-if="visibility" class="modalContent userSettings">
        <div class="menu-column">
            <div class="menu">
                <nav class="userSettings">
                    <li class="title">Configurações de Usuário</li>
                    <li @click="toModal('Main')" :class="{ active: bodyActive === 'Main' }">Minha conta</li>
                    <li @click="toModal('PrivacySecurity')" :class="{ active: bodyActive === 'PrivacySecurity' }">Privacidade e segurança</li>
                    <li @click="toModal('AuthorizedApplications')" :class="{ active: bodyActive === 'AuthorizedApplications' }">Aplicativos autorizados</li>
                    <li @click="toModal('Connections')" :class="{ active: bodyActive === 'Connections' }">Conexões</li>
                    <div class="separator"></div>
                    <li class="title">Configurações de Cobrança</li>
                    <li class="menuLink">Discord Nitro</li>
                    <li>Impulso de servidor</li>
                    <li>Inventário de presentes</li>
                    <li>Cobranças</li>
                    <div class="separator"></div>
                    <li class="title">Config. do Aplicativo</li>
                    <li>Voz e vídeo</li>
                    <li>Texto e imagens</li>
                    <li>Aparência</li>
                    <li>Notificações</li>
                    <li>Atalhos do teclado</li>
                    <li>Idioma</li>
                    <li>Modo streamer</li>
                    <div class="separator"></div>
                    <div class="separator mt-2"></div>
                    <li>Registro de alterações</li>
                    <li>HypeSquad</li>
                    <div class="separator"></div>
                    <li class="menuDanger">Sair</li>
                    <div class="separator mb-3"></div>
                    <div class="socials">
                        <a href="https://twitter.com/discord" v-html="svg.twitter"></a>
                        <a href="https://facebook.com/discord" v-html="svg.facebook"></a>
                        <a href="https://instagram.com/discord" v-html="svg.instagram"></a>
                    </div>
                </nav>
            </div>
        </div>
        <div class="menu-layout">
            <Main :User="user" v-if="bodyActive === 'Main'"></Main>
            <PrivacySecurity v-if="bodyActive === 'PrivacySecurity'"></PrivacySecurity>
            <AuthorizedApplications v-if="bodyActive === 'AuthorizedApplications'"></AuthorizedApplications>
            <Connections v-if="bodyActive === 'Connections'"></Connections>
            <div class="modalClose" v-html="svg.timesClose" @click="visibility = false"></div>
        </div>
    </div>
    </transition>
</template>
<script>
import Main from './Components/Main.vue'
import PrivacySecurity from './Components/PrivacySecurity.vue'
import AuthorizedApplications from './Components/AuthorizedApplications.vue'
import Connections from './Components/Connections.vue'

export default {
    components: {
        Main,
        PrivacySecurity,
        AuthorizedApplications
    },
    data() {
        return {
            visibility: false,
            svg: window.svgHandle,
            bodyActive: 'Main',
            user: window.myUser
        }
    },
    mounted() {
        window.eventBus.$on('toggleModal', event => {
            if(event.modal && event.modal === 'userSettings') {
                this.visibility = true
            }
        })
        
        document.addEventListener('keyup', event => {
            if(event.key == 'Escape') {
                this.visibility = false
            }
        })

        window.eventBus.$on('changeSettingsMenu', event => {
            if(event != this.bodyActive) {
                this.bodyActive = event
            }
        })
    },
    methods: {
        toModal(body) {
            if(body !== this.bodyActive) {
                this.bodyActive = body
            }
        }
    }
}
</script>