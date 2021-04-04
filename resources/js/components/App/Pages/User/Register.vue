<template>
        <div class="login-wrapper">
            <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">
                <div v-if="transition" class="box-wrapper">
                    <form class="login" autocomplete="off">
                        <span class="title">Criar uma conta</span>
                        <div class="form-group mt-3">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" class="form-control" name="email">
                        </div>
                        <div class="form-group mt-3">
                            <label for="username">Nome de usuário</label>
                            <input type="text" id="username" class="form-control" name="username">
                        </div>
                        <div class="form-group">
                            <label for="password">Senha</label>
                            <input type="password" id="password" class="form-control" name="password">
                        </div>
                        <div class="form-group">
                            <label>Data de Nascimento</label>
                            <div class="row d-flex justify-content-between">
                                <div class="col">
                                    <div class="selector" @click="daySelected = !daySelected">
                                        <span>Selecionar</span>
                                        <i :class="['fas', `fa-chevron-${ !daySelected ? 'down' : 'up' }`]"></i>
                                        <MenuSelector v-if="daySelected" type="day" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="selector" @click="monthSelected = !monthSelected">
                                        <span>Selecionar</span>
                                        <i :class="['fas', `fa-chevron-${ !monthSelected ? 'down' : 'up' }`]"></i>
                                        <MenuSelector v-if="monthSelected" type="mounth" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="selector" @click="yearSelected = !yearSelected">
                                        <span>Selecionar</span>
                                        <i :class="['fas', `fa-chevron-${ !yearSelected ? 'down' : 'up' }`]"></i>
                                        <MenuSelector v-if="yearSelected" type="year" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Continuar</button>
                        <p class="text-muted py-2"><router-link class="link w-auto float-none" tag="span" to="/login">Já tem uma conta?</router-link></p>
                    </form>
                </div>
            </transition>
        </div>
</template>
<script>
import MenuSelector from './Components/MenuSelector.vue'

export default {
    components: { MenuSelector },
    data() {
        return {
            transition: false,
            daySelected: false,
            monthSelected: false,
            yearSelected: false
        }
    },
    
    mounted() {
        this.transition = true
    },

    destroyed() {
        this.transition = false
    }
}
</script>