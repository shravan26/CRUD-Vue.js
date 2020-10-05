<template>
    <div>
        <h1>Create Employee page</h1>
        <Form @submit-profile="addEmployee" />
        <Table :employees="employees" />
    </div>
</template>

<script>
import axios from "axios";
import Table from "../components/Table";
import Form from "../components/Form";

export default {
    components: {
        Table,
        Form,
    },
    data() {
        return {
            employees: [],
        };
    },
    async created() {
        try {
            const res = await axios.get("http://localhost:3000/employees");
            this.employees = res.data;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async addEmployee(empDetails) {
            try {
                await axios.post("http://localhost:3000/employees", empDetails);
                this.employees = [...this.employees, empDetails];
            }catch (err) {
                console.log(err);
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
