import React from 'react'
import { Form, Input, Button, message } from 'antd';
import blogService from '@/service/blog.service';
import { useHistory } from "react-router-dom";

const { Item } = Form;
const { TextArea } = Input;
export const CreateBlog: React.FC<{}> = () => {
    let history = useHistory();
    const onFinish = (values: any) => {
        blogService.createBlog(values).then(() => {
            message.success('发布成功');
            history.push('/');
        })
      };
    return (
        <div>
            <Form name="createBlog" onFinish={onFinish}>
                <Item label="标题" name="title">
                    <Input placeholder="请输入标题" />
                </Item>
                <Item label="博客内容" name="content">
                    <TextArea autoSize />
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit">发布</Button>
                </Item>
            </Form>
        </div>
    )
}