<template>
    <img src="../assets/resto-logo.jpg" class="logo" />
    <h1>Login</h1>
    <div class="login">
        <input v-model="email" type="email" placeholder="Enter Email" />
        <input v-model="password" type="password" placeholder="Enter Password" />
        <button v-on:click="login" >Login</button>
    </div>
    <p>New User? <router-link to="/signup">Signup Here</router-link></p>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            .then(response => {
                if(response.status == 200 && response.data.length>0) {
                    localStorage.setItem("user", JSON.stringify(response.data))
                    this.$router.push({name: 'home'})
                }
            }).catch(error => {
                alert("Login Failed! See Console log for more details..")
                console.log("Error:", error)
            })
        }
    },
    mounted() {
        const user = localStorage.getItem("user")
        if(user) {
            this.$router.push({name: "home"})
        }
    }
}
</script>