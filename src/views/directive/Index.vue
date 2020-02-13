<template>
    <div v-loading="show">
        234
    </div>
</template>
<script>
export default {
    data () {
        return {
            show: false
        }
    },
    mounted(){
        this.show = true
        setTimeout(()=>{
            this.show = false
        },3000)
    }
}
</script>