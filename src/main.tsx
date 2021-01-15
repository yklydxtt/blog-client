import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

// 判断该浏览器支不支持 serviceWorker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('service-worker registed')
            })
            .catch((error) => {
                console.log('service-worker registed error')
            })
    })
}
declare let module: Record<string, unknown>

ReactDOM.render(<App />, document.getElementById('root'))
