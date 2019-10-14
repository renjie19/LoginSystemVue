<template>
    <table>
        <thead>
        <tr>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(employee,index) in employeeList" :key="employee.id" @click="getEmployee(employee,index)">
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
            getEmployee(employee,index){
                this.$emit('employeeSelected',index,employee);
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
    }
    th{
        background-color: cadetblue;
    }
    td{
        background-color: lightblue;
    }
</style>