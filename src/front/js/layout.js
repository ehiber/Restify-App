import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//IMPORT PAGES

//control-panel
import { BrandingCP } from "./pages/controlpanel/cp_branding.jsx";
import { HomeCP } from "./pages/controlpanel/cp_home.jsx";
import { MenuCP } from "./pages/controlpanel/cp_menu.jsx";

//landing-page
import { CreateRestaurantLP } from "./pages/landing/landing_createRestaurant.jsx";
import { HomeLP } from "./pages/landing/landing_home.jsx";
import { RestManagerLP } from "./pages/landing/landing_restManager.jsx";

//template
import { ContactTEMP } from "./pages/template/template_contact";
import { HomeTEMP } from "./pages/template/template_home";
import { MenuTEMP } from "./pages/template/template_menu";

import injectContext from "./store/appContext";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  //const basename = process.env.BASENAME || "";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLP />} path="/" />
          <Route element={<RestManagerLP />} path="/rest-manager" />
          <Route element={<CreateRestaurantLP />} path="/createrestaurant" />
          <Route element={<ContactTEMP />} path="/:web-name/contact" />
          <Route element={<HomeTEMP />} path="/:web-name/home" />
          <Route element={<MenuTEMP />} path="/:web-name/menu" />
          <Route element={<BrandingCP />} path="/controlpanel/branding/:webName" />
          <Route element={<HomeCP />} path="/controlpanel/home/:webName" />
          <Route element={<MenuCP />} path="/controlpanel/menu/:webName" />
          <Route element={<h1>Not found!</h1>} />

          {/* Testing */}
          <Route element={<MenuTEMP />} path="/test-menu" />
          <Route element={<HomeTEMP />} path="/test-home" />
          <Route element={<ContactTEMP />} path="/test-contact" />
        </Routes>
      </BrowserRouter>
    </>
  );

};

export default injectContext(Layout);
