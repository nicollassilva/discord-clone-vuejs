<template>
    <div class="body-conversation">
        <div class="conversation">
            <WidgetUserMessage :Data="Data"></WidgetUserMessage>
        </div>
        <MessageComponent :Data="Data"></MessageComponent>
    </div>
</template>
<script>
import WidgetUserMessage from './Layouts/WidgetUserMessage.vue'
import MessageComponent from './Layouts/MessageComponent.vue'

export default {
    props: { Data: Object },
    components: { WidgetUserMessage, MessageComponent }    
}
</script>