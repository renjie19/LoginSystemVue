<template>
    <div class="wrapper">
        <div class="table_wrapper">
            <employee_table :employeeList="employees" @employeeSelected="select_item"></employee_table>
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
                    <td>{{getDate(report.timeIn.time)}}</td>
                    <td>{{getTime(report.timeIn.time)}}</td>
                    <td>{{getTime(report.timeOut.time)}}</td>
                    <td>{{report.totalHours}}</td>
                </tr>

                <tr>
                    <td>Overall Total:{{overAll}}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="edit_wrapper">
            <div class="edit_form">
                <label for="timeIn">Time In</label>
                <input type="text" id="timeIn" v-model="timeIn">
            </div>
            <div class="edit_form">
                <label for="timeOut">Time Out</label>
                <input type="text" id="timeOut" v-model="timeOut">
            </div>
            <br>
            <button class="edit_btn">SAVE</button>
            <button class="edit_btn">DELETE</button>
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
                        id: 1,
                        name: 'Rodrigo Duterte',
                        age: 55,
                        address: 'Manila',
                        position: 'President',
                        license: {license_id: 0, license_number: 987}
                    },
                    {
                        id: 0,
                        name: 'Gloria Arroyo',
                        age: 55,
                        address: 'Manila',
                        position: 'President',
                        license: {license_id: 0, license_number: 987}
                    },
                    {
                        id: 2,
                        name: 'Ninoy Aquino',
                        age: 55,
                        address: 'Manila',
                        position: 'President',
                        license: {license_id: 0, license_number: 987}
                    }
                ],
                MockReports: [
                    {
                        id: 0,
                        timeIn: {id: 0, employeeId: 0, type: 'IN', time: 1571024493313},
                        timeOut: {id: 1, employeeId: 0, type: 'OUT', time: 1571024493313},
                        totalHours: 565
                    },
                    {
                        id: 1,
                        timeIn: {id: 0, employeeId: 1, type: 'IN', time: 1571024493313},
                        timeOut: {id: 1, employeeId: 1, type: 'OUT', time: 1571024493313},
                        totalHours: 565
                    },
                    {
                        id: 2,
                        timeIn: {id: 0, employeeId: 1, type: 'IN', time: 1571024493313},
                        timeOut: {id: 1, employeeId: 1, type: 'OUT', time: 1571024493313},
                        totalHours: 565
                    }
                ], reports: [],
                selectedEmployee: {
                    id: '',
                    name: '',
                    age: '',
                    address: '',
                    position: '',
                    license: {license_id: '', license_number: ''}
                },
                selectedReport: {
                    id: '',
                    timeIn: '',
                    timeOut: '',
                    total: ''
                },
                timeIn: '',
                timeOut: '',
            }
        },
        methods: {
            getDate(dateInLong) {
                let date = new Date(dateInLong);
                return date.toLocaleDateString();
            },
            getTime(timeInLong) {
                let time = new Date(timeInLong);
                return time.toLocaleTimeString();
            },
            editTime(report) {
                this.selectedReport = report;
                this.selectedReport = {
                    id: report.id,
                    timeIn: report.timeIn,
                    timeOut: report.timeOut,
                    total: report.total
                };
                this.timeIn = new Date(this.selectedReport.timeIn.time).toLocaleTimeString();
                this.timeOut = new Date(this.selectedReport.timeIn.time).toLocaleTimeString();
            },
            select_item(item) {
                this.selectedEmployee = {
                    id: item.id,
                    name: item.name,
                    age: item.age,
                    address: item.address,
                    position: item.position,
                    license: {license_id: item.license.license_id, license_number: item.license.license}
                };
                this.reports = this.MockReports.filter(report => report.timeIn.employeeId === this.selectedEmployee.id);
            },

        },
        components: {
            employee_table: employee_table,
        },
        computed: {
            overAll() {
                return this.reports.reduce(function (acc, report) {
                    return acc + report.totalHours;
                }, 0)
            },

        }
    }
</script>

<style scoped>
    .wrapper {
        width: 60%;
        height: fit-content;
        min-height: 400px;
        margin: 30px auto;
        box-shadow: 1px 1px 2px grey;
    }

    .wrapper td:hover {
        cursor: default;
    }

    .table_wrapper {
        width: 30%;
        height: fit-content;
        min-height: 400px;
        box-shadow: 2px 0 0 grey;
        display: inline-block;
    }

    .report_wrapper {
        width: 70%;
        height: fit-content;
        min-height: 400px;
        display: inline-block;
    }

    .report_wrapper table {
        width: 100%;
        height: fit-content;
        max-height: 200px;
        text-align: center;
        border: solid 1px black;
    }

    .table_wrapper table {
        width: 100%;
        height: fit-content;
        text-align: center;
    }

    .table_wrapper th {
        background-color: cadetblue;
    }

    .table_wrapper td {
        background-color: lightblue;
    }

    .edit_wrapper {
        position: absolute;
        margin: 10px auto auto 15%;
        text-align: center;
        border: solid 1px black;
        width: 30%;
        padding: 10px;
    }

    .edit_form {
        margin: 5px;
        display: inline-block;
    }

    .edit_form label {
        margin: 5px;
    }

    .edit_btn {
        margin: 3px;
        background: lightblue;
        border: none;
        border-radius: 2px;
        width: 100px;
        height: 30px;
    }
</style>