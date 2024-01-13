import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
import Navbar from "../components/home/Navbar";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://mern-books-store-api-rho.vercel.app/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Books Store</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn">
              Change View
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box space-y-2">
              <li>
                <button className="btn btn-outline text-center" onClick={() => setShowType("table")}>
                  Table
                </button>
              </li>
              <li>
                <button className="btn btn-outline text-center" onClick={() => setShowType("card")}>
                  Card
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-primary text-4xl"></MdOutlineAddBox>
        </Link>
      </div>
      {loading ? <Spinner /> : showType === "table" ? <BooksTable books={books} /> : <BooksCard books={books} />}
    </div>
  );
};

export default Home;
