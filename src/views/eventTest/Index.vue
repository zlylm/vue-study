<template>
    <div>
        <div>子组件传过来的值是：{{msgVal}}</div>
        <Child @onChild="getChildVal"/>
        <ChildTwo />
    </div>
</template>
<script>
import Child from './components/Child'
import ChildTwo from './components/ChildTwo'
export default {
    components:{
        Child,
        ChildTwo
    },
    data () {
        return {
            msgVal:''
        }
    },
    methods:{
        getChildVal(val){
            this.msgVal = val
        }
    }
}
</script>
