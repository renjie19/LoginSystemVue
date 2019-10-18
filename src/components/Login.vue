<template>
    <div id="login">
        <strong>Employee Id</strong>
        <input type="number" class="login" v-model="id">
        <button class="login" @click="login">SUBMIT</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                id: null,
            }
        },
        methods: {
            login(){
                this.$store.commit('serverLogin',this.id);
                this.id = null;
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 40%;
        height: 150px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15%;
        box-shadow: 1px 2px 5px gray;
        text-align: center;
        padding-top: 25px;
    }

    .login {
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        border: solid 1px grey;
        border-radius: 3px;
        height: 20px;
    }
</style>