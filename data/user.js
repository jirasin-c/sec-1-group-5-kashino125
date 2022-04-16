import {reactive} from 'vue'
export const user = reactive({
    statusUser: false,
    name: null,
    userName: null,
    userId: null,
    userPoint: null,
    setLoginStatus(){
        this.statusUser = true
    },
    setLoginUserId(id){
        this.userId = id
    },
    setLoginName(name){
        this.name = name
    },
    setLoginUserName(usrName){
        this.userName = usrName
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
    setLogoutName(){
        this.name = null
    },
    setLogoutUserName(){
        this.userName = null
    },
    setLogoutUserPoint(){
        this.userPoint = null
    }
})