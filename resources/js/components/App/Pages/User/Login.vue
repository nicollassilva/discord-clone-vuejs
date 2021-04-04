<template>
        <div class="login-wrapper">
            <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in" appear>
                <div v-if="transition" class="box-wrapper">
                    <form class="login" autocomplete="off">
                        <span class="title">Boas-vindas de volta!</span>
                        <span class="description">Estamos muito animados em te ver novamente!</span>
                        <div class="form-group mt-3">
                            <label for="email">E-mail ou número de telefone</label>
                            <input type="email" id="email" class="form-control" name="email" required autofocus>
                        </div>
                        <div class="form-group" style="margin-top: 2px;">
                            <label for="password">Senha</label>
                            <input type="password" id="password" class="form-control" name="password" required>
                        </div>
                        <span class="link forgout mb-3">Esqueceu sua senha?</span>
                        <button type="submit">Entrar</button>
                        <p class="text-muted mt-3">Precisando de uma conta? <router-link class="link w-auto float-none" tag="span" to="/register">Registre-se</router-link></p>
                    </form>
                </div>
            </transition>
        </div>
</template>
<script>
export default {
    data() {
        return {
            transition: false
        }
    },
    
    mounted() {
        this.transition = true
    },

    destroyed() {
        setTimeout(_ => this.transition = false, 500)
    }
}
</script>