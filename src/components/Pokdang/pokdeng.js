import { reactive } from 'vue'
export const pok = reactive({
    botcCard: [{ Numbers: null, Type: null }, { Numbers: null, Type: null }, { Numbers: null, Type: null }],
    playerCard: [{ Numbers: null, Type: null }, { Numbers: null, Type: null }, { Numbers: null, Type: null }],
    statusStart: false,
    card: null,
    botstatus: false,
    draw:false,
    setCard(cards){
        this.card = cards
    },
    setStatus(status){
        this.statusStart = status
    },
    setBot(card){
        this.botcCard = card
    },
    setPlayer(card){
        this.playerCard = card
    },
    setDraw(status){
        this.draw = status
    },
    reStart(){
        this.botcCard = [{ Numbers: null, Type: null }, { Numbers: null, Type: null }, { Numbers: null, Type: null }]
        this.playerCard = [{ Numbers: null, Type: null }, { Numbers: null, Type: null }, { Numbers: null, Type: null }] 
        this.statusStart = false
        this.card = null
        this.botstatus = false
        this.draw = false
    }
})