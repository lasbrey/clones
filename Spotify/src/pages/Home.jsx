import React from "react";
import requests from "../endpoints/requests";
import Rows from "../pages/rows/rows"

function Home() {
  return (
    <div className="text-2xl text-white p-4">
      <div>
       
        <Rows title="For the heartbroken💔" fetchUrl={requests.fetchWorld} />
      </div>
    </div>
  );
}

export default Home;
