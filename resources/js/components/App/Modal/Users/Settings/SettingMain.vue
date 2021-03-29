<template>
    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">
    <div v-if="visibility" class="modal-content userSettings">
        <div class="menu-column">
            <div class="menu">
                <nav>
                    <li class="title">Configurações de Usuário</li>
                    <li>Minha conta</li>
                    <li>Privacidade e segurança</li>
                    <li>Aplicativos autorizados</li>
                    <li>Conexões</li>
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
                    <div class="separator"></div>
                    <div class="socials">
                        <a href="https://twitter.com/discord" v-html="svg.twitter"></a>
                        <a href="https://facebook.com/discord" v-html="svg.facebook"></a>
                        <a href="https://instagram.com/discord" v-html="svg.instagram"></a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            visibility: false,
            svg: window.svgHandle
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
        
        console.log(navigator.platform, navigator.appVersion)
    }
}
</script>