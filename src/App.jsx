import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Service from "./pages/service/Service";
import RootLayout from "./layouts/RootLayout";
import Error from "./pages/error/Error";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={ <RootLayout/> }>
        <Route path="/" element={ <Home/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/service" element={ <Service/> }/>
        <Route path="/blog" element={ <Blog/> }/>
        <Route path="/contact" element={ <Contact/>}/> 
      </Route>
        <Route path="*" element={ <Error/> }/>
      </>
    )
  );

  return (
    <>
      <RouterProvider
        router={router}
      />
    </>
  )
}

export default App
