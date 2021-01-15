import React, { useEffect, useState } from 'react'
import { Button, List, Space, Modal, Input, Form, message } from 'antd';
import { Link } from 'react-router-dom';
import blogService from '@/service/blog.service'
import styles from './style.css'

const { Password } = Input;
const { Item } = Form;
export const Home: React.FC<{}> = () => {
  const [list, setList] = useState([])
  const [loginStatus, setLoginStatus] = useState(false)
  const [visible, setVisible] = useState(false)
  const [form] = Form.useForm();
  const getList = () => {
    blogService.getBlogList().then((data) => {
      setList(data);
      setLoginStatus(true);
    });
  }
  useEffect(() => {
    getList();
  }, [])
  const handleLogin = () => {
    const formValue = form.getFieldsValue(['username', 'password']);
    blogService.login(formValue).then(() => {
      message.success(`hi! ${formValue.username}`);
      setVisible(false);
      getList();
    })
  }
  const handleShowModal = () => {
    setVisible(!visible)
  }
  const handeDelete = (id) => {
    blogService.deleteBlog(id).then(() => {
      message.success('删除成功');
      getList();
    })
  }

  return (
    <div>
      <Space>
        <h1 className={styles.headers}>博客首页</h1>
        {loginStatus ? null : <Button type="primary" onClick={handleShowModal}>登录</Button>}
        <Button>
          <Link to="create">创建博客</Link>
        </Button>
      </Space>
      <List
        header={<div>博客列表</div>}
        dataSource={list}
        renderItem={item =>
          <List.Item
            actions={[<Button type="link"><Link to={`/edit/${item.id}`}>编辑</Link></Button>, <Button type="link" onClick={()=>{handeDelete(item.id)}}>删除</Button>]}
          >
            <List.Item.Meta
              title={<Link to={`/detail/${item.id}`} >{item.title}</Link>}
              description={item.content}
            />
          </List.Item>}
      />
      <Modal title="登录" visible={visible} onOk={handleLogin} onCancel={handleShowModal}>
        <Space direction="vertical">
          <Form name="login" form={form}>
            <Item rules={[{ required: true }]} name="username">
              <Input placeholder="请输入用户名" />
            </Item>
            <Item rules={[{ required: true }]} name="password">
              <Password placeholder="请输入密码" />
            </Item>
          </Form>
        </Space>
      </Modal>
    </div>
  )
}
