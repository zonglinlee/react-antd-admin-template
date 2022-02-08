
<p align="center">
   <a href="https://nlrx-wjc.github.io/react-antd-admin-template/" target="_blank">
      <img src="./logo.png"/>
   </a>
</p>

# 简介

[react-antd-admin-template](https://nlrx-wjc.github.io/react-antd-admin-template/) 是一个基于 `React` 和 `Ant Design` 的后台管理系统模板。它内置了用户登录/登出，动态路由，权限校验，用户管理等典型的业务模型，可以帮助你快速搭建企业级中后台产品原型，是你接私活的不二之选。

本系统的开发灵感来自 [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/) ，这是一个基于 `Vue` 和 `ElementUI` 的优秀的后台管理系统模板，在这里向大佬致敬！

其实我的主技术栈一直是 `Vue`，只是最近入坑了 `React` ，看了大半个月文档，就想牛刀小试一下，哈哈。不是有那句话么：检验学习成果最好的方式就是造轮子。所以就造了这么个轮子，哈哈。对于 `React` ，我还是个小白，项目中肯定有做的不够好的地方，欢迎各位同好提 `pr` 或 `issue` 。

- [在线预览](https://nlrx-wjc.github.io/react-antd-admin-template/)
- [Gitee在线预览(国内用户可访问该地址)](https://nlrx.gitee.io/react-antd-admin-template/)
- [开发文档](https://nlrx-wjc.github.io/react-antd-admin-template-doc/) 目前还在持续编写完善中...

# 功能

```bash
- 登录 / 注销

- 权限验证
  - 页面权限
  - 路由权限

- 全局功能
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown

- Excel
  - 导出excel
  - 导入excel
  - 前端可视化excel

- Zip
  - 导出zip

- 错误页面
  - 404

- 组件
  - 拖拽列表

- 表格
- Dashboard
- 引导页
- ECharts 图表
- 剪贴板
```

# 目录结构

```bash
├─ public                     # 静态资源
│   ├─ favicon.ico            # favicon图标
│   └─ index.html             # html模板
├─ src                        # 项目源代码
│   ├─ api                    # 所有请求
│   ├─ assets                 # 图片 字体等静态资源
│   ├─ components             # 全局公用组件
│   ├─ config                 # 全局配置
│   │   ├─ menuConfig.js      # 导航菜单配置
│   │   └─ routeMap.js        # 路由配置
│   ├─ lib                    # 第三方库按需加载
│   ├─ mock                   # 项目mock 模拟数据
│   ├─ store                  # 全局 store管理
│   ├─ styles                 # 全局样式
│   ├─ utils                  # 全局公用方法
│   ├─ views                  # views 所有页面
│   ├─ App.js                 # 入口页面
│   ├─ defaultSettings.js     # 全局默认配置
│   └─index.js                # 源码入口
├── .env.development          # 开发环境变量配置
├── .env.production           # 生产环境变量配置
├── config-overrides.js       # 对cra的webpack自定义配置
├── deploy.sh                 # CI部署脚本
├── .travis.yml               # 自动化CI配置
└── package.json              # package.json
```

# 安装

```shell
# 克隆项目
git clone https://github.com/NLRX-WJC/react-antd-admin-template.git

# 进入项目目录
cd react-antd-admin-template

# 安装依赖
npm install

# 切换淘宝源，解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm start
```
# react 学习资料参考
- [写给vue转react的同志们-1](https://juejin.cn/post/6956471966526079012)
- [写给vue转react的同志们-2](https://juejin.cn/post/6972099403213438984)
- [写给vue转react的同志们-3](https://juejin.cn/post/6979061382415122462)
- [写给vue转react的同志们-4](https://juejin.cn/post/6991765115150270478)
- [写给vue转react的同志们-5](https://juejin.cn/post/7020215941422137381)
```text
高阶组件是参数为组件，返回值为新组件的函数。组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。
无论 Vue 还是 React 亦或是 HOC 或 Mixins 他们都是为了解决组件逻辑复用应运而生的
```
- [写给vue转react的同志们-6](https://juejin.cn/post/7043672605303242788)
- [React、Vue我全都要！React Hook 实现 Vue 的11个基本功能](https://juejin.cn/post/7037130413155811341)
