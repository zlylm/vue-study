<template>
    <div>
        兄弟传过来的值是：{{xiongVal}}
    </div>
</template>
<script>
import eventM from './eventMiddle'
export default {
    data () {
        return {
            xiongVal: ''
        }
    },
    mounted(){
        eventM.$on('chuEvent',this.xiongHand)
    },
    methods:{
        xiongHand(val) {
            this.xiongVal = val
        }
    }
}
</script>