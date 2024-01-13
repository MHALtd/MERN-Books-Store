import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">No.</th>
          <th className="border border-slate-600 rounded-md">Title</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">Publish Year</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="border border-slate-600 rounded-md text-center">{index + 1}</td>
            <td className="border border-slate-600 rounded-md text-center">{book.title}</td>
            <td className="border border-slate-600 rounded-md text-center max-md:hidden">{book.author}</td>
            <td className="border border-slate-600 rounded-md text-center max-md:hidden">{book.publishYear}</td>
            <td className="text-center">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-outline">
                  <CiMenuKebab />
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                  <li>
                    <div>
                      <p>Info</p>
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800"></BsInfoCircle>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>Edit</p>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600"></AiOutlineEdit>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p>Delete</p>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600"></MdOutlineDelete>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
