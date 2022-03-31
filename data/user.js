import {reactive} from 'vue'
export const user = reactive({
    statusUser: false,
    userName: null,
    setStatus(){
        this.statusUser = true
    },
    setUserName(name){
        this.userName=name
    },
})