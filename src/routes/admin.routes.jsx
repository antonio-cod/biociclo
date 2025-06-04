import { Routes, Route } from 'react-router-dom'

 import { SignUp } from '../pages/SignUp'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { UsersReport } from '../pages/Report/UsersReport'
import { PackaginCollectionReport } from '../pages/Report/ColletionsReport'
import { Producer } from '../pages/Producer'


export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      
      <Route path="/register" element={<SignUp />} />
      <Route path="/producer" element={<Producer />} />

      <Route path="/reportUsers" element={<UsersReport />} /> 
      <Route path="/reportCollections" element={<PackaginCollectionReport />} /> 
      
          

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  )
}