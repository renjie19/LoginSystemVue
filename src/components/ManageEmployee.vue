<template>
    <div class="wrapper">
        <div>
            <div class="table_wrapper">
                <employee_table :employeeList="employees" @employeeSelected="select_item"></employee_table>
            </div>
            <div class="details">
                <strong>INFORMATION</strong>
                <div class="form-group">
                    <label for="name">NAME</label>
                    <br>
                    <input type="text" id="name" class="form-control" v-model="emp.name">
                </div>
                <div class="form-group">
                    <label for="age">AGE</label>
                    <br>
                    <input type="number" id="age" class="form-control" v-model.number="emp.age">
                </div>
                <div class="form-group">
                    <label for="address">ADDRESS</label>
                    <br>
                    <input type="text" id="address" class="form-control" v-model="emp.address">
                </div>
                <div class="form-group">
                    <label for="position">POSITION</label>
                    <br>
                    <input type="text" id="position" class="form-control" v-model="emp.position">
                </div>
                <div class="form-group">
                    <label for="license">LICENSE</label>
                    <br>
                    <input type="number" id="license" class="form-control" v-model.number="emp.license.license_number">
                </div>
                <button class="btn">SUBJECTS</button>
                <button class="btn">SECTIONS</button>
<!--                <employee_table class="relations" :employeeList="emp.subjects"-->
<!--                                @employeeSelected="select_subject"></employee_table>-->
<!--                <employee_table class="relations" :employeeList="emp.sections"-->
<!--                                @employeeSelected="select_subject"></employee_table>-->
            </div>
            <div class="button_holder">
                <button class="btn" @click="save">SAVE</button>
                <button class="btn" @click="deleteEmployee(itemIndex)">DELETE</button>
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
                employees: [
                    {
                        id: 0, name: 'Rodrigo Duterte', age: 55, address: 'Manila', position: 'President',
                        license: {license_id: 0, license_number: 5678}, subjects: [{id: 0, name: 'Science'}]
                    },
                    {
                        id: 1, name: 'Gloria Arroyo', age: 55, address: 'Manila', position: 'President',
                        license: {license_id: 0, license_number: 5678}
                    },
                    {
                        id: 2, name: 'Ninoy Aquino', age: 55, address: 'Manila', position: 'President',
                        license: {license_id: 0, license_number: 5678}, subjects: [], sections: []
                    },
                ],
                showing: false,
                emp: {
                    id: '',
                    name: '',
                    age: '',
                    address: '',
                    position: '',
                    license: {
                        license_id: 0,
                        license_number: '',
                    },
                    subjects: [
                        {id: '', subjectName: ''}
                    ],
                    sections: [
                        {id: '', sectionName: '', yearLevel: ''}
                    ]
                },
                itemIndex: null
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
                this.emp = {
                    id: employee.id,
                    name: employee.name,
                    age: employee.age,
                    address: employee.address,
                    position: employee.position,
                    license: {
                        license_id: employee.license.license_id,
                        license_number: employee.license.license_number
                    },
                    subjects: employee.subjects,
                    sections: employee.sections
                };
                this.itemIndex = this.emp.id;
            },
            deleteEmployee(index) {
                this.clearFields();
                if (this.itemIndex) {
                    this.employees.splice(index, 1);
                    this.itemIndex = null
                }
            },
            clearFields() {
                this.emp = {
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
                this.showAlert('clicked');
            },
            showAlert(message) {
                alert(message);
            },
            subjectClick() {

            }
        },
        props: {}
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
        position: relative;
        margin: auto;
        width: 100%;
        /*text-align: center;*/
        padding-left: 30%;
    }

    .button_holder button {
        background-color: lightsteelblue;
    }

    .dialogBox{
        position: fixed;
        width: 100%;
        height: 400px;
        text-align: center;
        background-color: grey;
    }
</style>