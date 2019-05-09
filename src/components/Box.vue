<template>
    <div class="cc" @click="childclick">
        {{text}}
        <slot name="cc"></slot>
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
    text-align:center;
}
</style>
