export default {
    'users': [
        {
            id: 1,
            name: 'Nícollas',
            hashtagNumber: '#1564',
            image: 'https://cdn.discordapp.com/avatars/275725966536474625/e552ba8d2b889db7f9f0e50b7527041a.png',
            status: 'busy',
            pending: false
        },
        {
            id: 2,
            name: 'Bill Gates',
            hashtagNumber: '#4634',
            image: 'https://cdn-istoedinheiro-ssl.akamaized.net/wp-content/uploads/sites/17/2021/02/bill-gates-e1613016156235.jpg',
            status: 'offline',
            pending: true
        },
        {
            id: 3,
            name: 'Mark Zuckerberg',
            hashtagNumber: '#3235',
            image: 'https://img.olhardigital.com.br/wp-content/uploads/2019/11/20191106064628.jpg',
            status: 'busy',
            activity: 'Navegando no Facebook',
            pending: false
        },
        {
            id: 4,
            name: 'Linus Torvalds',
            hashtagNumber: '#2355',
            image: 'https://diolinux.com.br/wp-content/uploads/2019/04/Linus-Torvalds-sobre-o-Linux-Desktop.jpg',
            status: 'absent',
            pending: false
        },
        {
            id: 5,
            name: 'James Gosling',
            hashtagNumber: '#6856',
            image: 'https://computerworld.com.br/wp-content/uploads/2020/08/James-Gosling-criador-do-Java-sobre-carreira-Low-Code-e-futuro-da-linguagem.jpg',
            status: 'offline',
            pending: true
        },
        {
            id: 6,
            name: 'Guido van Rossum',
            hashtagNumber: '#5234',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Guido_van_Rossum_OSCON_2006.jpg',
            status: 'busy',
            activity: 'Jogando Visual Studio Code',
            pending: false
        },
        {
            id: 7,
            name: 'Rasmus Lerdorf',
            hashtagNumber: '#1412',
            image: 'https://pbs.twimg.com/profile_images/918348833205116928/V9ROYRNJ.jpg',
            status: 'offline',
            pending: true
        },
        {
            id: 8,
            name: 'Jason Citron',
            hashtagNumber: '#1568',
            image: 'https://pbs.twimg.com/profile_images/1075933769243086849/Af-NGQzK_400x400.jpg',
            status: 'offline',
            pending: false
        },
        {
            id: 9,
            name: 'Steve Jobs',
            hashtagNumber: '#6195',
            image: 'https://cdn.jornaldebrasilia.com.br/wp-content/uploads/2019/11/Steve-Jobs-1000x600.jpg',
            status: 'offline',
            pending: true
        },
        {
            id: 10,
            name: 'Brendan Eich',
            hashtagNumber: '#7512',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/1200px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg',
            status: 'offline',
            pending: false
        },
        {
            id: 11,
            name: 'Taylor Otwell',
            hashtagNumber: '#1436',
            image: 'https://miro.medium.com/max/3150/1*e3DUu5swaVubfa_fGUHn_g.jpeg',
            status: 'absent',
            pending: true
        },
        {
            id: 12,
            name: 'Tim Sweeney',
            hashtagNumber: '#7547',
            image: 'https://img.olhardigital.com.br/wp-content/uploads/2019/01/20190104195632.jpg',
            status: 'busy',
            pending: false
        },
        {
            id: 13,
            name: 'Markus Persson',
            hashtagNumber: '#5423',
            image: 'https://www.impacta.com.br/blog/wp-content/uploads/2020/10/markus-persson.gif',
            status: 'online',
            pending: false
        },
        {
            id: 14,
            name: 'Taylor Otwell',
            hashtagNumber: '#1412',
            image: 'https://miro.medium.com/max/3150/1*e3DUu5swaVubfa_fGUHn_g.jpeg',
            status: 'offline',
            pending: false
        }
    ],
    'groups': [
        {
            id: 1,
            name: 'Discord Oficial',
            icon: 'https://cdn.icon-icons.com/icons2/1476/PNG/512/discord_101785.png'
        },
        {
            id: 2,
            name: 'Minecraft Group',
            icon: 'https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/minecraft-icon.png'
        },
        {
            id: 3,
            name: 'Facebook Oficial Group 2020',
            icon: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png'
        },
        {
            id: 4,
            name: 'Twitter Oficial',
            icon: 'https://pbs.twimg.com/profile_images/1354479643882004483/Btnfm47p_400x400.jpg'
        },
        {
            id: 5,
            name: 'Instagram Oficial',
            icon: 'https://neilpatel.com/wp-content/uploads/2017/08/instagram-1.jpg'
        },
        {
            id: 6,
            name: 'Snapchat Oficial',
            icon: 'https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo'
        },
        {
            id: 7,
            name: 'WhatsApp Oficial',
            icon: 'https://imagens.canaltech.com.br/empresas/630.400.jpg'
        },
        {
            id: 8,
            name: 'Telegram Oficial',
            icon: 'https://manualdousuario.net/wp-content/uploads/2018/11/Telegram-logo.png'
        },
        {
            id: 9,
            name: 'TikTok Oficial',
            icon: 'https://s16.tiktokcdn.com/musical/resource/mtact/static/images/share_img.png'
        }
    ],
    realStatusTitle(status) {
        let title = '';
            switch(status) {
                case 'online':
                    title = 'Disponível'
                    break;
                case 'offline':
                    title = 'Offline'
                    break;
                case 'absent':
                    title = 'Ausente'
                    break;
                case 'busy':
                    title = 'Não perturbar'
                    break;
                default:
                    title ='Offline'
                    break;
            }
            
        return title
    }
}