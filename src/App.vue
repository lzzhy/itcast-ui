<template>
    <div id="app">
        <!-- 按钮组件的使用 -->
        <!-- <div class="row">
            <hm-button type="primary" @click="fn">按钮</hm-button>
            <hm-button type="success">按钮</hm-button>
            <hm-button type="info">按钮</hm-button>
            <hm-button type="warning">按钮</hm-button>
            <hm-button type="danger">按钮</hm-button>
        </div>
        <div class="row">
            <hm-button plain type="primary">按钮</hm-button>
            <hm-button plain type="success">按钮</hm-button>
            <hm-button plain type="info">按钮</hm-button>
            <hm-button plain type="warning">按钮</hm-button>
            <hm-button plain type="danger">按钮</hm-button>
        </div>
        <div class="row">
            <hm-button plain round type="primary" icon="iconfont iconicon-test1">按钮</hm-button>
            <hm-button plain round type="success">按钮</hm-button>
            <hm-button plain round type="info">按钮</hm-button>
            <hm-button plain round type="warning">按钮</hm-button>
            <hm-button plain round type="danger">按钮</hm-button>
        </div>
        <div class="row">
            <hm-button plain circle type="primary" icon="iconfont icondelete"></hm-button>
            <hm-button plain circle type="success" icon="iconfont iconicon-test1"></hm-button>
            <hm-button plain circle type="info" icon="iconfont iconicon-test2"></hm-button>
            <hm-button plain circle type="warning" icon="iconfont iconicon-test"></hm-button>
            <hm-button plain circle type="danger" icon="iconfont iconicon-test3"></hm-button>
        </div> -->

        <!-- dialog 的使用 -->
        <!-- <div class="row">
            <hm-button type="primary" @click="openDialog">按钮</hm-button>
            <hm-dialog title="温馨提示" width="50%" top="200px" :visible="visible" @close="clickClose">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <template v-slot:footer>
                    <hm-button @click="visible= false">取消</hm-button>
                    <hm-button type="primary" @click="visible= false">确定</hm-button>
                </template>
            </hm-dialog>
        </div> -->

        <!-- input 组件的使用 -->
        <!-- <hm-input placeholder="请填写zzzz" type="password" disabled></hm-input>
        <hm-input placeholder="请填写zzzz"></hm-input> -->

        <!-- v-model 就是一个语法糖 等价于 :value="usernema" @input="username=$event.target.value" -->
        <!-- <input type="text" v-model="username"> -->

        <!-- 下面这句是 <hm-input :value="username" @input="username=$event.target.value"></hm-input> 的缩写 -->
        <!-- <hm-input placeholder="请输入用户名" v-model="username1" clearable @input="clear"></hm-input>  
        <hm-input placeholder="请输入用户名" type="text" v-model="username2"></hm-input>
        <hm-input placeholder="请输入密码" type="password" v-model="username3" show-password></hm-input> -->

        <!-- <hm-switch v-model="active1"></hm-switch>
        <hm-switch v-model="active2" active-color="red" inactive-color="green" name="username"></hm-switch> -->

        <hm-radio label="1" v-model="gender">男</hm-radio>
        <hm-radio label="0" v-model="gender">女</hm-radio>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: true,
            username1: '',
            username2: '',
            username3: '',
            active1: false,
            active2: false,
            username: '哈哈哈哈',
            gender: ''
        }
    },
    methods: {
        fn() {
            console.log('灌灌灌灌');
        },
        flagVisible() {
            this.visible = false
        },
        clickClose(value) {
            this.visible = value
        },
        openDialog() {
            this.visible = true
        },
        clear(value) {
            console.log(value);
            this.username=value
        }
    }
}
</script>

<style lang="scss">
.row {
    margin-bottom: 20px;
    .hm-button {
        margin-right: 20px;
    }
}
</style>
