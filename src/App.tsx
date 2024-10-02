import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import TopPage from './components/TopPage';
import MyPage from './components/MyPage';
import Login from './components/Login';
import SignUp from './components/SignUp';


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
    }
  ])

  return (
  <div>
    <RouterProvider router={routes} />
  </div>
  )
}

export default App;
