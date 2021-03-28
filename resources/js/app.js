/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import SvgHandle from './components/Helper/SvgHandle'
import AudioHandle from './components/Helper/AudioHandle'
import ApplicationData from './components/Helper/ApplicationData'

/**
 * Globals variables
 */

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
        }
    }
})
window.myUser = {
    id: 1,
    name: 'Nícollas',
    nickId: '#8412',
    image: 'https://cdn.discordapp.com/avatars/275725966536474625/e552ba8d2b889db7f9f0e50b7527041a.png',
    status: 'absent'
}

/**
 * Registering all vue components within the instance
 */

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Principal instance VUE
 */

import DiscordClone from './components/App/DiscordClone.vue'

const app = new Vue({
    components: {
        DiscordClone
    },
    el: '#app'
});

/**
 * Global variables
 */

const buttons = document.querySelectorAll('.rounded-icon')

/**
 * Functions
 */

function eventPreventDefault(e) {
    e.stopPropagation()
    e.preventDefault()
}

function menuMouseHandle(element, positionX, positionY) {
    if(element.hasAttribute('data-menu') && element.dataset.menu != '') {
        closeMenu()
        window.eventBus.$emit('toggleMouseMenu', { type: element.dataset.menu, positionX, positionY, visible: true })
    }
}

function removeActiveButton() {
    buttons.forEach(element => {
        if(element.classList.contains('active')) {
            element.classList.remove('active')
        }
    })
}

function closeMenu() {
    window.eventBus.$emit('toggleMouseMenu', { visible: false })
    window.eventBus.$emit('leftMenuEvent', { visible: false })
}

function buttonRightMenuToggle() {
    document.querySelectorAll('[data-menu]').forEach(element => {
        element.addEventListener('contextmenu', function(e) {
            const x = e.clientX,
                  y = e.clientY
            
            menuMouseHandle(element, x, y)
        })
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

buttonRightMenuToggle()

document.addEventListener('contextmenu', event => { eventPreventDefault(event) })

document.addEventListener('click', _ => {
    closeMenu(),
    $('.tooltip').remove()
})

buttons.forEach(element => {
    element.addEventListener('click', function() {
        if(!element.classList.contains('active')) {
            removeActiveButton()
            element.classList.add('active')
        }
        buttonRightMenuToggle()
    })
})