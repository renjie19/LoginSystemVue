<template>
    <div id="wrapper">
        <div id="nav_bar">
            <h2>WELCOME</h2>
            <div class="button_wrapper">
                <button class="btn" @click="navigate('home'),display===true?display=false:display">HOME</button>
                <button class="btn" @click="display=!display">EMPLOYEE</button>
                <div class="child" v-show="display">
                    <button class="btn" @click="navigate('add'),display=!display">ADD</button>
                    <br>
                    <button class="btn" @click="navigate('manage'),display=!display">MANAGE</button>
                </div>
                <button class="btn" @click="navigate('reports'),display===true?display=false:display">REPORTS</button>
            </div>
        </div>
            <router-view></router-view>
<!--        <component :is="showing"></component>-->
    </div>
</template>

<script>
    // import login from "./Login";
    // import report from "./Report";
    // import create_employee from "./CreateEmployee";
    // import manage_employee from "./ManageEmployee";
    export default {
        data:function () {
            return {
                showing:'log',
                display:false,
                page:''
            }
        },
        components:{
            // rep:report,
            // log:login,
            // create:create_employee,
            // manage:manage_employee
        },
        methods:{
            navigate(location){
                this.page = location;
                this.$router.push(this.page)
            }
        }
    }
</script>

<style scoped>
    #nav_bar{
        width: 100%;
        height: fit-content;
        box-shadow: 0 2px 5px grey;
        font-family: Garuda,serif;
    }

    .btn{
        position: relative;
        padding:15px;
        width: 120px;
        height: 100%;
        display: inline-block;
        border: 0;
        background-color: white;
        text-align: center;
    }

    .btn:hover{
        background: lightgray;
    }

    .child{
        position: absolute;
        margin-left: 120px;
        background-color: white;
        box-shadow: 1px 1px 2px grey;
    }

    .button_wrapper{
        display: inline-block;
        float: right;
    }

    h2 {
        display: inline-block;
        margin: 0 25px auto;
    }
</style>