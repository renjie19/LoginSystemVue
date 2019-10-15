<template>
    <div class="wrapper">
        <table-component :employeeList="employee.subjects" @employeeSelected="select_item"></table-component>
        <form>
            <strong>INFORMATION</strong>
            <label>
                <input type="text">
            </label>
        </form>
    </div>
</template>

<script>
    import Table from "./Table";

    export default {
        data() {
            return {
                employee:{
                    id:'',
                    name:'',
                    age:'',
                    address:'',
                    position:'',
                    license:{
                        license_id:0,
                        license_number:'',
                    },
                    subjects:[
                        {id:'',subjectName:''}
                    ],
                    sections:[
                        {id:'',sectionName:'',yearLevel:''}
                    ]
                }
            }
        },
        components: {
            tableComponent: Table
        },
        methods:{
            select_item(){

            }
        },
        props:['selectedEmployee']
    }
</script>

<style scoped>

</style>