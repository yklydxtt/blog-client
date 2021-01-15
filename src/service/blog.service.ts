import ServiceBase from './serviceBase'

class BlogService extends ServiceBase {
    getBlogList() {
        return this.get('/api/blog/list', {})
    }

    login(params = {}) {
        return this.post('/api/user/login', params)
    }
    getDetail(id) {
        return this.get('/api/blog/detail', { id });
    }
    createBlog(params) {
        return this.post('/api/blog/new', params);
    }
    updateBlog(id, params) {
        return this.post(`/api/blog/update?id=${id}`, params);
    }
    deleteBlog(id) {
        return this.post(`/api/blog/delete?id=${id}`, {});
    }
}
const blogService = new BlogService()
export default blogService
