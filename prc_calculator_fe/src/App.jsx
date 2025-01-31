import './App.css'

import {Route, BrowserRouter as Router, Routes} from "react-router-dom"

import PrivateRoute from './components/common/PrivateRoute/PrivateRoute'
import Home from './components/pages/Home/Home'
import Maths from './components/pages/Maths/Maths'
import SignUp from './components/pages/SignUp/SignUp'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/maths' element={<PrivateRoute element={<Maths/>}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
