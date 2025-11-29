interface BookInterface{
    title: string;
    author: string;
    publicationYear: number;
}

let books: BookInterface[] = []

function addBook(title:string, author:string, publicationYear:number): void {
    const newBook: BookInterface = { title, author, publicationYear };
    books.push(newBook);
    console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

function listBooks(): void {
    console.log("All Books:");
    
    if (books.length === 0) {
        console.log("No books available.");
        return;
    }
    books.forEach(book => {
        console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
    });
} 
// menggunakan map

function searchBook(title?: string): void {
    if (!title) {
        console.log('Please provide a title to search.');
        return;
    }

    const results = books.filter(book => book.title.includes(title)); 

    console.log(`Search Results for "${title}":`);
    
    if (results.length === 0) {
        console.log(`No books found with title containing "${title}".`);
    } else {
        results.forEach(book => {
            console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
        });
    }
}

// Adding some books
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
addBook('1984', 'George Orwell', 1949);

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
