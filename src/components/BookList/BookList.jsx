
import BookCard from './../BookCard';


const BookList = ({bookList}) => {
    
  if (!bookList) {
      return null;
    }
    return (
      <>
      {bookList.map(book => {
      console.log(book);
      return <BookCard key={book.title} book={book}/>
        
      })}
      </>
      
    )
}

export default BookList;