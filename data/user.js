import { reactive } from 'vue'
export const user = reactive({
  statusUser: false,
  userName: null,
  userId: null,
  setLoginStatus() {
    this.statusUser = true
  },
  setLoginUserName(name) {
    this.userName = name
  },
  setLogoutStatus() {
    this.statusUser = false
  },
  setLogoutUserName() {
    this.userName = null
  },
  setLoginUserId(id) {
    this.userId = id
  },
  setLogoutUserId() {
    this.userId = null
  }
})