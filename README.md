从0到1封装组件库 指令形式

封装了 button,dialog,input,switch,radio 等组件

以下以 button 为例

### 创建项目并运行起来
* 创建项目： vue create 项目名
* 项目运行： yarn serve
* 去掉多余的代码： 如 components 和 assets 里的文件

### 配置快捷命令生成 .vue 模板
code => 首选项 => 用户片段 => 输入vue,进入 vue.json 文件，在 vue.json 输入以下代码段并保存 => 进入 .vue 文件 => 输入 vue，按 enter 键就会自动生成模板了

## 写 button 组件
### 创建 button.vue 文件

### 在 main.js 文件中引入和注册 button.vue 组件

```
// main.js

import button from './components/button' // 引入
Vue.conponent(button.name, button) // 注册
```

### 现在就可以在 App.vue 里面来用这个组件了，如
```
// App.vue 

<Hm-button>按钮组件</Hm-button>
```

这样就是一个最简单的一个按钮了，现在就要给这个按钮组件添加各种属性了


### 添加 type 属性
* 添加父子传值
```
// 父： App.vue

<hm-button type="primary">按钮</hm-button>
```

```
// 子：button.vue

props: {
    type: {
        // 通过这种形式给 type 定类型
    }
}
```
* 在 html 中：通过 :class 及字符串模板 定义 class。对应 type 属性添加不同的 css

#### 添加 is-plain(按钮是否为镂空) 属性
和 type 属性一样，通过父子传值和 :class 控制样式

.....其实封装组件就是在最初封装一个最简单的组件，然后在上面一点一点的加上各种属性、事件....,封装组件用的最多的就是父子传值 如 $emit 了