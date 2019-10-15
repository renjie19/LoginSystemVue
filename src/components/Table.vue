<template>
    <table>
        <thead>
        <tr>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="employee in employeeList" :key="employee.id" @click="getEmployee(employee.id)">
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
            getEmployee(id){
                let value = this.employeeList.find((e) => {
                    return e.id===id;
                });
                if(!value){
                    alert("Not Found");
                }
                this.$emit('employeeSelected',value);
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