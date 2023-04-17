import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../screens/Login';
import Registration from '../../screens/Registration';

export default function AuthRouter() {
  return (
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
      </Routes>
  );
}
