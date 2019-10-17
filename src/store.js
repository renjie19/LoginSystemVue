import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios,axios);

export const store = new Vuex.Store({
    state: {
        employees: [],
        employee: {
            employeeId: '',
            name: '',
            age: '',
            address: '',
            position: '',
            license: {
                licenseId: '',
                licenseNumber: ''
            }
        },
        MockReports: [
            {
                id: 0,
                timeIn: {id: 0, employeeId: 0, type: 'IN', time: 1571024493313},
                timeOut: {id: 1, employeeId: 0, type: 'OUT', time: 1571024493313},
                totalHours: 566
            },
            {
                id: 1,
                timeIn: {id: 0, employeeId: 1, type: 'IN', time: 1571024493313},
                timeOut: {id: 1, employeeId: 1, type: 'OUT', time: 1571024493313},
                totalHours: 567
            },
            {
                id: 2,
                timeIn: {id: 0, employeeId: 1, type: 'IN', time: 1571024493313},
                timeOut: {id: 1, employeeId: 1, type: 'OUT', time: 1571024493313},
                totalHours: 565
            }
        ],
    },
    getters: {
        getEmployeeList: state => {
            return state.employees;
        },
        getReports: state => {
            return state.MockReports;
        },
    },
    mutations: {
        addEmployee: (state, employee) => {
            state.employees.push(employee);
        },
        updateEmployee: (state, employee) => {
            state.employees.find(e => {
                if (e.id === employee.id) {
                    e.name = employee.name;
                    e.age = employee.age;
                    e.address = employee.address;
                    e.position = employee.position;
                }
            });
        },
        deleteEmployee: (state, employee) => {
            Vue.axios.delete('http://localhost:8080/api/employee/deleteEmployee',employee.employeeId)
                .then(() => {
                    state.employees.find(e => {
                        if (e.id === employee.id) {
                            state.employees.splice(state.employees.indexOf(e), 1)
                        }
                    })
                })
                .catch()

        },
        updateReports: (state,report) => {
            state.MockReports.find( e => {
                if(e.id === report.id) {
                    e = report
                }
            })
        },
        serverAddEmployee: (state,employee) => {
            Vue.axios.post('http://localhost:8080/api/employee/save',employee)
                .then(response => console.log(response.data))
                .catch(response => console.log('error'));
        },
        serverLoadEmployees: state => {
            Vue.axios.get('http://localhost:8080/api/employee/getAll')
                .then(response => { state.employees = response.data});
        },
        serverUpdateEmployee: (state,employee) => {
            console.log(employee)
            Vue.axios.post('http://localhost:8080/api/employee/update',employee)
                .then(() => console.log('success'))
                .catch(response => console.log(response));
        }
    },
    module: {

    }
});
