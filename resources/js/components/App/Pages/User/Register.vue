<template>
        <div class="login-wrapper" @click.self="toggleMenu">
            <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in" appear>
                <div v-if="transition" class="box-wrapper">
                    <form class="login" autocomplete="off">
                        <span class="title">Criar uma conta</span>
                        <div class="form-group mt-3">
                            <label for="email">E-mail</label>
                            <input type="email" id="email" class="form-control" v-model="data.email" required autofocus>
                        </div>
                        <div class="form-group mt-3">
                            <label for="username">Nome de usuário</label>
                            <input type="text" id="username" class="form-control" v-model="data.username" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Senha</label>
                            <input type="password" id="password" class="form-control" v-model="data.password" required>
                        </div>
                        <div class="form-group">
                            <label>Data de Nascimento</label>
                            <div class="row d-flex justify-content-between">
                                <div class="col">
                                    <div class="selector"
                                        @click="toggleMenu('day')">
                                            <span>{{ daySelected || 'Selecionar' }}</span>
                                            <i :class="['fas', `fa-chevron-${ openedMenu === 'day' ? 'down' : 'up' }`]"></i>
                                            <MenuSelector
                                                @updateDay="daySelected = $event"
                                                v-if="openedMenu === 'day'"
                                                type="day" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="selector"
                                        @click="toggleMenu('month')">
                                            <span>{{ monthSelected || 'Selecionar' }}</span>
                                            <i :class="['fas', `fa-chevron-${ openedMenu === 'month' ? 'down' : 'up' }`]"></i>
                                            <MenuSelector
                                                @updateMonth="monthSelected = $event"
                                                v-if="openedMenu === 'month'"
                                                type="month" />
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="selector"
                                        @click="toggleMenu('year')">
                                            <span>{{ yearSelected || 'Selecionar' }}</span>
                                            <i :class="['fas', `fa-chevron-${ openedMenu === 'year' ? 'down' : 'up' }`]"></i>
                                            <MenuSelector
                                                @updateYear="yearSelected = $event"
                                                v-if="openedMenu === 'year'"
                                                type="year" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" name="day" :value="data.birthday.day">
                        <input type="hidden" name="month" :value="data.birthday.month">
                        <input type="hidden" name="year" :value="data.birthday.year">
                        <button type="submit" :disabled="!nextStep">Continuar</button>
                        <p class="text-muted py-2 mt-1 mb-0">
                            <router-link class="link w-auto float-none" tag="span" to="/login">Já tem uma conta?</router-link>
                        </p>
                        <p class="text-muted mb-0" style="font-size: 10px">
                            Ao se registrar, você concorda com os termos de serviço e a política de privacidade do Discord.
                        </p>
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
            data: {
                email: '',
                username: '',
                password: '',
                birthday: {
                    day: '',
                    month: '',
                    year: ''
                }
            },
            transition: false,
            openedMenu: '',
            daySelected: null,
            monthSelected: null,
            yearSelected: null,
            months: window.appData.months,
            next: false
        }
    },

    computed: {

        nextStep() {
            let data = this.data
            if(data.email != '' && data.username != '' && data.password != '' && data.password.length >= 6) return true
            else return false
        }
    },
    
    mounted() {
        this.transition = true
    },

    destroyed() {
        this.transition = false
    },

    methods: {
        toggleMenu(menu = '') {
            if(this.openedMenu === menu) {
                this.openedMenu = ''
            } else [
                this.openedMenu = menu
            ]
        }
    }
}
</script>