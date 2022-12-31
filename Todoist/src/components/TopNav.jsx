import React, { useState } from "react";
import {
  HelpOutlineOutlined,
  NotificationsNoneOutlined,
  AddOutlined,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
  LocalOfferOutlined,
  AccessAlarmsOutlined,
  OutlinedFlag,
  InboxOutlined,
  DomainVerificationOutlined,
} from "@mui/icons-material";
import { db } from "../config/firebase-config";
import { collection, addDoc } from "firebase/firestore";

function TopNav() {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [tasks, setTasks] = useState({ title: "", description: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "tasks"), tasks);
    setShowModal(false);
    setShowSuccess(true);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTasks({ ...tasks, [name]: value });
  };

  return (
    <div>
      <nav className="bg-[#282828] border-gray-200 shadow-md px-5">
        <div className="flex flex-wrap items-center justify-between">
          <div className="text-gray-400">
            <ul className="flex flex-row p-2 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-gray-400 ">
              <li>
                <MenuOutlined />
              </li>
              <li>
                <HomeOutlined />
              </li>
              <li>
                <form className="flex items-center">
                  <label className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <SearchOutlined className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-[#363636] placeholder-gray-400 text-gray-900 pl-10 py-1 text-sm focus:outline-none focus:ring-0 w-[250px] hover:w-[500px]"
                      placeholder="Search"
                      required
                    />
                  </div>
                </form>
              </li>
            </ul>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-2 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-gray-400 ">
              <li
                className="cursor-pointer hover:text-red-500"
                onClick={() => setShowModal(true)}
              >
                <AddOutlined />
              </li>
              <li className="cursor-pointer hover:text-red-500">
                <HelpOutlineOutlined />
              </li>
              <li className="cursor-pointer hover:text-red-500">
                <NotificationsNoneOutlined />
              </li>

              <li className="cursor-pointer">
                <div className="shrink-0">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                    className="rounded-full w-7"
                    alt="Avatar"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        {showModal ? (
          <>
            <div className="justify-center mt-[5%] flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition">
              <div className="relative w-[500px] mx-auto">
                {/*content*/}
                <form onSubmit={handleSubmit}>
                  <div className="border-0 px-4 py-3 rounded-lg relative flex flex-col w-full shadow-lg bg-[#202020] outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start ">
                      <input
                        type="text"
                        name="title"
                        className="w-full placeholder:text-gray-600  text-white text-xl py-1 bg-transparent focus:ring-0 focus:ring-offset-0"
                        placeholder="Task name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex items-start ">
                      <input
                        type="text"
                        name="description"
                        className="w-full placeholder:text-gray-600 text-white text-sm bg-transparent py-1 my-1 focus:ring-0 focus:ring-offset-0"
                        placeholder="Description"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-1">
                        <p className="px-2 hover:bg-[#363636] border cursor-pointer border-[#585858] rounded-md py-1 text-[12px] text-green-400">
                          <DomainVerificationOutlined sx={{ fontSize: 15 }} />{" "}
                          Today
                        </p>
                        <p className="px-2 hover:bg-[#484747] border cursor-pointer border-[#585858] rounded-md py-1 text-[12px] text-gray-400">
                          <InboxOutlined sx={{ fontSize: 15 }} /> Inbox
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <LocalOfferOutlined
                          className="cursor-pointer text-gray-400 hover:text-red-500 rotate-90"
                          sx={{ fontSize: 20 }}
                        />
                        <AccessAlarmsOutlined
                          className="cursor-pointer text-gray-400 hover:text-red-500"
                          sx={{ fontSize: 20 }}
                        />
                        <OutlinedFlag
                          className="cursor-pointer text-gray-400 hover:text-red-500"
                          sx={{ fontSize: 20 }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-1 items-center justify-end rounded-b pt-6">
                      <button
                        className="text-[#acacac] bg-[#292929] font-bold px-2 py-1 text-sm  rounded"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-red-500 text-white font-bold text-sm  px-2 py-1 rounded"
                        type="submit"
                      >
                        Add Task
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      {showSuccess ? (
        <div className="justify-center mt-[5%] flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition">
          <div className="relative  mx-auto">
            <div className="border-0 px-4 py-3 rounded-lg relative flex flex-col w-full shadow-lg bg-[#2f2f2f] outline-none focus:outline-none">
              <p>
                Task Added Successfully{" "}
                <span
                  className="text-red-500 px-2 text-xl cursor-pointer"
                  onClick={() => setShowSuccess(false)}
                >
                  x
                </span>
              </p>
            </div>
          </div>
        </div>
        
      ) : null}
    </div>
  );
}

export default TopNav;
