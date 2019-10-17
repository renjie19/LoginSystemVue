<template>
    <div id="wrapper">
        <div id="nav_bar">
            <h2>WELCOME</h2>
            <div class="button_wrapper">
                <router-link
                        tag="button"
                        :to="{name:'home'}"
                        class="btn"
                        @click="navigate('/')">
                    HOME
                </router-link>
                <button class="btn" @mouseenter="display=true" @mouseleave="display=false">EMPLOYEE</button>
                <div class="child" v-show="display" @mouseover="display=true" @mouseleave="display=false">
                    <router-link
                            tag="button"
                            :to="{name:'add'}"
                            class="btn"
                            @click="navigate('add')">
                        ADD
                    </router-link>
                    <br>
                    <router-link
                            tag="button"
                            :to="{name:'manage'}"
                            class="btn"
                            @click="navigate('manage')">MANAGE</router-link>
                </div>
                <button class="btn" @click="navigate('reports')">REPORTS</button>
            </div>
        </div>
            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data:function () {
            return {
                showing:'log',
                display:false,
                page:''
            }
        },
        methods:{
            navigate(location){
                this.$router.push(location);
                if(location === '/' || location === 'reports'){
                    this.display = false
                } else {
                    this.display = !this.display;
                }

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