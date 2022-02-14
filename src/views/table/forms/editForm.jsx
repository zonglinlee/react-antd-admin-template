import React, { Component } from "react";
import { Form, Input, DatePicker, Select, Rate, Modal } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
class EditForm extends Component {
  render() {
    const {
      visible,
      onCancel,
      onOk,
      form,
      confirmLoading,
      currentRowData,
    } = this.props; // 父组件使用的是经过 Form.create 包装的组件，该组件将会自带 this.props.form 属性
    // https://3x.ant.design/components/form-cn/#this.props.form.getFieldDecorator(id,-options)
    // https://github.com/react-component/form#getfielddecoratornamestring-option-object--reactnode--reactnode
    // 经过 getFieldDecorator 包装的控件，表单控件会自动添加 value（或 valuePropName 指定的其他属性）
    // onChange（或 trigger 指定的其他属性），数据同步将被 Form 接管
    // 函数签名（参数是name,option,返回的是一个函数，该函数接受一个React.Node）,这是一个高阶函数
    // getFieldDecorator(name:String, option: Object) => (React.Node) => React.Node
    const { getFieldDecorator } = form;
    const { id, author, date, readings, star, status, title } = currentRowData;
    const formItemLayout = {
      labelCol: {
        sm: { span: 4 },
      },
      wrapperCol: {
        sm: { span: 16 },
      },
    };
    return (
      <Modal
        title="编辑"
        visible={visible}
        onCancel={onCancel}
        onOk={onOk}
        confirmLoading={confirmLoading}
      >
        <Form {...formItemLayout}>
          <Form.Item label="序号:">
            {getFieldDecorator("id", {
              initialValue: id,
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="标题:">
            {getFieldDecorator("title", {
              rules: [{ required: true, message: "请输入标题!" }],
              initialValue: title,
            })(<Input placeholder="标题" />)}
          </Form.Item>
          <Form.Item label="作者:">
            {getFieldDecorator("author", {
              initialValue: author,
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="阅读量:">
            {getFieldDecorator("readings", {
              initialValue: readings,
            })(<Input disabled />)}
          </Form.Item>
          <Form.Item label="推荐指数:">
            {getFieldDecorator("star", {
              initialValue: star.length,
            })(<Rate count={3} />)}
          </Form.Item>
          <Form.Item label="状态:">
            {getFieldDecorator("status", {
              initialValue: status,
            })(
              <Select style={{ width: 120 }}>
                <Select.Option value="published">published</Select.Option>
                <Select.Option value="draft">draft</Select.Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="时间:">
            {getFieldDecorator("date", {
              rules: [{ type: 'object', required: true, message: '请选择时间!' }],
              initialValue: moment(date || "YYYY-MM-DD HH:mm:ss"),
            })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

// export 一个经过 Form.create 包装的组件，该组件将会自带 this.props.form 属性，Form.create也是一个高阶函数
// https://3x.ant.design/components/form-cn/#Form.create(options)
export default Form.create({ name: "EditForm" })(EditForm);
