import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button, message, Spin } from "antd";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
// 引入当前组件样式
import "./index.less";
import { login, getUserInfo } from "@/store/actions";

const Login = (props) => {
  const { form, token, login, getUserInfo } = props;
  const { getFieldDecorator } = form;
  // 基础 Hook：useState 返回一个 state，以及更新 state 的函数 ： https://zh-hans.reactjs.org/docs/hooks-reference.html#basic-hooks
  // [thing, setThing] = useState() , “array destructuring”. It means that we’re making two new variables fruit and setFruit,
  // where fruit is set to the first value returned by useState, and setFruit is the second. It is equivalent to this code
  // 这个类似于Vue3的响应式api  reactive ref 参考： https://v3.cn.vuejs.org/api/reactivity-api.html
  const [loading, setLoading] = useState(false);

  const handleLogin = (username, password) => {
    // 登录完成后 发送请求 调用接口获取用户信息
    setLoading(true);
    login(username, password)
      .then((data) => {
        message.success("登录成功");
        handleUserInfo(data.token);
      })
      .catch((error) => {
        setLoading(false);
        message.error(error);
      });
  };

  // 获取用户信息
  const handleUserInfo = (token) => {
    getUserInfo(token)
      .then((data) => {})
      .catch((error) => {
        message.error(error);
      });
  };

  const handleSubmit = (event) => {
    // 阻止事件的默认行为
    event.preventDefault();

    // 对所有表单字段进行检验
    form.validateFields((err, values) => {
      // 检验成功
      if (!err) {
        const { username, password } = values;
        handleLogin(username, password);
      } else {
        console.log("检验失败!");
      }
    });
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <DocumentTitle title={"用户登录"}>
      <div className="login-container">
        <Form onSubmit={handleSubmit} className="content">
          <div className="title">
            <h2>用户登录</h2>
          </div>
          <Spin spinning={loading} tip="登录中...">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "请输入用户名",
                  },
                ],
                initialValue: "admin", // 初始值
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: "请输入密码",
                  },
                ],
                initialValue: "123456", // 初始值
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <span>账号 : admin 密码 : 随便填</span>
              <br />
              <span>账号 : editor 密码 : 随便填</span>
              <br />
              <span>账号 : guest 密码 : 随便填</span>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  );
};

const WrapLogin = Form.create()(Login);
// connect api : https://react-redux.js.org/tutorials/connect#connecting-the-components
// :给当前组件分发需要的 state 和 actions 等,这是一个高阶函数，接收一个 ReactComponent ,返回一个 ReactComponent
// React Redux provides a connect function for you to read values from the Redux store (and re-read the values when the store updates).
export default connect((state) => state.user, { login, getUserInfo })(
  WrapLogin
);
