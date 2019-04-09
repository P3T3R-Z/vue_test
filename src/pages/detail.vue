<template>
    <div>
        get传值为:
        {{p}}
    </div>
</template>

<script>
export default {
    name: 'detail',
    data(){
        return {
            p:''
        }
    },
    mounted(){
        console.log(this.$route.query)  //动态路由获取参数
        this.p = this.$route.query.id
    }
}
</script>