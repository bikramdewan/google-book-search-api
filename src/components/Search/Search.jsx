import {useState} from 'react';
import styles from './Search.module.scss';
import BookList from './../BookList'

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [bookList, setBookList] = useState(null);
  
    const handleChange = event => setSearchText(event.target.value);
    const searchBooks = () => {
      if(searchText) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchText}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            
            const books = data.items.map(({volumeInfo}) => 
            {
              return {
                title: volumeInfo?.title,
                imageLink: volumeInfo?.imageLinks?.smallThumbnail,
                description: volumeInfo?.description,
                authors: volumeInfo?.authors?.join('')
              }
            });
            setBookList(books);
          });
      }
    }
    
    return (
      <div className={styles.Search}>
        <div className={styles.Search_Box}>
          <input className={styles.Search_Input} type="text" value={searchText} onChange={handleChange} placeholder="Search Books..."/>
          <button className={styles.Search_Button} onClick={searchBooks}>Search</button>
        </div>
        {bookList && (
          <>
            <div className={styles.Search_Result}>
              <h2>Search Result</h2>
            </div>
            <div className={styles.Search_Card}>
              <BookList bookList={bookList}/>
            </div>
          </>
        )}
      </div>
    );
}

export default Search;