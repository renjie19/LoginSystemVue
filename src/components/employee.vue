<script>
    export default {
        data(){
            return{

            }
        },
        props:{
            employee:{
                id:'',
                name:'',
                age:'',
                address:'',
                position:'',
                license:{
                    license_id:'',
                    license_number:''
                },
                subject:{
                    subject_id:'',
                    subject_name:''
                },
                section:{
                    section_id:'',
                    section_name:'',
                    year_level:'',
                }
            }
        }
    }
</script>

<style scoped>

</style>