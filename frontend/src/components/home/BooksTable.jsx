import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

const BooksTable = ({ books }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="text-center">No.</th>
          <th className="text-center">Title</th>
          <th className="text-center max-md:hidden">Author</th>
          <th className="text-center max-md:hidden">Publish Year</th>
          <th className="text-center">Menu</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="h-8">
            <td className="text-center">{index + 1}</td>
            <td className="text-center">{book.title}</td>
            <td className="text-center max-md:hidden">{book.author}</td>
            <td className="text-center max-md:hidden">{book.publishYear}</td>
            <td className="text-center">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn">
                  <CiMenuKebab className="text-primary" />
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
