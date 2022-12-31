import React from "react";
import {
  InboxOutlined,
  DateRangeOutlined,
  CalendarMonthOutlined,
  GrainOutlined,
  Circle,
} from "@mui/icons-material";

function SideNav() {
  return (
      <div
        className="w-72 h-full shadow-md bg-[#242424] pt-8"
        id="sidenavSecExample"
      >
        <ul className="relative px-1">
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-8 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:bg-[#363636] transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <InboxOutlined className="text-blue-500" />
              <span className="pl-1">Inbox</span>
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-8 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:bg-[#363636] transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <DateRangeOutlined className="text-green-500" />
              <span className="pl-1">Today</span>
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-8 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:bg-[#363636] transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <CalendarMonthOutlined className="text-purple-500" />
              <span className="pl-1">Upcoming</span>
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-8 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:bg-[#363636] transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <GrainOutlined className="text-yellow-500" />
              <span className="pl-1">Labels & filters</span>
            </a>
          </li>
        </ul>
        <h6 className="text-gray-500 relative px-5 mt-10">Projects</h6>
        <ul className="relative px-1 list-disc">
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-8 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:bg-[#363636] transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <Circle className="text-gray-500" sx={{ fontSize: 16 }} />
              <span className="pl-1">Welcome</span>
            </a>
          </li>
          <li className="relative">
            <a
              className="flex items-center text-sm py-4 px-6 h-8 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:bg-[#363636] transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
            >
              <Circle className="text-gray-500 " sx={{ fontSize: 16 }}/>
              <span className="pl-1">Try Boards</span>
            </a>
          </li>
        </ul>
      </div>
  );
}

export default SideNav;
