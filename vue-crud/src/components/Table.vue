<template>
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Address</th>
            </tr>
            <tr v-for="(employee) in employees" :key="employee.id">
                <td>{{employee.name}}</td>
                <td>{{employee.username}}</td>
                <td>{{employee.email}}</td>
                <td>{{fullAddress(employee)}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props : ['employees'],
    methods : {
        fullAddress(employee) {
            return employee.address.street + ', ' + employee.address.city;
        }
    },
    
};
</script>

<style lang="scss" scoped>
table {
    width : 100%;
}
table>tr>th,td {
    padding: 10px;
    border: 1px solid;
    border-collapse : collapse;
}
</style>
