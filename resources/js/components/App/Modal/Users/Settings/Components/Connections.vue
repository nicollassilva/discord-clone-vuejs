<template>
    <div class="modalBody">
        <span class="title mb-0">Conexões</span>
        <div class="note border-0">
            <span class="title">Conecte suas contas</span>
            <p class="my-2">Conecte estas contas e desbloqueie integrações especiais do Discord.</p>
            <div class="connectionAccounts">
                <div class="connection"
                    v-for="(connection, i) in connections"
                    :key="i"
                    data-toggle="tooltip"
                    :title="connection.name"
                    :style="{ 'background-image': `url('/images/connections/${connection.image}.png')` }"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            connections: [
                { name: 'Twitch', image: 'twitch' },
                { name: 'Youtube', image: 'youtube' },
                { name: 'Battle.net', image: 'battlenet' },
                { name: 'Steam', image: 'steam' },
                { name: 'Reddit', image: 'reddit' },
                { name: 'Facebook', image: 'facebook' },
                { name: 'Twitter', image: 'twitter' },
                { name: 'Spotify', image: 'spotify' },
                { name: 'Xbox Live', image: 'xboxlive' },
                { name: 'Github', image: 'github' }
            ]
        }
    }
}
</script>