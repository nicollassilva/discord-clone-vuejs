export default {
    'path': window.location.pathname + 'sounds/',

    getSound(type, sound) {
        try {
            var audioElement = new Audio(`${this.path + type}/${sound}.mp3`)
            audioElement.addEventListener('loadeddata', () => {
                audioElement.volume = 0.5
                audioElement.play()
            })
        } catch (e) {
            console.log('Áudio não encontrado')
        }
        
    }
}