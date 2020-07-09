<!-- 组件说明 -->
<template>
    <div class="hm-input" :class="{'hm-input--suffix': showSuffix}">
        <input class="hm-input__inner" :class="{'is-disabled': disabled}" :placeholder="placeholder" :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" :disabled="disabled" :value="value" @input="handleinput"> 
        <span class="hm-input__suffix">
            <i class="iconfont iconqingkong" v-if="clearable" @click="clear"></i>
            <i class="iconfont iconyanjing" v-if="showPassword" @click="handlePassword" :class="{'iconyanjing-active': passwordVisible}"></i>
        </span>
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
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        }
    },
    components: {

    },
    data () {
        return {
            // 用于控制是否显示密码框
            passwordVisible: false
        };
    },
    computed: {
        showSuffix() {
            return this.clearable || this.showPassword
        }
    },
    methods: {
        handleinput(e) {
            this.$emit('input',e.target.value)
        },
        clear() {
            this.$emit('input','')
        },
        handlePassword() {
            this.passwordVisible = !this.passwordVisible
        }
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
    width: 200px;
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
        &.is-disabled {
            background: #f5f7fa;
            border-color: #e4e7ed;
            color: #c0c4cc;
            cursor: not-allowed;
        }
    }
}
.hm-input--suffix {
    .hm-input__inner {
        padding-right: 30px;
    }
    .hm-input__suffix {
        position: relative;
        height: 100%;
        right: 10px;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;
        i {
            position: absolute;
            right: 0;
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645,.045,.355,1);
        }
        .iconyanjing-active {
            color: red;
        }
    }
}
</style>