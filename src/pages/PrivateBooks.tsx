import { Typography } from "@mui/material"
import { useSelectorBooks } from "../hooks/hooks";
import bookConfig from '../config/book-config.json'
import Header from "../components/Header";
import BookCard from "../components/BookCard";

const {endpointPrivate, headerConfigPrivate, ownerPath} = bookConfig;

const AllBooks: React.FC = () => {

    const books = useSelectorBooks(endpointPrivate, ownerPath);
    
    return (
        <div>
        <Header headerName={headerConfigPrivate} amount={books.length}/>
        {books.map((item, index) => (
        <BookCard
          key={index}
          author={item.author}
          bookName={item.name}
        />
      ))}
        </div>
      ) 
}

export default AllBooks;