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
                    v-model="employee.license.licenseNumber">
        </div>
        <div class="form-group">
            <button class="submit" @click="save">SUBMIT</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                employee: {
                    name: '',
                    age: '',
                    address: '',
                    position: '',
                    license: {
                        licenseId: 0,
                        licenseNumber: '',
                    }
                },
            }
        },
        methods: {
            save() {
                if (this.employee.name &&
                    this.employee.age &&
                    this.employee.address &&
                    this.employee.position &&
                    this.employee.license.licenseNumber) {
                    this.employee.id = this.$store.state.employees.length;
                    this.$store.commit('serverAddEmployee',this.employee);
                    this.employee = {
                        name: '',
                        age: '',
                        address: '',
                        position: '',
                        license: {
                            licenseId: 0,
                            licenseNumber: '',
                        }
                    }
                } else {
                    alert("Fill in all Fields");
                }
            }
        },
    }
</script>

<style scoped>
    .wrapper {
        width: 100%;
        height: 400px;
        font-family: Garuda, serif;
    }


    .form-group {
        width: fit-content;
        margin: 20px auto auto auto;
    }

    .form-control {
        width: 300px;
        height: 30px;
        border: solid 1px lightgray;
        border-radius: 3px;
        font-size: medium;
    }

    .submit {
        border: none;
        background: lightblue;
        height: 40px;
        width: 90px;
        margin: 0 auto;
        border-radius: 5px;
    }

    .submit:hover {
        background-color: lightsteelblue;
    }

    h1 {
        text-align: center;
    }
</style>