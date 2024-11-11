import { useDispatch } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from "./redux/auth/operations";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import Layout from "./components/Layout/Layout";

const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />} />} />
          <Route path='/login' element={<RestrictedRoute component={<LoginPage />} />} />
          <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;

