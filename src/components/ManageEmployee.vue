<template>
    <div class="wrapper">
        <div>
            <div class="table_wrapper">
                <employee_table :employeeList="this.$store.state.employees" @employeeSelected="select_item"></employee_table>
            </div>
            <div class="details">
                <strong>INFORMATION</strong>
                <div class="form-group">
                    <label for="name">NAME</label>
                    <br>
                    <input type="text" id="name" class="form-control" v-model="employee.name">
                </div>
                <div class="form-group">
                    <label for="age">AGE</label>
                    <br>
                    <input type="number" id="age" class="form-control" v-model.number="employee.age">
                </div>
                <div class="form-group">
                    <label for="address">ADDRESS</label>
                    <br>
                    <input type="text" id="address" class="form-control" v-model="employee.address">
                </div>
                <div class="form-group">
                    <label for="position">POSITION</label>
                    <br>
                    <input type="text" id="position" class="form-control" v-model="employee.position">
                </div>
                <div class="form-group">
                    <label for="license">LICENSE</label>
                    <br>
                    <input type="number" id="license" class="form-control"
                           v-model.number="employee.license.licenseNumber">
                </div>
                <button class="btn">SUBJECTS</button>
                <button class="btn">SECTIONS</button>
            </div>
            <div class="button_holder">
                <button class="btn" @click="save">SAVE</button>
                <button class="btn" @click="deleteEmployee(employee)">DELETE</button>
                <button class="btn" @click="clearFields">CLEAR</button>
            </div>
        </div>
    </div>
</template>

<script>
    import employee_table from "./Table";

    export default {
        data() {
            return {
                employee: {
                    id: '',
                    name: '',
                    age: '',
                    address: '',
                    position: '',
                    license: {
                        license_id: 0,
                        license_number: '',
                    },
                    subjectList: [],
                    sectionList: []
                },
            }
        },
        components: {
            employee_table: employee_table,
        },
        methods: {
            display() {
                return this.showing = !this.showing
            },
            select_item(employee) {
                this.employee = {
                    id: employee.employeeId,
                    name: employee.name,
                    age: employee.age,
                    address: employee.address,
                    position: employee.position,
                    license: {
                        licenseId: employee.license.licenseId,
                        licenseNumber: employee.license.licenseNumber
                    },
                    subjectList: employee.subjectList,
                    sectionList: employee.sectionList
                };
            },
            deleteEmployee(employee) {
                this.clearFields();
                this.$store.commit('deleteEmployee', employee)
            },
            clearFields() {
                this.employee = {
                    name: null,
                    age: null,
                    address: null,
                    position: null,
                    license: {
                        license_id: null,
                        license_number: null
                    },
                    subjects: [
                        {id: null, subjectName: null}
                    ],
                    sections: [
                        {id: null, sectionName: null, yearLevel: null}
                    ]
                };
            },
            save() {
                this.$store.commit('serverUpdateEmployee', this.employee);
            }
        },
        mounted() {
            this.$store.commit('serverLoadEmployees');
        }
    }
</script>

<style scoped>
    .wrapper {
        width: 70%;
        height: fit-content;
        box-shadow: 1px 1px 5px grey;
        margin: 30px auto;
        position: relative;
    }

    .employee_list tr {
        background: lightblue;
    }

    .employee_list th {
        background-color: lightsteelblue;
    }

    .employee_list td:hover {
        background-color: lightgray;
        cursor: default;

    }

    .table_wrapper {
        position: relative;
        height: 100%;
        min-height: 400px;
        width: 30%;
        border: solid 1px grey;
        display: inline-block;
    }

    .details {
        position: absolute;
        height: fit-content;
        min-height: 400px;
        width: 70%;
        display: inline-block;
        text-align: center;

    }

    .form-group {
        margin-top: 5px;
    }

    .form-control {
        border-radius: 2px;
        border: solid 1px grey;
        height: 25px;
        width: 250px;
    }

    .btn {
        border: none;
        background: lightblue;
        border-radius: 2px;
        padding: 10px;
        margin: 10px 10px 10px 10px;
    }

    .button_holder {
        position: absolute;
        margin: 420px auto auto auto;
        width: fit-content;
        text-align: center;
        /*padding-left: 30%;*/
        display: inline-block;
    }

    .button_holder button {
        background-color: lightsteelblue;
        box-shadow: 1px 1px 2px gray;
    }

</style>