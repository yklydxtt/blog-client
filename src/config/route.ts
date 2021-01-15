import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { Detail } from '@/pages/Detail';
import { CreateBlog } from '@/pages/CreateBlog';
import { Edit } from '@/pages/Edit';

export const Routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        name: '首页',
    },
    {
        path: '/detail/:id',
        name: '博客详情',
        component: Detail
    },
    {
        path: '/detail',
        name: '博客详情',
        // exact: true,
        component: Detail
    },
    {
        path: '/login',
        component: Login,
        name: '登录',
    },
    {
        path: '/create',
        component: CreateBlog,
        name: '创建博客',
    },
    {
        path: '/edit/:id',
        component: Edit,
        name: '更新博客',
    },
]
