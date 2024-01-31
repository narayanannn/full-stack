import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SignUp from "./pages/Signup"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { Suspense } from "react"
import Spinner from "./components/Spinner"
import About from "./pages/About"
import Event from "./pages/event"
import Dashboard from "./pages/dashboard"
function App() {
 
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Suspense fallback={<Spinner/>}><SignUp/></Suspense>
    },
    {
      path:'/Login',
      element:<Suspense fallback={<Spinner/>}><Login/></Suspense>
    },
    {
      path:'/home',
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path:'/About',
      element:<Suspense fallback={<Spinner/>}><About/></Suspense>
    },
    {
      path:'/Event',
      element:<Suspense fallback={<Spinner/>}><Event></Event></Suspense>
    },
    {
      path:'/Dash',
      element:<Suspense fallback={<Spinner/>}><Dashboard/></Suspense>
    }
   
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}


export default App;
