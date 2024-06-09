// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
// import Home from "../pages/Home/Home";
// import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
// import AddCoffee from "../pages/AddCoffee/AddCoffee";
// import ViewCoffee from "../pages/ViewCoffee/ViewCoffee";
// import DetailsCoffee from "../pages/DetailsCoffee/DetailsCoffee";

// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/addCoffee",
//         element: <AddCoffee></AddCoffee>,
//       },

//       {
//         path: "/updateCoffee/:id",
//         element: <UpdateCoffee></UpdateCoffee>,
//         loader: ({ params }) => fetch(`https://coffee-shop-server-97lkvqlx7-iftekhar-mahmuds-projects.vercel.app/coffee/coffee/${params.id}`),
//       },
//       {
//         path: "/viewcoffee",
//         element: <ViewCoffee></ViewCoffee>,
//       },
//       {
//          path : "/detailsCoffee/:id",
//          element:<DetailsCoffee></DetailsCoffee>,
//          loader:  ({ params }) => fetch(`https://coffee-shop-server-97lkvqlx7-iftekhar-mahmuds-projects.vercel.app/coffee/coffee/${params.id}`),
//       }

//     ],
//   },
// ]);

// export default myCreatedRoute;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import UpdateCoffee from "../pages/UpdateCoffee/UpdateCoffee";
import AddCoffee from "../pages/AddCoffee/AddCoffee";
import ViewCoffee from "../pages/ViewCoffee/ViewCoffee";
import DetailsCoffee from "../pages/DetailsCoffee/DetailsCoffee";
import Login from "../componants/LogIn/Login";
import SignUp from "../componants/SignUp/SignUp";
import PrivateRoute from "./privateRoute";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,

        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-server-97lkvqlx7-iftekhar-mahmuds-projects.vercel.app/coffee/coffee/${params.id}`
          ),
      },
      {
        path: "/viewcoffee",
        element: <ViewCoffee />,
      },
      {
        path: "/detailsCoffee",
        element: <DetailsCoffee />,

        loader: () =>
          fetch(
            `https://coffee-shop-server-97lkvqlx7-iftekhar-mahmuds-projects.vercel.app/coffee/coffee`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default myCreatedRoute;
