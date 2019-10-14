<template>
    <div id="login">
        <h4 class="login">Employee Id</h4>
        <input type="number" class="login" v-model="emp_id">
        <button class="login" >SUBMIT</button>
    </div>
</template>

<script>
    export default {
        data:function () {
            return{
                emp_id:null,
            }
        },
        methods:{

        }
    }
</script>

<style scoped>
#login{
    width: 40%;
    height: 150px;
    margin-left:auto;
    margin-right: auto;
    margin-top: 15%;
    box-shadow: 1px 2px 5px gray;
    text-align: center;
    padding-top: 10px;
}

.login{
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    display: block;

}
</style>