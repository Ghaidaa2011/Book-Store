import { TBook } from "../../types/book";

type TBookInfoProps = {
  bookInfo: TBook;
};
const BookInfo = ({ bookInfo }: TBookInfoProps) => {
  return (
    <>
      <h2>Book Details</h2>
      {Object.keys(bookInfo).length > 0 ? (
        <div>
          <p className="fw-bold"> Inserted by: {bookInfo.userName}</p>
          <p className="fw-bold"> Title: {bookInfo.title}</p>
          <p className="fw-light">Description: {bookInfo.description} </p>
          <p className="fst-italic">Price: {bookInfo.price} </p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no book selected yet. Please select!
        </div>
      )}
    </>
  );
};

export default BookInfo;
