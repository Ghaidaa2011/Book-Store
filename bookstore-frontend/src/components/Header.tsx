// import { useAppSelector } from "../store/hooks";

import { logInOut } from "../store/authSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Header = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  // const { error } = useAppSelector((state) => state.books);
  return (
    <>
      {/* {error && (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      )} */}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => dispatch(logInOut())}
        >
          {isLoggedIn ? "Log out" : "Log in"}
        </button>
      </nav>
    </>
  );
};

export default Header;
