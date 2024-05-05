import { useEffect } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./book.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { actGetBook } from "../../store/bookSlice";

const PostContainer = () => {
  const dispatch = useAppDispatch();
  const { loading, error, books } = useAppSelector((state) => state.books);
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(actGetBook());
  }, [dispatch]);
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
          />
        </div>
        <div className="col side-line">
          <BookInfo />
        </div>
      </div>
    </>
  );
};

export default PostContainer;
