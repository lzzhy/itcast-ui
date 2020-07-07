<!-- 组件说明 -->
<template>
    <div class="hm-input">
        <input class="hm-input__inner" :placeholder="placeholder" :type="type" :style={}> 
    </div>
</template>

<script>
//import x from ''
export default {
    name: 'hm-input',
    props: {
        placeholder: {
            type: String,
            default: '请填写'
        },
        type: {
            type: String,
            default: 'text'
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
        console.log(this.placeholder);
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
.hm-input {
    width: 30%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .hm-input__inner {
        -webkit-appearance: none;
        background: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
        &:focus {
            outline: none;
            border-color: #409eff;
        }
    }
}
</style>