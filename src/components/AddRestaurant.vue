<template>
    <div>
        <Header :user="user" />
        <h2>Add Restaurant Detais</h2>
        <form class="add">
            <hr/><br/>
            <input type="text" placeholder="Enter Name" v-model="restaurant.name" />
            <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" />
            <input type="text" placeholder="Enter Address" v-model="restaurant.address" />
            <input type="text" placeholder="Enter Pincode" v-model="restaurant.pincode" />
            <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name: 'AddRestaurant',
    components: {
        Header,
    },
    data() {
        return {
            user: '',
            restaurant: {
                name: '',
                contact: '',
                address: '',
                pincode: ''
            }
        }
    },
    methods: {
        addRestaurant() {
            axios.post('http://localhost:3000/restaurants', this.restaurant)
            .then(response => {
                if(response.status == 201) {
                    alert("Restaurant Added Successfully!!")
                    this.$router.push({name: "home"})
                }
            }).catch(error => {
                alert("Restaurant Addition Failed! See Console log for more details..")
                console.log("Error:", error)
            })
        }
    },
    mounted() {
        let user = localStorage.getItem("user")
        if(!user) {
            this.$router.push({name: "login"})
        } else {
            user = JSON.parse(user)
            this.user = user[0]
        }
    }
}
</script>