import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import blogService from '@/service/blog.service';

export const Detail: React.FC<{}> = () => {
    const { id } = useParams();
    const [detail,setDetail]=useState({});
    useEffect(() => {
        blogService.getDetail(id).then(data => {
            if(data.length){
                setDetail(data[0]);
            }
        })
    }, []);
    return (
        <div>
            <h1>{detail.title}</h1>
            <p>作者:{detail.author}</p>
            <p>{detail.content}</p>
            <p>创建于：{new Date(detail.createtime).toLocaleDateString()}</p>
        </div>
    )
}