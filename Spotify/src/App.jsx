import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemedSuspense from "./components/ThemedSuspense";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import routes from "./routes/index";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Page404 from "./pages/404";
import "./style.css";

function App() {
  const routeComponents = routes.map((route, index) => (
    <Route exact path={route.path} element={<route.component />} key={index} />
  ));
  return (
    <BrowserRouter>
      <AccessibleNavigationAnnouncer />
        <div className="Root__top-container">
          <Sidebar />
          <div className="Root__main-view">
            <Suspense fallback={<ThemedSuspense />}>
              <Routes>
                {routeComponents}
                <Route path="*" element={<Page404 />} />
              </Routes>
            </Suspense>
          </div>
          <div className="Root__now-playing-bar">
            <Footer />
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
