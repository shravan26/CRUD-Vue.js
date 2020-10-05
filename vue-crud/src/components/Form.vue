<template>
  <div>
    <form @submit="setEmployee">
      <div class="name">
        <input type="text" name="name" placeholder=" Name " v-model="name" />
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
  props: ["emp"],
  data() {
    return {
      name: "",
      username: "",
      email: "",
      addressStreet: "",
      addressCity: "",
      employees: []
    };
  },
  watch: {
    emp: function() {
      this.name = this.emp.name,
      this.username = this.emp.username,
      this.email = this.emp.email,
      this.addressStreet = this.emp.addressStreet,
      this.addressCity = this.emp.addressCity
    }
  },
  methods: {
    setEmployee() {
      const empDetails = {
        name: this.name,
        username: this.username,
        email: this.email,
        address: {
          street: this.addressStreet,
          city: this.addressCity
        }
      };
      this.$emit("submit-profile", empDetails);
      this.$emit('update',empDetails);
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
