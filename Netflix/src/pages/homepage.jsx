import React from "react";
import Banner from './banner/banner'
import Rows from "./rows/rows";
import requests from "../utils/requests"

function App() {
  return (
    <div className="bg-black">
      <Banner />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Rows title="Top Rated" fetchUrl={requests.fetchToprated} />
      <Rows title="Action " fetchUrl={requests.fetchActionMovies} />
      <Rows title="Commedy " fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Romance " fetchUrl={requests.fetchRomanceMovies} />
      <Rows title="Horror " fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
