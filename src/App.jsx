import { useState } from 'react'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import AppLayout from "./components/layout/AppLayout";
import DashBoard from './pages/dashboard'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path='*' element={<Navigate to="/login" replace />} />

          <Route path="/dashboard" element={
            <ProtectedRoute>
              <AppLayout>
                <DashBoard />
              </AppLayout>
            </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
