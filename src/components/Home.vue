<template>
    <div>
        <Header :user="user" />
        <h2>Restaurants Details</h2>
        <table class="restautants">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Actions</th>
            </tr>
            <tr v-for="item in restaurants" v-bind:key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}} - {{item.pincode}}</td>
                <td>
                    <router-link :to="'/update/'+item.id"><button>Update</button></router-link>
                    <button v-on:click="deleteRestaurant(item.id)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import Header from './Header.vue'

export default {
    name: 'Home',
    components: {
        Header,
    },
    data() {
        return {
            user: {},
            restaurants: [],
        }
    },
    methods: {
        getRestaurants() {
            axios.get("http://localhost:3000/restaurants/")
            .then(response => {
                if(response.status == 200) {
                    if(response) {
                        this.restaurants = response.data
                    }
                }
            }).catch(error => {
                alert("Data Fetch Failed! See Console log for more details..")
                console.log("Error:", error)
            })
        },
        loadComponent() {
            let user = localStorage.getItem("user")
            if(!user) {
                this.$router.push({name: "login"})
            } else {
                user = JSON.parse(user)
                this.user = user[0]
                this.getRestaurants()
            }
        },
        deleteRestaurant(id) {
            axios.delete(`http://localhost:3000/restaurants/${id}`)
            .then(response => {
                if(response.status == 200) {
                    alert("Restaurant Deleted Successfully!!")
                    this.loadComponent()
                }
            }).catch(error => {
                alert("Restaurant Deletion Failed! See Console log for more details..")
                console.log("Error:", error)
            })
        }
    },
    mounted() {
        this.loadComponent()
    }
}
</script>

<style>
.restautants {
    border-collapse: collapse;
    margin: auto;
}
.restautants th, .restautants td {
    border: 1px solid black;
    padding: 6px 12px;
}
.restautants th {
    font-size: 16px;
}
.restautants td {
    font-size: 14px;
}
</style>