import {reactive} from 'vue'
export const user = reactive({
    statusUser: false,
    userName: null,
    userId: null,
    userPoint: null,
    setLoginStatus(){
        this.statusUser = true
    },
    setLoginUserId(id){
        this.userId = id
    },
    setLoginUserName(name){
        this.userName = name
    },
    setLoginUserPoint(point){
        this.userPoint = point
    },
    setLogoutStatus(){
        this.statusUser = false
    },
    setLogoutUserId(){
        this.userId = null
    },
    setLogoutUserName(){
        this.userName = null
    },
    setLogoutUserPoint(){
        this.userPoint = null
    }
})