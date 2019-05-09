<template>
    <div class="cc" @click="childclick">
        {{text}}
    </div>
</template>
<script>
export default {
    props:['text'],
    methods:{
        childclick(){
            this.$emit('customeEvent', '子组件传值')
        }
    }
}
</script>
<style>
.cc{
    color:red;
    background-color: #eee;
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    text-align:center;
    line-height: 3rem
}
</style>
