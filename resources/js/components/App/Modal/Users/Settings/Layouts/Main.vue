<template>
    <div class="modalBody">
        <span class="title">Minha conta</span>
        <div class="box-settings">
            <div class="initial-settings">
                <label class="avatar" for="userAvatar" :style="{ 'background-image': `url('${User.image}')` }"><i></i></label>
                <input type="file" class="d-none" accept="image/*" id="userAvatar">
                <span class="nameUser">
                    {{ User.name }}<em>{{ User.hashtagNumber }}</em>
                </span>
                <button class="more" @click.stop="menuClick($event, 'changeExcluseAvatar')" v-html="svg.moreIconHoriz"></button>
            </div>
            <div class="flex-settings">
                <div class="option">
                    <span class="title-mini">Nome de usuário</span>
                    <span>{{ User.name }}<em>{{ User.hashtagNumber }}</em></span>
                    <button>Editar</button>
                </div>
                <div class="option">
                    <span class="title-mini">E-mail</span>
                    <span>Você ainda não adicionou um telefone.</span>
                    <button>Editar</button>
                </div>
                <div class="option">
                    <span class="title-mini">Telefone</span>
                    <span>Você ainda não adicionou um telefone.</span>
                    <button>Adicionar</button>
                </div>
            </div>
        </div>
        <div class="separator"></div>
        <span class="title mt-3">Senha e Autenticação</span>
        <button class="purpleButton ml-1">Mudar senha</button>
        <div class="two-factor">
            <span class="title-mini">Verificação em duas etapas</span>
            <span class="description">Proteja sua conta do Discord com uma camada extra de segurança. Uma vez configurada, serão necessários tanto a senha quanto um código de verificação de seu dispositivo móvel para entrar.</span>
            <div class="image-twoFactor"></div>
            <button class="purpleButton" style="margin-top: 15px">Ativar a verificação em duas etapas</button>
        </div>
        <div class="separator"></div>
        <div class="two-factor mt-1">
            <span class="title-mini">Remoção de Conta</span>
            <span class="description w-100 mt-2">Desativar sua conta significa que você poderá recuperá-la quando quiser.</span>
            <button class="dangerButton" style="margin-top: 15px">Desativar conta</button>
            <button class="dangerButtonInline ml-3" style="margin-top: 15px">Excluir conta</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        User: Object
    },
    data() {
        return {
            svg: window.svgHandle
        }
    },
    methods: {
        menuClick(event, menu) {
            window.eventBus.leftMenuClick(menu, event.clientX, event.clientY)
        }
    }
}
</script>