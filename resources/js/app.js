/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import SvgHandle from './components/Helper/SvgHandle'
import AudioHandle from './components/Helper/AudioHandle'
import ApplicationData from './components/Helper/ApplicationData'
import VueRouter from 'vue-router'

/**
 * Globals variables
 */

Vue.use(VueRouter)

window.Vue = require('vue').default
window.svgHandle = SvgHandle
window.appData = ApplicationData
window.audioHandle = AudioHandle
window.eventBus = new Vue({
    methods: {
        changePage(page, data) {
            this.$emit('changePage', { page, data })
        },

        leftMenuClick(menu, ...positions) {
            this.$emit('leftMenuEvent', { type: menu, visible: true, positionX: positions[0], positionY: positions[1] })
        },
        
        toggleModal(modal, ...data) {
            this.$emit('toggleModal', { modal, ...data })
        },

        toggleMouseMenu(object) {
            this.$emit('toggleMouseMenu', object)
        },

        closeMenu() {
            this.toggleMouseMenu({ visible: false })
            this.$emit('leftMenuEvent', { visible: false })
        }
    }
})
window.myUser = window.appData.users[0]

/**
 * Registering all vue components within the instance
 */

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Principal instance VUE
 */

import Vue from 'vue';

/**
 * Router
 */

const routes = require('./router').default
const router = new VueRouter({ routes, mode: 'history' })
const authRouters = ['App']

router.beforeEach((to, from, next) => {
    if(window.App.auth === 'false' && from.name != 'Login' && authRouters.indexOf(to.name) >= 0) next({ name: 'Login' })
    else next()
})

/**
 * Application instance
 */

const app = new Vue({
    el: '#app',
    router
});

/**
 * Global variables
 */

const buttons = document.querySelectorAll('.rounded-icon')

/**
 * Functions
 */

 document.addEventListener('contextmenu', event => eventPreventDefault(event))

function eventPreventDefault(e) {
    e.stopPropagation()
    e.preventDefault()
}

function removeActiveButton() {
    buttons.forEach(element => {
        if(element.classList.contains('active')) {
            element.classList.remove('active')
        }
    })
}

window.removeByAttr = function(arr, attr, value) {
    var i = arr.length;
    while(i--) {
       if(arr[i] &&
          arr[i].hasOwnProperty(attr) &&
          (arguments.length > 2 && arr[i][attr] === value)) { 
           arr.splice(i,1);
       }
    }
    return arr;
}

/**
 * Others
 */

$('body').tooltip({
    selector: '[data-toggle="tooltip"]',
    html: true,
    boundary: 'window'
});

document.addEventListener('click', _ => {
    window.eventBus.closeMenu(),
    $('.tooltip').remove()
})

buttons.forEach(element => {
    element.addEventListener('click', function() {
        if(!element.classList.contains('active')) {
            removeActiveButton()
            element.classList.add('active')
        }
    })
})