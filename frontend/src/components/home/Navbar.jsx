import React, { useState } from "react";

const Navbar = () => {
  const [showType, setShowType] = useState("table");

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Books Store</a>
      </div>
      <div className="flex-none">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn">
            Change View
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType("table")}>
                Table
              </button>
            </li>
            <li>
              <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={() => setShowType("card")}>
                Card
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
