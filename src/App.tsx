import React, {useEffect} from 'react'
import '@/style/App.scss'
import {RouterProvider} from 'react-router-dom'
import router from './router'
import {Button} from '@arco-design/web-react'
import '@arco-design/web-react/dist/css/arco.css'

import {useSelector, useDispatch} from 'react-redux'
import {setStudentsAndTotal} from '@/store/action/student'

function App() {
  const data = useSelector((state) => {
    return state
  })
  const dispatch = useDispatch()

  console.log(data)

  useEffect(() => {
    dispatch(setStudentsAndTotal([1, 2, 3], 3))
    console.log('setStudentsAndTotal', data)
  }, [])

  return (
    <div>
      <RouterProvider router={router} />
      <Button type="primary">Hello Arco</Button>
    </div>
  )
}

export default App
