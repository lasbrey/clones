import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import "./rows.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Rows({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  // const options = {
//   method: 'GET',
//   url: 'https://shazam-core.p.rapidapi.com/v1/charts/world',
//   headers: {
//     'X-RapidAPI-Key': 'bb293ec4admshec48447b6602da7p1f57efjsnc65e6a61b3c0',
//     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });

  return (
    <div className="p-2 max-w-[95%] mx-auto mt-8">
      <h2 className="font-medium text-xl pb-2 text-white">
        {title}
      </h2>
      <div className="flex overflow-y-hidden overflow-x-auto relative">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="w-full object-contain mr-2.5 rounded-md h-32"
            src={`${base_url}${movie?.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Rows;
