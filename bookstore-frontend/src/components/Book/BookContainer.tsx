import { useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./book.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { actDeleteBook, actGetBook } from "../../store/bookSlice";
import { TBook } from "../../types/book";

const PostContainer = () => {
  const [selectedBook, setSelectedBook] = useState<TBook>({});
  const dispatch = useAppDispatch();
  const {
    loading,
    error,
    books,
    //  bookInfo
  } = useAppSelector((state) => state.books);
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(actGetBook());
  }, [dispatch]);
  const getBookId = (id: number) => {
    const selectedBook = books.find((book) => book.id === id);
    setSelectedBook((previousBook) => {
      return { ...previousBook, ...selectedBook };
    });
  };
  return (
    <>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            status={loading}
            books={books}
            error={error}
            isLoggedIn={isLoggedIn}
            deleteBook={actDeleteBook}
            getBookId={getBookId}
          />
        </div>
        <div className="col side-line">
          <BookInfo bookInfo={selectedBook} />
        </div>
      </div>
    </>
  );
};

export default PostContainer;
