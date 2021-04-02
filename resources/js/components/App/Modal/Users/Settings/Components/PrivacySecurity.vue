<template>
    <div class="modalBody">
        <span class="title">Privacidade e Segurança</span>
        <div class="two-factor h-auto" style="margin-top: -15px">
            <span class="title-mini">Mensagem direta segura</span>
            <span class="description w-100 mt-0 mb-2">Analisar e excluir automaticamente mensagens diretas recebidas com mídia explícita.</span>
            <Selector v-for="(selector, i) in selectors" :key="i" :border="selector.borderColor" :active="selector.active" @click.native="toggleActive(i)">
                <span class="title-selector" slot="title">{{ selector.title }}</span>
                <span class="description-selector" slot="description">{{ selector.description }}</span>
            </Selector>
        </div>
        <div class="two-factor mt-2 h-auto">
            <span class="title-mini">Padrões de privacidade do servidor</span>
            <Option :active="true">
                <span class="title-option" slot="title">Permitir mensagens diretas de membros do servidor.</span>
            </Option>
            <span class="description w-100 mt-0">Esta configuração é aplicada quando você entra em um novo servidor. Isso não se aplica aos servidores dos quais você já faz parte.</span>
        </div>
        <div class="separator mt-1 mb-5"></div>
        <div class="two-factor mt-0 h-auto">
            <span class="title-mini mb-2">Quem pode iniciar uma amizade com você</span>
            <Option :active="true">
                <span class="title-option" slot="title">Todos</span>
            </Option>
            <div class="separator mt-3"></div>
            <Option :active="true">
                <span class="title-option" slot="title">Amigos de amigos</span>
            </Option>
            <div class="separator mt-3"></div>
            <Option :active="true">
                <span class="title-option" slot="title">Membros do servidor</span>
            </Option>
            <div class="separator mt-3"></div>
        </div>
        <div class="two-factor mt-0 h-auto">
            <span class="title-mini mb-2">Rich presence</span>
            <Option :active="true">
                <span class="title-option" slot="title">Permitir que amigos entrem no jogo.</span>
                <span class="description-option" slot="description">Esta configuração permite que seus amigos entrem no jogo sem precisar pedir.</span>
            </Option>
            <div class="separator mt-3"></div>
            <Option>
                <span class="title-option" slot="title">Permitir que os participantes do canal de voz entrem no jogo.</span>
                <span class="description-option" slot="description">Esta configuração permite que as pessoas no seu atual canal de voz entrem no jogo sem precisar pedir. Esse recurso só funciona em servidores que não sejam de comunidade.</span>
            </Option>
            <div class="separator mt-3"></div>
        </div>
        <div class="two-factor mt-0 h-auto">
            <span class="title-mini mb-2">Como utilizamos seus dados</span>
            <Option :active="true">
                <span class="title-option" slot="title">Utilizar dados para melhorar o Discord.</span>
                <span class="description-option" slot="description">Esta configuração nos permite utilizar e processar informações sobre a maneira como você navega e usa o Discord, para fins analíticos. Por exemplo, isso nos permite incluir você em novos experimentos de funcionalidades.<a class="ml-1" target="_blank" href="https://support.discord.com/hc/pt-br/articles/360004109911">Saiba mais aqui</a></span>
            </Option>
            <div class="separator mt-3"></div>
            <Option :active="true">
                <span class="title-option" slot="title">Utilizar dados para personalizar minha experiência no Discord.</span>
                <span class="description-option" slot="description">Esta configuração nos permite utilizar informações, como com quem você conversa ou os jogos que você joga, para personalizar o Discord para você.<a class="ml-1" target="_blank" href="https://support.discord.com/hc/pt-br/articles/360004109911">Saiba mais aqui</a></span>
            </Option>
            <div class="separator mt-3"></div>
            <Option>
                <span class="title-option" slot="title">Permite que o Discord monitore o uso do leitor de tela.</span>
                <span class="description-option" slot="description">Esta opção permite que registremos quando você usa um leitor de tela junto ao Discord para melhorar a acessibilidade.<a class="ml-1" target="_blank" href="https://support.discord.com/hc/pt-br/articles/360035966492">Saiba mais aqui</a></span>
            </Option>
            <div class="separator mt-3"></div>
            <Option :active="true" :option="false">
                <span class="title-option" slot="title">Utilizar dados para fazer o Discord funcionar.</span>
                <span class="description-option" slot="description">Precisamos armazenar e processar alguns dados para te fornecer os serviços básicos do Discord, tais como suas mensagens, servidores em que você está e mensagens diretas. Ao usar o Discord, você nos permite fornecer estes serviços básicos. Você pode interromper isso ao <b class="link" @click="toMenu('Main')">desativar ou excluir sua conta</b>.</span>
            </Option>
            <div class="separator mt-3"></div>
        </div>
    </div>
</template>
<script>
import Selector from '../Layouts/Selector.vue'
import Option from '../Layouts/Option.vue'

export default {
    components: { Selector, Option },
    data() {
        return {
            selectors: [
                {
                    title: 'Mantenha-me em segurança',
                    description: 'Analisar mensagens diretas de todos.',
                    borderColor: '#FAA61A',
                    active: false
                },
                {
                    title: 'Meus amigos são legais',
                    description: 'Analisar mensagens diretas de todos a menos que seja de um amigo.',
                    borderColor: '#43B581',
                    active: true
                },
                {
                    title: 'Não escanear',
                    description: 'Mensagens diretas não serão escaneadas em busca de conteúdo explícito.',
                    borderColor: '#F04747',
                    active: false
                }
            ]
        }
    },
    methods: {
        toggleActive(index) {
            let selector = this.selectors.filter((el, i) => i === index)
            if(Array.isArray(selector) && selector.length > 0) {
                this.removeActive()
                selector[0].active = true
            }
        },

        removeActive() {
            this.selectors.forEach(e => e.active = false)    
        },

        toMenu(menu) {
            window.eventBus.$emit('changeSettingsMenu', menu)
        }
    }
}
</script>