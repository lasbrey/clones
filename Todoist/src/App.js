import React from "react";
import "./App.css";
import TopNav from './components/TopNav'
import SideNav from './components/Nav'
import Content from './pages/Content.jsx'

function App() {
  return (
    <div className="h-full w-full text-white">
      <TopNav/>
      <div className="h-screen flex bg-[#202020]">
         <SideNav />
         <Content />
      </div>
    </div>
  );
}

export default App;
