<template>
    <img src="../assets/resto-logo.jpg" class="logo" />
    <h1>Sign Up</h1>
    <div class="register">
        <input v-model="user.name" type="text" placeholder="Enter Name" />
        <input v-model="user.email" type="email" placeholder="Enter Email" />
        <input v-model="user.password" type="password" placeholder="Enter Password" />
        <button v-on:click="signup" >Sign Up</button>
    </div>
    <p>Already a User? <router-link to="/login">Login Here</router-link></p>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
    name: 'Signup',
    data() {
        return {
            user: {
                name: this.name,
                email: this.email,
                password: this.password,
            }
        }
    },
    methods: {
        signup() {
            axios.post('http://localhost:3000/users/', this.user)
            .then(response => {
                if(response.status == 201) {
                    alert("Signup Successfull!")
                    this.$router.push({name: 'login'})
                }
            }).catch(error => {
                alert("Signup Failed! See Console log for more details..")
                console.log("Error:", error)
            })
        }
    },
    mounted() {
        const user = localStorage.getItem("user")
        if (user) {
            this.$router.push({name: "home"})
        }
    }
}
</script>