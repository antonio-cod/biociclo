import { Routes, Route } from 'react-router-dom'

 import { SignIn } from '../pages/SingIn'

import { NotFound } from '../pages/NotFound';



export function CustomerRoutes() {
  return (
    <Routes>
       <Route path="/" element={<SignIn />} /> 
      
      
      <Route path="*" exact={true} element={<NotFound />} />

    </Routes>
  );
}