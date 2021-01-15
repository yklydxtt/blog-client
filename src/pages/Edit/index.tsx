import React, { useEffect } from 'react'
import { Form, Input, Button, message } from 'antd';
import blogService from '@/service/blog.service';
import { useHistory, useParams } from "react-router-dom";

const { Item } = Form;
const { TextArea } = Input;
export const Edit: React.FC<{}> = () => {
    const history = useHistory();
    const [form] = Form.useForm();
    const { id } = useParams();
    const onFinish = (values: any) => {
        blogService.updateBlog(id, values).then(() => {
            message.success('修改成功');
            history.push('/');
        })
    };
    useEffect(() => {
        blogService.getDetail(id).then(data => {
            if (data.length) {
                form.setFieldsValue({ title: data[0].title, content: data[0].content });
            }
        })
    }, []);
    return (
        <div>
            <h1>修改博客</h1>
            <Form name="editBlog" form={form} onFinish={onFinish}>
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