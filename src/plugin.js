export default {
    install: (Vue, { auth }) => {
        Vue.prototype.$auth = new Vue({
            data() {
                return {
                    user: null
                }
            },
            methods: {
                init() {
                    this.user = auth.getConnectedUser()
                },
                login(username, password) {
                    this.user = auth.login(username, password)
                },
                logout() {
                    auth.logout()
                    this.user = null
                }
            }
        })
    }
}