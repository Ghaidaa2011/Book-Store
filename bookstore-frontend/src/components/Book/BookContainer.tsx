import { Fragment, useEffect } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./book.css";
import { useAppDispatch } from "../../store/hooks";
import { actGetBook } from "../../store/bookSlice";

const PostContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actGetBook());
  }, [dispatch]);
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList />
        </div>
        <div className="col side-line">
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
