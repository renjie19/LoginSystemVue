<template>
    <table>
        <thead>
        <tr>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="employee in employeeList" :key="employee.employeeId" @click="getEmployee(employee)">
            <td>{{employee.name}}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props:['employeeList'],
        methods:{
            getEmployee(employee){
                this.$emit('employeeSelected',employee);
            }
        }
    }
</script>

<style scoped>
    table{
        text-align: center;
        width: 100%;
        height: fit-content;
        cursor: default;
        overflow-y: auto;
    }
    th{
        background-color: cadetblue;
    }
    td{
        background-color: lightblue;
    }
</style>