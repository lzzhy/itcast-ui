<!-- 组件说明 -->
<template>
    <div class="hm-switch" :class="{'is-checked': value}" @click="handelClick">
        <span class="hm-switch__core" ref="core">
            <span class="hm-switch__button"></span>
        </span>
        <input class="hm-switch__input" type="checkbox" :name="name" ref="input">
    </div>
</template>

<script>
//import x from ''
export default {
    name: 'hm-switch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: ''
        },
        inactiveColor: {
            type: String,
            default: ''
        },
        name: {
            type: String,
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
        // async, await this.$nextTick() 是处理异步的,这是一种方式。也可以写成this.$nextTick(() => {this.setColor()})
        async handelClick() {
            this.$emit('input',!this.value)
            // 点击的时候修改颜色
            await this.$nextTick()
            this.setColor()
            this.$refs.input.checked = this.value
        },
        setColor() {
            if(this.activeColor || this.inactiveColor) {
                let color = this.value ? this.activeColor : this.inactiveColor
                this.$refs.core.style.borderColor = color
                this.$refs.core.style.backgroundColor = color
            }
        }
    },
    created() {
    
    },
    mounted() {
        // 修改开关颜色
        this.setColor()
        // 控制checkbox
        console.log(this.$refs.input);
        this.$refs.input.checked = this.value
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
.hm-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .hm-switch__input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
    }
    .hm-switch__core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s,background-color .3s;
        vertical-align: middle;
        .hm-switch__button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background: #fff;
        }
    }
}
.hm-switch.is-checked {
    .hm-switch__core {
        border-color: #409eff;
        background: #409eff;
        .hm-switch__button {
            transform: translate(20px);
        }
    }
}
</style>