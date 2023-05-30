<template>
    <div class="header">
        <div class="nav">
            <router-link class="span link" to="/">Home</router-link>
            <router-link class="span link" to="/add">Add Restaurant</router-link>
        </div>
        <div class="account">
            <p class="span">Hello {{user.name}}</p>
            <p class="span link" v-on:click="logout">Logout</p>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Header',
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
        }
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$router.push({name: "login"})
        }
    }
}
</script>

<style>
.header {
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    background-color: #111;
    clear: both;
}
.nav {
    float: left;
}
.account {
    float: right;
}
.nav, .account {
    padding: 10px 0px;
}
.nav .span, .account .span {
    display: inline;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    margin: 0;
    text-decoration: none;
}
.header .link:hover {
    color: #333;
    background-color: #eee;
}
</style>