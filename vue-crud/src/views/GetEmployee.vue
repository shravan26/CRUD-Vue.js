<template>
    <div>
        <h1>Get Employee page</h1>
        <Table :employees="employees" />
    </div>
</template>

<script>
import Table from "../components/Table";
import axios from "axios";
export default {
    components: {
        Table,
    },
    data() {
        return {
            employees: [],
        };
    },
    async created() {
          try {
            const res = await axios.get('http://localhost:3000/employees');
            this.employees = res.data;
          } catch (error) {
            console.log(error);
          }
    }
};
</script>

<style lang="scss" scoped></style>
