<template>
    <div class="wrapper">
        <h1>Employee Form</h1>
        <div class="form-group">
            <label for="name">Name</label>
            <br>
            <input
                    type="text"
                    id="name"
                    class="form-control"
                    v-model="employee.name">
        </div>
        <div class="form-group">
            <label for="age">Age</label>
            <br>
            <input
                    type="number"
                    id="age"
                    class="form-control"
                    v-model="employee.age">
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <br>
            <input
                    type="text"
                    id="address"
                    class="form-control"
                    v-model="employee.address">
        </div>
        <div class="form-group">
            <label for="position">Position</label>
            <br>
            <input
                    type="text"
                    id="position"
                    class="form-control"
                    v-model="employee.position">
        </div>
        <div class="form-group">
            <label for="license">License</label>
            <br>
            <input
                    type="number"
                    id="license"
                    class="form-control"
                    v-model="employee.license.license_number">
        </div>
        <div class="form-group">
            <button class="submit" @click="save">SUBMIT</button>
        </div>
        <p>{{employee.name}}</p>
    </div>
</template>

<script>
    import employee from "./employee";
    export default {
        data(){
            return{
                employee:{
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
        methods:{
            save(){
                if(this.isEmpty()) {
                    //save employee
                }else{
                    //alert field empty
                }
            },
            isEmpty(){
                return this.employee.name==='' ||
                    this.employee.age==='' ||
                    this.employee.address==='' ||
                    this.employee.position==='' ||
                    this.employee.license.license_number==='';
            }
        },
    }
</script>

<style scoped>
    .wrapper{
        width: 100%;
        height: 400px;
        font-family: Garuda,serif;
    }


    .form-group{
        width: fit-content;
        margin:20px auto auto auto;
    }

    .form-control{
        width: 300px;
        height: 30px;
        border:solid 1px lightgray;
        border-radius: 3px;
        font-size: medium;
    }

    .submit{
        border: none;
        background: lightblue;
        height: 40px;
        width: 90px;
        margin: 0 auto;
        border-radius: 5px;
    }

    .submit:hover{
        background-color: lightsteelblue;
    }

    h1{
        text-align: center;
    }
</style>