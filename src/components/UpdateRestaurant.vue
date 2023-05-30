<template>
    <div>
        <Header :user="user" />
        <h2>Update Restaurant Details</h2>
        <form class="update">
            <hr/><br/>
            <label>Name</label>
            <input type="text" placeholder="Enter Name" v-model="restaurant.name" />
            <label>Contact</label>
            <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" />
            <label>Address</label>
            <input type="text" placeholder="Enter Address" v-model="restaurant.address" />
            <label>Pincode</label>
            <input type="text" placeholder="Enter Pincode" v-model="restaurant.pincode" />
            <button type="submit" v-on:click="updateRestaurant">Update Restaurant</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
    name: 'UpdateRestaurant',
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
            },
            restId: ''
        }
    },
    methods: {
        getRestaurant() {
            axios.get(`http://localhost:3000/restaurants/${this.restId}`)
            .then(response => {
                if(response.status == 200) {
                    if(response) {
                        this.restaurant = response.data
                    }
                }
            }).catch(error => {
                alert("Data Fetch Failed! See Console log for more details..")
                console.log("Error:", error)
            })
        },
        updateRestaurant(event) {
            event.preventDefault();
            axios.put(`http://localhost:3000/restaurants/${this.restId}`, this.restaurant)
            .then(response => {
                if(response.status == 200) {
                    alert("Restaurant Updated Successfully!!")
                    this.$router.push({ name: 'home' })
                }
            }).catch(error => {
                alert("Restaurant Updation Failed! See Console log for more details..")
                console.log("Error:", error)
            })
        }
    },
    mounted() {
        let user = localStorage.getItem("user")
        if(!user) {
            console.log("Valid")
            this.$router.push({name: "login"})
        } else {
            console.log("Invalid")
            user = JSON.parse(user)
            this.user = user[0]
            this.restId = this.$route.params.id
            this.getRestaurant()
        }
    }
}
</script>