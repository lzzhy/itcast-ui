<!-- 组件说明 -->
<template>
    <label class="hm-radio" :class="{'is-checked': label === model}">
        <span class="hm-radio__input">
            <div class="hm-radio__inner"></div>
            <input type="radio" class="hm-radio__original" :value="label" :name="name" v-model="model">
        </span>  
        <span class="hm-radio__label">
            <slot></slot>
            <!-- 如果没有传内容，就把label当内容显示 -->
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
//import x from ''
export default {
    name: 'hm-radio',
    inject: {
        RadioGroup: {
            default: ''
        }
    },
    props: {
        label: {
            type: [String,Number,Boolean],
            default: ''
        },
        value: null,
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
        model: {
            get() {
                // return this.value
                return this.isGroup ? this.RadioGroup.value : this.value
            },
            // 因为不能违反单向数据流原则，所以在子组件中不能直接修改父组件，所以只能通过改变子组件中自己定义的model从而来控制
            set(value) {
                // this.$emit('input',value)
                this.isGroup ? this.RadioGroup.$emit('input',value) : this.$emit('input',value)
            }
        },
        isGroup() {
            // 用于判断radio 是否被radiogroup包裹，因为如果被包裹就要从radiogroup中拿值，如果没有被包裹就可以直接像现在这样在value中拿值
            return !!this.RadioGroup
        }
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
.hm-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .hm-radio__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .hm-radio__inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            &::after {
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background: #fff;
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%) scale(0);
                transition: transform .15s ease-in;
            }
        }
        .hm-radio__original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            left: 0;
            margin: 0;
        }
    }
    .hm-radio__label {
        font-size: 14px;
        padding-left: 10px;
    }
}
.hm-radio.is-checked {
    .hm-radio__input {
        .hm-radio__inner {
            background: #409eff;
            border-color: #409eff;
            &::after {
                transform: translate(-50%,-50%) scale(1);
            }
        }
    }
    .hm-radio__label {
        color: #409eff;
    }
}
</style>