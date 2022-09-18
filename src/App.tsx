import React from 'react'
import '@/style/App.scss'
import {RouterProvider} from 'react-router-dom'
import router from './router'
import {Button} from '@arco-design/web-react'
import '@arco-design/web-react/dist/css/arco.css'

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Button type="primary">Hello Arco</Button>
    </div>
  )
}

export default App
