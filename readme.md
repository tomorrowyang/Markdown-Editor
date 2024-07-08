# Markdown Editor

Markdown Editor 是一个基于 React 和 Node.js 的在线 Markdown 编辑器。它支持实时预览、文件管理和用户认证，并且适合用于个人或团队的协作和编辑需求。

## 功能特性

- 实时 Markdown 预览
- 文件管理：创建、编辑和删除 Markdown 文件
- 用户认证系统：注册、登录和登出功能

## 技术栈

### 前端

- **React**：用于构建用户界面和实现组件化开发。
- **React Router**：处理前端路由和页面导航。
- **MobX**：用于状态管理，使得某些变量可观察。
- **Axios**：用于与后端 API 进行数据交互。
- **Material-UI**：提供界面组件和样式。
- **Webpack**：打包和构建工具。

### 后端

- **Node.js**：作为后端服务器运行环境。
- **Express**：提供基于 Node.js 的 Web 应用程序框架。
- **MySQL**：关系型数据库，用于存储用户信息和 Markdown 文件数据。
- **Sequelize**：Node.js 的 ORM（对象关系映射），用于数据库操作。

## 目录结构

```
markdown-editor/
│
├── client/             # 前端代码
│   ├── public/         # 静态资源
│   ├── src/            # React 应用源代码
│   ├── package.json    # 前端依赖配置
│   └── README.md       # 前端 README
│
├── server/             # 后端代码
│   ├── config/         # 配置文件
│   ├── controllers/    # 控制器（处理业务逻辑）
│   ├── models/         # 数据库模型
│   ├── routes/         # 路由定义
│   ├── services/       # 服务层
│   ├── app.js          # Express 应用入口
│   ├── package.json    # 后端依赖配置
│   └── README.md       # 后端 README
│
├── README.md           # 项目总体 README
└── package.json        # 整体项目依赖配置
```

## 前端启动

1. **安装依赖**：进入 `client/` 目录，运行以下命令安装依赖：

   ```
   cd client/
   npm install
   ```

2. **启动开发服务器**：安装完成后，运行以下命令启动开发服务器：

   ```
   npm start
   ```

   在浏览器中打开 [http://localhost:3000](http://localhost:3000) 可以访问应用。

## 后端启动

1. **配置数据库**：在 `server/config/` 目录下配置 MySQL 数据库连接信息。

2. **安装依赖**：进入 `server/` 目录，运行以下命令安装依赖：

   ```
   cd server/
   npm install
   ```

3. **运行服务器**：安装完成后，运行以下命令启动后端服务器：

   ```
   npm start
   ```

   默认情况下，后端服务器运行在 [http://localhost:5000](http://localhost:5000)。

## 用户认证

- **注册**：访问应用首页，点击注册按钮，输入必要信息完成注册。
- **登录**：注册成功后，使用注册的用户名和密码登录。
- **登出**：在应用中可以手动登出，或者在一段时间后自动退出登录。

## 注意事项

- 本项目中使用的数据库默认为 MySQL，请根据实际情况配置数据库连接信息。
- 若要部署到生产环境，请配置合适的安全措施和性能优化。
- 若要进行修改和扩展，请参考各个部分的详细 README。

## 贡献者

- 如果您对该项目有任何建议或贡献，请联系我们或提交 pull request。
