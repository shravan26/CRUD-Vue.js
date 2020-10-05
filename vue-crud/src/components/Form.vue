<template>
    <div>
        <form @submit="setEmployee">
            <div class="name">
                <input
                    type="text"
                    name="name"
                    placeholder=" Name "
                    v-model="name"
                />
            </div>
            <div class="username">
                <input
                    type="text"
                    name="username"
                    placeholder=" UserName "
                    v-model="username"
                />
            </div>
            <div class="email">
                <input
                    type="email"
                    name="email"
                    placeholder=" Email "
                    v-model="email"
                />
            </div>
            <div class="address-street">
                <input
                    type="text"
                    name="address-street"
                    placeholder="Address : Street "
                    v-model="addressStreet"
                />
            </div>
            <div class="address-city">
                <input
                    type="text"
                    name="address-city"
                    placeholder="Address : City "
                    v-model="addressCity"
                />
            </div>
            <button type="submit">Add Employee</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            username: "",
            email: "",
            addressStreet: "",
            addressCity: "",
            employees : [],
        };
    },
    methods : {
        setEmployee(){
            const empDetails = {
                name : this.name,
                username : this.username,
                email : this.email,
                address : {
                    street : this.addressStreet,
                    city : this.addressCity
                }
            };
            this.$emit("submitProfile",empDetails);      
        }
        
    }
};
</script>

<style lang="scss" scoped>
input {
    width: 400px;
    padding: 10px;
    margin: 20px;
    font-size: 18px;
}
button {
    width: 420px;
    height: 50px;
}
</style>
