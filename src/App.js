
import Search from './components/Search';
import BookList from './components/BookList';


const App = (bookList) => {
  return (
    <div>
      <Search/>
      <BookList book={bookList}/>
    </div>
  );
}

export default App;
