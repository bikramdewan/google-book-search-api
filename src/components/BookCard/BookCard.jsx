import styles from './BookCard.module.scss';

function BookCard({book}) {
    return (
        <div className={styles.BookCard}>
            <div className={styles.BookCard_Image}>
                <img src={book.imageLink}></img>
            </div>
            <div className={styles.BookCard_Text}>
                <div className={styles.BookCard_Text}>Title: {book.title}</div>
                <div className={styles.BookCard_Text}>Authors: {book.authors}</div>
                <div className={styles.BookCard_Text}>Description: {book.description}</div>
            </div>
        </div>
    )
}

export default BookCard;