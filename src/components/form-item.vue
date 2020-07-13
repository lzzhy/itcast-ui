<!-- 组件说明 -->
<template>
    <div class="hm-form-item">
        <label class="hm-form-item__label" :style="{width: this.form.labelWidth}">{{label}}</label>
        <div class="hm-form-item__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
//import x from ''
export default {
    name: 'hm-form-item',
    props: {
        label: String,
        default: ''
    },
    inject: {
        form: {
            default: ''
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
.hm-form-item {
    margin-bottom: 25px;
    .hm-form-item__label {
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }
    .hm-form-item__content {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        overflow: hidden;
        display: inline-block;
    }
}
</style>