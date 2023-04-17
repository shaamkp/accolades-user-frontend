import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../../context/Store'
import AppRouter from './AppRouter'
import AuthRouter from "./AuthRouter"
import AppRoute from '../router/AppRoute'
import AuthRoute from '../router/AuthRoute'


const MainRouter = () => {
        const {dispatch}=useContext(Context)
        useEffect(() => {
          let userData = localStorage.getItem('userData');
          userData = JSON.parse(userData);
          dispatch({
              type: "UPDATE_USER_DATA",
              payload: userData
          })
        },[])
  return (
      <Routes>
          <Route
              path="/*"
              element={
                  <AppRoute>
                      <AppRouter/>
                  </AppRoute>
              }
          />
          <Route
              path="/auth/*"
              element={
                  <AuthRoute>
                      <AuthRouter />
                  </AuthRoute>
              }
          />
      </Routes>
  );
}

export default MainRouter