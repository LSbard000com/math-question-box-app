import './App.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import TopPage from './components/top/TopPage';
import MyPage from './components/mypage/MyPage';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp';
import CreatePost from './components/post/CreatePost';
import ContextProvider, { useAuth } from './components/ContextProvider';
import { ProtectedRouteProps } from './interface/Interface';
import ErrorPage from './components/ErrorPage';
import ViewPost from './components/view/ViewPost';
import Search from './components/search/Search';


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
      path: '/view/:uid',
      element: <ViewPost />
    },
    {
      path: '/search',
      element: <Search />
    },
    {
      path: '/error',
      element: <ErrorPage />
    }
  ])

  return (
  <ContextProvider>
    <div className='background'></div>
    <div className='route'>
      <RouterProvider router={routes} />
    </div>
  </ContextProvider>
  )
}

export default App;
