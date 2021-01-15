import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  IndexRoute,
  Link,
} from 'react-router-dom'
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { Routes } from '@/config/route'
import { hot } from 'react-hot-loader'
import 'antd/dist/antd.css?raw'
import './App.css';

const App = () => (
  <div>
    <ConfigProvider locale={zhCN}>
      <Router>
        <Switch>
          {Routes.map((item) => (
            <Route path={item.path} exact={item.exact} key={item.path}>
              <item.component />
            </Route>
          ))}
        </Switch>
      </Router>
    </ConfigProvider>
  </div>
)

declare let module: Record<string, unknown>

export default hot(module)(App)
