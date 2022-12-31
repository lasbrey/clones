import React, { useEffect, useState } from "react";
import axios, { options } from "../../endpoints/axios";
import "./style.css";

function Rows({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl, options);
      setMovies(request.data);
      console.log(request.images?.coverart);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div>
      <h1 className="font-semibold">{title}</h1>
      <div class="flex gap-2 overflow-y-auto">
        {/* {movies.map((movie) => ( */}
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-[#1b1b1b] max-w-[12rem] p-2 w-full">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-1 text-sm">
              <h5 class=" text-white font-bold">movie.title</h5>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        {/* ))} */}
      </div>
      
    </div>
  );
}

export default Rows;
