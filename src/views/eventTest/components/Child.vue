<template>
    <div>
        <button @click="setClick">点击我传值给父组件</button>
        <button @click="xiongClick">传给兄弟组件</button>
    </div>
</template>
<script>
import eventM from './eventMiddle'
export default {
    methods:{
        setClick(){
            // 这里触发父组件的自定义事件，并传一个值过去
            this.$emit('onChild','666的子组件')
        },
        xiongClick(){
            eventM.$emit('chuEvent','333')
        }
    }
}
</script>