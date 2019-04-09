<template>
    <div>
        {{p}}
    </div>
</template>

<script>
export default {
    name: 'params',
    data(){
        return {
            p:''
        }
    },
    mounted(){
        console.log(this.$route.params)  //动态路由获取参数
        this.p = this.$route.params.id
    }
}
</script>