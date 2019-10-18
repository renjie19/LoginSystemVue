<template>
    <div class="wrapper">
        <div class="table_wrapper">
            <employee_table :employeeList="this.$store.state.employees" @employeeSelected="select_item"></employee_table>
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
                <tr
                        v-for="report in reports"
                        :key="report.id"
                        @click="editTime(report)">
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
            <button class="edit_btn" @click="save">SAVE</button>
            <button class="edit_btn" @click="remove">DELETE</button>
        </div>
    </div>
</template>

<script>
    import employee_table from "./Table";

    export default {
        data() {
            return {
                reports:[],
                selectedEmployee: {
                    employeeId: '',
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
                selectedReportDate: '',
                timeIn: '',
                timeOut: '',
                timeFormat: {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            }
        },
        methods: {
            getDate(dateInLong) {
                let date = new Date(dateInLong);
                return date.toLocaleDateString();
            },
            getTime(timeInLong) {
                let time = new Date(timeInLong);
                return time.toLocaleTimeString('en-US', this.timeFormat);
            },
            editTime(report) {
                this.selectedReport = report;
                this.selectedReport = {
                    employeeId: report.id,
                    timeIn: report.timeIn,
                    timeOut: report.timeOut,
                    total: report.total
                };
                this.selectedReportDate = this.getDate(this.selectedReport.timeIn.time);
                this.timeIn = new Date(this.selectedReport.timeIn.time).toLocaleTimeString('en-US', this.timeFormat);
                this.timeOut = new Date(this.selectedReport.timeOut.time).toLocaleTimeString('en-US', this.timeFormat);
            },
            select_item(item) {
                this.selectedEmployee = {
                    employeeId: item.employeeId,
                    name: item.name,
                    age: item.age,
                    address: item.address,
                    position: item.position,
                    license: {license_id: item.license.licenseId, licenseNumber: item.license.license}
                };
                this.reports = this.$store.getters.getReports.filter(report =>
                    report.timeIn.employeeId === this.selectedEmployee.id);
            },
            save: function () {
                let timeIn = new Date(this.selectedReportDate + ' ' + this.timeIn);
                let timeOut = new Date(this.selectedReportDate + ' ' + this.timeOut);
                this.selectedReport.timeIn.time = timeIn.getTime();
                this.selectedReport.timeOut.time = timeOut.getTime();
                this.reports.find(report => report.id === this.selectedReport.id ? report = this.selectedReport : report);
                this.clearTimeInput();
                this.selectedReport = null
            },
            remove() {
                if(this.selectedReport){
                    this.reports.forEach(report => {
                        if (report.id === this.selectedReport.id) {
                            this.reports.splice(this.reports.indexOf(report),1)
                        }
                    });
                    this.clearTimeInput()
                }
            },
            clearTimeInput(){
                this.timeIn = null;
                this.timeOut = null;
            }

        },
        components: {
            employee_table: employee_table,
        },
        computed: {
            overAll() {
                return this.reports.reduce(function (acc, report) {
                    return acc + report.totalHours;
                }, 0)
            }
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
        overflow-y: auto;
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