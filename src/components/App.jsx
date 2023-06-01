import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy } from 'react';
import { Navigation } from './navigation/Navigation';
import { getUser } from 'redux/Auth/AuthOperations';
import { useEffect } from 'react';
import { PublicRoute, PrivateRoute } from 'components/Routes';
import { useSelectors } from 'components/hooks/UseSelector';
import { LineWave } from 'react-loader-spinner';

const Contacts = lazy(() => import('../pages/Contacts'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home/Home'));

const App = () => {
  const dispatch = useDispatch();
  const { isFetchingCurrentUser } = useSelectors();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser ? (
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      ) : (
        <LineWave
          height="200"
          width="200"
          color="#FBCA1F"
          ariaLabel="line-wave"
          wrapperStyle={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </>
  );
};

export default App;
