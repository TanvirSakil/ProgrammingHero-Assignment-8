import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import ErrorPage from '../ErrorPage/ErrorPage';
import DefaultHomeApp from '../components/DefaultHomeApp/DefaultHomeApp';
import AllApps from '../components/AllApps/AllApps';
import InstallationApp from '../components/InstallationApp/InstallationApp';
import AppDetails from '../components/AppDetails/AppDetails';
import AppNotFound from '../components/AppNotFound/AppNotFound';


export const router = createBrowserRouter([

  {

    path: "/",

    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,

    children: [

      {
        index: true,
        loader: () => fetch('/defaultApp.json'),
        path: "/",
        Component: DefaultHomeApp,

      },

      {

        loader: () => fetch('/AllApps.json'),
        path: "/apps",
        Component: AllApps,
      },

      {

        path: "/apps",
        Component: AllApps,

      },

      {

        path: "/installation",
        Component: InstallationApp,
      },


      {
        path: "/apps/:id",
        loader: ({ params }) => fetch(`/AllApps.json`)
          .then(res => res.json())
          .then(data => data.find(app => app.id === parseInt(params.id))),
        Component: AppDetails,
        errorElement: <AppNotFound></AppNotFound>,
      },


    ]
  },








]);