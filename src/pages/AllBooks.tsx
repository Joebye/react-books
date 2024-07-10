import Box from "@mui/material/Box";
import BookCard from "../components/BookCard";
import Button from "../components/Button";
import Header from "../components/Header";
import bookConfig from '../config/book-config.json'
import { useSelectorBooks } from "../hooks/hooks";
import { useState } from "react";
import { Modal } from "@mui/material";
import AddBookForm from "../forms/AddBookForm";

const {headerConfigAll, endpointAll, addButtonName,ownerPath} = bookConfig;

const AllBooks: React.FC = () => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const books = useSelectorBooks(endpointAll, ownerPath);
    const [openForm, setFlForm] = useState(false);

    const openAddFormFn = () => {
        setFlForm(true);
    }

    return (
        <div>
            <Header headerName={headerConfigAll} amount={books.length}/>
            {books.map((item, index) => (
        <BookCard
          key={index}
          author={item.author}
          bookName={item.name}
        />
      ))}
      <Button onClickFn={openAddFormFn} buttonName={addButtonName}/>
      <Modal
            open={openForm}
            onClose={() => setFlForm(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <AddBookForm/>
            </Box>
        </Modal>
        
        </div>
      ) 
}

export default AllBooks;