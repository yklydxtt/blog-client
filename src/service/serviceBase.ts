import { message } from 'antd'
import axios from 'axios'

class ServiceBase {
    get(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    params,
                })
                .then(({ data }) => {
                    if (data.success) {
                        resolve(data.data)
                    } else if (data.message === 'not login') {
                        message.error('尚未登录')
                        reject(data.message)
                    } else {
                        message.error('系统异常')
                        reject()
                    }
                })
        })
    }

    post(url, params) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, params)
                .then(({ data }) => {
                    if (data.success) {
                        resolve(data.data)
                    } else if (data.message === 'not login') {
                        message.error('尚未登录')
                        reject(data.message)
                    } else {
                        message.error(data.message || '系统异常');
                        reject()
                    }
                })
        })
    }
}
export default ServiceBase
