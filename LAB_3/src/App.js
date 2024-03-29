import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Tasks from "./Components/Tasks/Tasks";
import Products from "./Components/Products/Products";
import Notfound from "./Components/Notfound/Notfound";
import StandardErrorBoundry from "./Components/LCM/StandardErrorBoundry";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Addproduct from './Components/Addproduct/Addproduct';
let routers = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <Notfound />,
    children: [
      { index: true, element: <Tasks /> },
      { path: "tasks", element: <Tasks /> },
      { path: "products", element: <Products /> },
      { path: "addproduct", element: <Addproduct /> }
    ],
  },
]);
function App() {
  return (
    <>
      <StandardErrorBoundry>
        <RouterProvider router={routers}></RouterProvider>
      </StandardErrorBoundry>
    </>
  );
}

export default App;
