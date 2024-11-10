import { useDispatch } from "react-redux";
import Layout from "./components/Layout/Layout";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
