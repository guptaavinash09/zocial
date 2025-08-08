import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Layout from "./pages/Layout.jsx"
import Feed from './pages/Feed.jsx'
import Connections from './pages/Connections.jsx'
import Message from './pages/Message.jsx'
import Discover from './pages/Discover.jsx'
import Profile from './pages/Profile.jsx'
import Post from './pages/Post.jsx'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Feed/>}/>
          <Route path='messages' element={<Message/>}/>
          <Route path='connections' element={<Connections/>}/>
          <Route path='discover' element={<Discover/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='create-post' element={<Post/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
