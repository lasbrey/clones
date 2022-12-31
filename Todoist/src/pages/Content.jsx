import React, { useState, useEffect } from "react";
import {
  CircleOutlined,
  AddOutlined,
  BorderColorOutlined,
  SmsOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import Previous from "./components/previous.jsx";
import { db } from "../config/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Content() {
  const current = new Date();
  const month = current.toLocaleString("default", { month: "short" });
  const day = current.toLocaleString("default", { weekday: "long" });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(collection(db, "tasks"));
      setTasks(data.docs.map((doc) => ({ ...doc.data(), id: doc.od })));
    };
    getTasks();
  }, []);

  return (
    <div className="flex flex-1 flex-col mx-auto mt-10 w-full max-w-3xl ">
      <Previous />

      <div className=" mt-10 ">
        <div className="flex border-b border-gray-500 mb-2 pb-2">
          <h1 className="text-white text-md">
            {" "}
            {month} {current.getDate()}‧ Today ‧ {day}
          </h1>
        </div>
        {tasks.map((tasks, i) => {
          return (
            <div className="flex" key={i}>
              <div className="flex items-center h-5">
                <CircleOutlined
                  className="text-gray-400"
                  sx={{ fontSize: 18 }}
                />
              </div>
              <div className="ml-2 text-sm w-full">
                <div className="flex justify-between w-full">
                  <div className="font-medium text-gray-900 dark:text-gray-300">
                    {tasks.title}
                  </div>
                  <div className="flex gap-3" id="options">
                    <BorderColorOutlined
                      className="cursor-pointer text-gray-400 hover:bg-[#353535] p-1"
                      sx={{ fontSize: 20 }}
                    />
                    <SmsOutlined
                      className="cursor-pointer text-gray-400 hover:bg-[#353535] p-1"
                      sx={{ fontSize: 20 }}
                    />
                    <MoreHorizOutlined
                      className="cursor-pointer text-gray-400 hover:bg-[#353535] p-1"
                      sx={{ fontSize: 20 }}
                    />
                  </div>
                </div>

                <div className="flex justify-between w-full py-2">
                  <p
                    id="helper-radio-text"
                    className="text-xs font-normal text-gray-500"
                  >
                    {tasks.description}
                  </p>
                  <p className="text-gray-400 text-[12px]">
                    <span className="pr-1">{tasks.label}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 border-t border-gray-500">
        <p className="text-red-500 pt-2 cursor-pointer">
          <AddOutlined sx={{ fontSize: 15 }} />
          <span className="pl-1 text-gray-500 text-[14px]">Add Task</span>
        </p>
      </div>
    </div>
  );
}

export default Content;
