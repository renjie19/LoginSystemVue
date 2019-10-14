<template>
    <div class="wrapper">
        <div class="table_wrapper">
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="employee in employees" :key="employee.id">
                    <td>{{employee.name}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="report_wrapper">
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Time In</th>
                    <th>Time Out</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="report in reports" :key="report.id">
                    <td>{{getDate(report.timeIn)}}</td>
                    <td>{{getTime(report.timeIn)}}</td>
                    <td>{{getTime(report.timeOut)}}</td>
                    <td>{{report.total}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                employees:[
                    {id:0,name:'Rodrigo Duterte',age:55,address:'Manila',position:'President',license:{license_id:0,license_number:987}},
                    {id:1,name:'Rodrigo Duterte',age:55,address:'Manila',position:'President',license:{license_id:0,license_number:987}},
                    {id:2,name:'Rodrigo Duterte',age:55,address:'Manila',position:'President',license:{license_id:0,license_number:987}}
                ],
                reports:[
                    {id:0,timeIn:new Date().getTime(),timeOut:1571076264,total:565},
                    {id:0,timeIn:1571216664000,timeOut:1571249064000,total:435}
                ]
            }
        },
        methods:{
            getDate(dateInLong){
                let date = new Date(dateInLong);
                return date.toLocaleDateString();
            },
            getTime(timeInLong){
                let time = new Date(timeInLong);
                return time.getHours()+':'+time.getMinutes().toString()+':'+time.getSeconds().toString();
                // return time.toLocaleTimeString();
            },
        }
    }
</script>

<style scoped>
    .wrapper{
        width: 80%;
        height: fit-content;
        min-height: 400px;
        margin:30px auto;
        box-shadow: 1px 1px 2px grey;
    }
    .table_wrapper{
        width: 30%;
        height: fit-content;
        min-height: 400px;
        box-shadow: 2px 0 0 grey;
        display: inline-block;
    }
    .report_wrapper{
        width:70%;
        height: fit-content;
        min-height: 400px;
        display: inline-block;
    }
    .table_wrapper table{
        width: 100%;
        height: fit-content;
        text-align: center;
    }
    .table_wrapper th{
        background-color: cadetblue;
    }
    .table_wrapper td{
        background-color: lightblue;
    }
</style>