<template>
    <div>
        <button class="btn" v-if="disp">Edit</button>
        <button class="btn" v-if="disp">Delete</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }

        },
        props:['disp']

    }
</script>

<style scoped>
    .btn{
        border: none;
        background: coral;
        border-radius: 3px;
        margin: auto 2px auto 2px;
    }
</style>