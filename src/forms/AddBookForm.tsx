import { Box, Button, TextField } from "@mui/material";
import { BookItem } from "../model/BookItem";
import { bookService } from "../config/service-config";
import bookConf from '../config/book-config.json';
const {ownerPath} = bookConf;

const AddBookForm: React.FC = () => {
    
    async function onSubmitFn(event: any) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const inputedAuthor: string = data.get("author") as string
        const inputedBookName: string = data.get("book") as string
        const newBook: BookItem = {
            author: inputedAuthor,
            name: inputedBookName,
        }
        await bookService.postBook(newBook, ownerPath);
        event.target.reset();
      }
    
    return (<form
        onSubmit={onSubmitFn}
        style={{ display: "flex", flexDirection: 'row' }}>
        <Box 
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "25vw",
                gap: "15px",
                mt: '1vh',
                ml: '4vw'
            }}
        >
            <TextField
                name="author"
                size="small"
                type="text"
                required
                fullWidth
                label="Author"
                inputProps={{ maxLength: 32 }}
                helperText={"Enter author's name"}
            />

            <TextField
                name="book"
                size="small"
                type="text"
                required
                fullWidth
                label="Book"
                inputProps={{ maxLength: 32 }}
                helperText={"Enter book's name"}
            />
            <Button
                sx={{ mt: '5vh' }}
                type="submit"
                size="medium"
                variant="contained"
                color="primary"

            >
                Submit
            </Button>
        </Box>

    </form>)

}

export default AddBookForm;