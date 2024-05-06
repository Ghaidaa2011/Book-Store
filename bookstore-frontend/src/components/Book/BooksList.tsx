import {
  actDeleteBook,
  // actReadBook
} from "../../store/bookSlice";
import { useAppDispatch } from "../../store/hooks";
import { TBook } from "../../types/book";
import { TLoading } from "../../types/shared";
import Loading from "../Loading";

type TBookListProps = {
  status: TLoading;
  error: null | string;
  books: TBook[];
  isLoggedIn: boolean;
  deleteBook: typeof actDeleteBook;
  getBookId: (id: string) => void;
};
const BooksList = ({
  status,
  error,
  books,
  isLoggedIn,
  deleteBook,
  getBookId,
}: TBookListProps) => {
  const dispatch = useAppDispatch();
  const bookList =
    books.length > 0
      ? books.map((book) => (
          <li
            key={book.id}
            className="list-group-item d-flex  justify-content-between align-items-center"
          >
            <div>{book?.title}</div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                disabled={!isLoggedIn}
                onClick={() => getBookId(book.id)}
                // onClick={() => dispatch(actReadBook(book))}
              >
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() =>
                  dispatch(deleteBook(book.id))
                    .unwrap()
                    .then((originalPromiseResult) => {
                      console.log(originalPromiseResult);
                    })
                    .catch((rejectedValueOrSerializedError) => {
                      console.log(rejectedValueOrSerializedError);
                    })
                }
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "There are no books available";
  return (
    <div>
      <h2>Books List</h2>
      <Loading status={status} error={error}>
        <ul className="list-group">{bookList} </ul>
      </Loading>
    </div>
  );
};

export default BooksList;
