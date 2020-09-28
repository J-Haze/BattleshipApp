

const bookItems = books.map((book) =>
    <Book
        key={book.title}
        book={book}
        handleDelete={handleDelete}
        toggleRead={toggleRead}
        toggleReading={toggleReading}
        toggleNotRead={toggleNotRead}
    />
);