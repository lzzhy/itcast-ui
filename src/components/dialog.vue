<!-- 组件说明 -->
<template>
    <!-- .self 代表只能点击自己 -->
    <div class="hm-dialog-wrapper" v-show="visible" @click.self="handCloses">
        <div class="hm-dialog" :style="{'width': width,'top':top}">
            <div class="hm-dialog__header">
                <slot name="titles">
                    <span class="hm-dialog__title">{{title}}</span>
                </slot>
                <button class="hm-dialog__headerbtn" @click="handCloses">
                    <i class="iconfont iconguanbi"></i>
                </button>
            </div>
            <div class="hm-dialog__body">
                <slot></slot>
            </div>
            <div class="hm-dialog__footer" v-if="$slots.footer">
                <slot name="footer">

                </slot>
            </div>
        </div>
    </div>
</template>

<script>
//import x from ''
export default {
    name: 'hm-dialog',
    props: {
        title: {
            type: String,
            default: '提示'
        },
        width: {
            type: String,
            default: '50%'
        },
        top: {
            type: String,
            default: '10vh'
        },
        visible: {
            type: Boolean,
            default: false
        }
    },
    components: {

    },
    data() {
        return {
        };
    },
    computed: {

    },
    methods: {
        handCloses() {
            console.log('嘎嘎嘎');
            this.$emit('close',false)
        },
    },
    created() {

    },
    mounted() {
        console.log(this.title);
        console.log(this.$slots);
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='scss' scoped>
.hm-dialog-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background: rgba(0,0,0,.5);
    .hm-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #ffffff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        box-sizing: border-box;
        width: 30%;
        &__header {
            padding: 20px 20px 10px;
            .hm-dialog__title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .hm-dialog__headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .el-icon-close {
                    color: #909399;
                }
            }
        }
        &__body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }
        &__footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            .hm-button:first-child {
                margin-right: 20px;
            }
        }
    }
}
</style>