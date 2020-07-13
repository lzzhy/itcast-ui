<!-- 组件说明 -->
<template>
    <div class="hm-radio-group">
        <slot></slot>
    </div>
</template>

<script>
//import x from ''
export default {
    name: 'hm-radio-group',
    // 父组件provide，子组件inject，这样写可以拿到父组件的value
    provide() {
        return {
            RadioGroup: this
        }
        
    },
    props: {
        // v-model 双向绑定
        value: {
            type: null
        }
    },
    components: {

    },
    data () {
        return {

        };
    },
    computed: {

    },
    methods: {

    },
    created() {
    
    },
    mounted() {
    
    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style lang='scss' scoped>
</style>