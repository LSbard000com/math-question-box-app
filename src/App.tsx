import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import TopPage from './components/TopPage';
import MyPage from './components/MyPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';
import ContextProvider, { useAuth } from './components/ContextProvider';
import { ProtectedRouteProps } from './interface/Interface';
import ErrorPage from './components/ErrorPage';


function App() {

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({element}) => {
    const currentUser = useAuth()
    console.log('Current User:', currentUser); 
    return currentUser ? <>{element}</> : <Navigate to='/login' />
  }

  const routes = createBrowserRouter([
    {
      path: '/', 
      element: <TopPage />
    },
    { 
      path: '/mypage/:uid',
      element: <ProtectedRoute element={<MyPage />} />
    },
    { 
      path: '/login', 
      element: <Login />,
    },
    { 
      path: '/signup', 
      element: <SignUp />,
    },
    {
      path: '/post',
      element: <ProtectedRoute element={<CreatePost />} />
    },
    {
      path: '/error',
      element: <ErrorPage />
    }
  ])

  return (
  <ContextProvider>
    <RouterProvider router={routes} />
  </ContextProvider>
  )
}

export default App;
