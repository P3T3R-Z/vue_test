import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);


var state = {
    count: 1,
    list: []
}

var mutations = {
    incCount(){
        ++state.count
    },
    getdata(state, payload){
        state.list = payload
    }
}

//计算属性,数据改变则触发
var getters = {
    computed: state=>{
        return state.count*2
    },
    getcomputedlist: state=>{
        return state.list
    }
}

//类似mutation,可执行异步
var actions = {
    incMutationCount(context){      //调用context.commit提交一个mutation
        context.commit('incCount')  
    }
} 

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})