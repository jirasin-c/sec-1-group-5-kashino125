import { reactive } from 'vue'
export const pok = reactive({
    botCard: [{ Numbers: null, Type: null }, { Numbers: null, Type: null }, { Numbers: null, Type: null }],
    playerCard: [{ Numbers: null, Type: null }, { Numbers: null, Type: null }, { Numbers: null, Type: null }],
    statusStart: false,
    card: null,
    botDraw: false,
    playerdraw:false,
    allshow : false,
    setAllShow(status){
        this.allshow = status
    },
    setCard(cards){
        this.card = cards
    },
    setStatus(status){
        this.statusStart = status
    },
    setBot(card){
        this.botCard = card
    },
    setBotDraw(status){
        this.botDraw = status
    },
    setPlayer(card){
        this.playerCard = card
    },
    setPlayerDraw(status){
        this.playerdraw = status
    },
    reStart(){
        this.botCard = [{ Numbers: null, Type: null }, { Numbers: null, Type: null }, { Numbers: null, Type: null }]
        this.playerCard = [{ Numbers: null, Type: null }, { Numbers: null, Type: null }, { Numbers: null, Type: null }] 
        this.statusStart = false
        this.card = null
        this.playerdraw = false
        this.botDraw = false
        this.allshow = false
    }
})