import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SingIn';


export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}