<template>
  <div>
    <h1>Update Employee page</h1>
    <Form :emp="emp" @update="updateEmp" />
    <Table :employees="employees" @update-profile="updateUser" />
  </div>
</template>

<script>
import Form from "../components/Form";
import Table from "../components/Table";
import axios from "axios";
export default {
  components: {
    Table,
    Form
  },
  data() {
    return {
      employees: [],
      emp: {}
    };
  },
  methods: {
    updateUser(userDetails) {
      this.employees.map(employee => {
        if (userDetails.id === employee.id) {
          this.emp = userDetails;
        }
      });
    },
    async updateEmp(userDetails) {
      try {
        this.emp = userDetails;
        await axios.put("http://localhost:3000/employees", this.emp);
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:3000/employees");
      this.employees = res.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped></style>
