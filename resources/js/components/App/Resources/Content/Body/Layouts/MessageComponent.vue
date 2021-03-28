<template>
    <div class="incoming-message">
        <div class="input-area">
            <div class="button first" v-html="svg.attachFiles"></div>
            <input :placeholder="`Conversar com @${Data.name}`" class="input" @keyup.enter="newMessage($event)"></input>
            <div class="buttons">
                <div class="button" data-toggle="tooltip" title="Reforce os parças! Dê vantagens superbacanas de bate-papo com o Nitro. " v-html="svg.present"></div>
                <div class="button" v-html="svg.gifs"></div>
                <div class="button" v-html="svg.figures"></div>
                <div class="button">
                    <div class="emojis" @mouseenter="updateEmoji()" :style="positionEmoji"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: { Data: Object },
    data() {
        return {
            svg: window.svgHandle,
            positionEmoji: ''
        }
    },
    methods: {
        updateEmoji() {
            let positions = [
                { x: '-154px', y: '-66px' },
                { x: '-22px', y: '-22px' },
                { x: '-66px', y: '-66px' },
                { x: '-176px', y: '-0px' },
                { x: '-110px', y: '-66px' },
                { x: '-44px', y: '-88px' },
                { x: '-44px', y: '-66px' },
                { x: '-132px', y: '-22px' },
                { x: '-88px', y: '-44px' }
            ]

            var randomObject = positions[Math.floor(Math.random() * positions.length)];

            this.positionEmoji = `
                background-position: ${randomObject.x} ${randomObject.y};
            `
        },

        newMessage(event) {
            console.log(event)
        }
    }
}
</script>