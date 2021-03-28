<template>
    <div>
        <div class="topbar">
            <div class="column-info">
                <slot name="icon-svg"></slot>
                <span class="name">
                    {{ Data.name }}
                    <div v-if="Type === 'conversation'" :class="['status', Data.status]"></div>
                </span>
                <div class="menu" v-if="Type === 'myFriends'">
                    <li class="active">Disponível</li>
                    <li>Todos</li>
                    <li>Pendente</li>
                    <li>Bloqueado</li>
                    <div class="add-friend">Adicionar amigo</div>
                </div>
            </div>
            <div class="column-buttons" v-if="(Type == 'conversation' || Type == 'group')">
                <div class="button" data-toggle="tooltip" title="Iniciar chamada de voz" v-show="Type === 'conversation'" v-html="svg.startCall"></div>
                <div class="button" data-toggle="tooltip" title="Iniciar chamada de vídeo" v-show="Type === 'conversation'" v-html="svg.startCallVideo"></div>
                <div class="button" data-toggle="tooltip" title="Silenciar um canal evita que indicações de não lido e nofitificações apareçam, exceto se você for mencionado(a)" v-if="Type === 'group'"  @click="silenceChannel = !silenceChannel" v-html="toggleSilenceChannel()"></div>
                <div class="button" data-toggle="tooltip" title="Mensagens fixadas" v-html="svg.fixedMessages"></div>
                <div class="button" data-toggle="tooltip" title="Adicionar amigos à MD" v-show="Type === 'conversation'" v-html="svg.addFriendsToDM"></div>
                <div class="button" data-toggle="tooltip" title="Lista de membros" v-show="Type === 'group'" v-html="svg.membersChannel"></div>
                <div class="search" @click="toggleWidthInput()" :style="{ 'width': `${widthInput}px` }">
                    <input class="search" placeholder="Buscar">
                    <i v-html="svg.search"></i>
                </div>
                <div class="button" data-toggle="tooltip" title="Caixa de Entrada" v-html="svg.inbox"></div>
                <div class="button" data-toggle="tooltip" title="Ajuda" v-html="svg.help"></div>
            </div>
            <div class="column-buttons justify-content-end pr-2" v-if="Type == 'myFriends'">
                <div class="button" data-toggle="tooltip" title="Novo grupo privado" v-html="svg.privateGroup"></div>
                <div class="button" data-toggle="tooltip" title="Caixa de Entrada" v-html="svg.inbox"></div>
                <div class="button" data-toggle="tooltip" title="Ajuda" v-html="svg.help"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        Data: {
            type: Object,
            default: () => { name: 'Gasparzinho' }
        },
        Type: String
    },
    data() {
        return {
            svg: window.svgHandle,
            silenceChannel: false,
            widthInput: 144
        }
    },
    mounted() {
        document.addEventListener('click', event => {
            if(!event.target || event.target.className != 'search') {
                this.widthInput === 244 && this.toggleWidthInput()
            }
        })
    },
    methods: {
        toggleWidthInput() {
            return this.widthInput = this.widthInput === 144 ? 244 : 144
        },

        toggleSilenceChannel() {
            return this.silenceChannel ? this.svg.silenceChannel.enabled : this.svg.silenceChannel.disabled
        },
    }
}
</script>