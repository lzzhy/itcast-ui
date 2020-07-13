<!-- 组件说明 -->
<template>
    <label class="hm-checkbox" :class="{'is-checked': isChecked}">
        <span class="hm-checkbox__input">
            <span class="hm-checkbox__inner"></span>
            <input type="checkbox" class="hm-checkbox__original" :name="name" v-model="model" :value="label">
        </span>
        <span class="hm-checkbox__label">
            <slot></slot>
            <template v-if="!$slots.default">{{label}}</template>
        </span>
    </label>
</template>

<script>
//import x from ''
export default {
    name: 'hm-checkbox',
    inject: {
        checkboxGroup: {
            default: ''
        }
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        value: {
            type: Boolean,
            default: false
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
        model: {
            get() {
                return this.isGroup ? this.checkboxGroup.value : this.value
            },
            set(value) {
                this.isGroup ? this.checkboxGroup.$emit('input',value) : this.$emit('input',value)
            }
        },
        isGroup() {
            return !!this.checkboxGroup
        },
        isChecked() {
            // 判断如果是group包裹着，判断label是否在model中
            // 如果没被group包裹，直接使用model
            return this.isGroup ? this.model.includes(this.label) : this.label
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
.hm-checkbox {
    color: #666768;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 38px;
    .hm-checkbox__input {
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
        .hm-checkbox__inner {
            display: inline-block;
            position: relative;
            border: 1px solid #dcdfe6;
            border-radius: 2px;
            box-sizing: border-box;
            width: 14px;
            height: 14px;
            background: #fff;
            z-index: 1;
            transition: border-color .2s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
            &::after {
                box-sizing: content-box;
                content: '';
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                height: 7px;
                left: 4px;
                position: absolute;
                transform: rotate(45deg) scale(Y);
                transform-origin: center;
            }
        }
    }
    .hm-checkbox__original {
        opacity: 0;
        outline: none;
        position: absolute;
        left: 10px;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
    }
    .hm-checkbo__label {
        display: inline-block;
        padding-left: 10px;
        line-height: 20px;
        font-size: 14px;
    }
}
.hm-checkbox.is-checked {
    .hm-checkbox__input {
        .hm-checkbox__inner {
            background: #409eff;
            border-color: #409eff;
            &:after {
                transform:rotate(45deg) scaleY(1)
            }
        }
    }
    .hm-checkbox__label {
        color: #409eff;
    }
}
</style>
