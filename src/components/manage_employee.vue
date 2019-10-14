<template>
    <div class="wrapper">
        <div class="table_wrapper">
            <table class="employee_list">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Employee</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="employee in employees" :key="employee.name" @click="select_item(employee)">
                    <td>{{employee.id}}</td>
                    <td>{{employee.name}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="details">
            <h2>INFORMATION</h2>
            <div class="form-group">
                <label for="name">NAME</label>
                <br>
                <input type="text" id="name" class="form-control" v-model="emp.name">
            </div>
            <div class="form-group">
                <label>AGE</label>
                <br>
                <input type="text" id="age" class="form-control">
            </div>
            <div class="form-group">
                <label >ADDRESS</label>
                <br>
                <input type="text" id="address" class="form-control">
            </div>
            <div class="form-group">
                <label for="position">POSITION</label>
                <br>
                <input type="text" id="position" class="form-control">
            </div>
            <div class="form-group">
                <label for="license">LICENSE</label>
                <br>
                <input type="text" id="license" class="form-control">
            </div>
            <button class="btn">SUBJECTS</button>
            <button class="btn">SECTIONS</button>
        </div>
        <button class="btn">SAVE</button>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                employees:[
                    {id:0,name:'Rodrigo Duterte',age:55,address:'Manila',position:'President',
                        license:{license_id:0,license_number:5678}
                    },
                    {id:0,name:'Gloria Arroyo',age:55,address:'Manila',position:'President',
                        license:{license_id:0,license_number:5678}
                    },
                    {id:0,name:'Ninoy Aquino',age:55,address:'Manila',position:'President',
                        license:{license_id:0,license_number:5678}
                    },
                ],
                showing:false,
                emp:{
                    id:'',
                    name:'',
                    age:'',
                    address:'',
                    position:'',
                    license:{
                        license_id:0,
                        license_number:'',
                    }
                },
            }
        },
        components:{

        },
        methods:{
            display(){
                return this.showing = !this.showing
            },
            select_item(item){
                this.emp=item
            }
        },
        props:{

        }
    }
</script>

<style scoped>
    .wrapper{
        width: 70%;
        height: fit-content;
        box-shadow: 1px 1px 2px grey;
        margin: 30px auto;
        position: relative;
    }
    .employee_list{
        width: 100%;
        height: fit-content;
        text-align: center;
        background: black;
    }
    .employee_list tr{
        background: lightblue;
    }
    .employee_list th{
        background-color: lightsteelblue;
    }
    .employee_list td:hover{
        background-color: lightgray;
        cursor: default;

    }
    .table_wrapper{
        position: relative;
        height: 100%;
        min-height: 400px;
        width: 30%;
        border: solid 1px grey;
        display: inline-block;
    }
    .details{
        position: absolute;
        height: fit-content;
        min-height: 400px;
        width: 70%;
        display: inline-block;
        text-align: center;

    }
    .form-group{
        margin-top: 10px;
    }
    .form-control{
        border-radius: 2px;
        border: solid 1px grey;
        height: 25px;
        width: 250px;
    }

    .btn{
        border: none;
        background: lightblue;
        border-radius: 2px;
        padding: 10px;
        margin: 10px 10px 10px 10px;
    }
</style>