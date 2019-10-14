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
                <tr v-for="report in reports" :key="report.id" @click="editTime(report)">
                    <td>{{getDate(report.timeIn)}}</td>
                    <td>{{getTime(report.timeIn)}}</td>
                    <td>{{getTime(report.timeOut)}}</td>
                    <td>{{report.total}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="edit_wrapper">
            <div class="edit_form">
                <label for="timeIn">Time In</label>
                <input type="text" id="timeIn">
            </div>
            <div class="edit_form">
                <label for="timeOut">Time Out</label>
                <input type="text" id="timeOut">
            </div>
            <br>
            <button class="edit_btn">SAVE</button>
            <button class="edit_btn">DELETE</button>
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
                    {id:0,timeIn:1571024493313,timeOut:1571076264,total:565},
                ],
                log:{
                    id:'',
                    timeIn:'',
                    timeOut:'',
                    total:''
                }
            }
        },
        methods:{
            getDate(dateInLong){
                let date = new Date(dateInLong);
                return date.toLocaleDateString();
            },
            getTime(timeInLong){
                let time = new Date(timeInLong);
                return time.toLocaleTimeString();
                //return time.getHours()+':'+time.getMinutes().toString()+':'+time.getSeconds().toString();
            },
            editTime(report){
                this.log =report;
                document.getElementById("timeIn").value = new Date(this.log.timeIn).toLocaleTimeString();
                document.getElementById("timeOut").value = new Date(this.log.timeOut).toLocaleTimeString();
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        width: 60%;
        height: fit-content;
        min-height: 400px;
        margin:30px auto;
        box-shadow: 1px 1px 2px grey;
    }
    .wrapper td:hover{
        cursor: default;
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
    .report_wrapper table{
        width: 100%;
        height: fit-content;
        max-height: 200px;
        text-align: center;
        border: solid 1px black;
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
    .edit_wrapper{
        position: absolute;
        margin: 10px auto auto 15%;
        text-align: center;
        border: solid 1px black;
        width: 30%;
        padding: 10px;
    }
    .edit_form{
        margin: 5px;
        display: inline-block;
    }
    .edit_form label{
        margin: 5px;
    }
    .edit_btn{
        margin: 3px;
        background: lightblue;
        border: none;
        border-radius: 2px;
        width: 100px;
        height: 30px;
    }
</style>