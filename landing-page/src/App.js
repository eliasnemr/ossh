import { Routes, Route } from "react-router";
import Homepage from './pages/Homepage'
import DoctorHomepage from './pages/DoctorHomepage'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />}> </Route>
      <Route path='/signup' element={<p> Signup Page -pending- </p>}> </Route>
      <Route path='/login' element={<p> Login Page -pending- </p>}> </Route>
      <Route path='/doctor' element={<DoctorHomepage />}> </Route>
    </Routes>
  )
}
