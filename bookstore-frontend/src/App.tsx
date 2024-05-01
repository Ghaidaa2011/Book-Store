import Addform from "./components/Addform";
import Container from "./components/Container";
import Header from "./components/Header";
import BookContainer from "./components/Book/BookContainer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Addform />
        <BookContainer />
      </Container>
    </>
  );
}

export default App;
