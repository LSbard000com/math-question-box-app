import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TopPage from './components/TopPage';
import MyPage from './components/MyPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';
import ContextProvider from './components/ContextProvider';


function App() {
  const routes = createBrowserRouter([
    {
       path: '/', 
      element: <TopPage />
    },
    { 
      path: '/mypage/:uid',
       element: <MyPage />
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
      element: <CreatePost />
    }
  ])

  return (
  <ContextProvider>
    <RouterProvider router={routes} />
  </ContextProvider>
  )
}

export default App;
