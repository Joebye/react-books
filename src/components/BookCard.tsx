import { Card, CardContent, Typography } from "@mui/material"

type Props = {
    author: string;
    bookName: string;
}

const BookCard: React.FC<Props> = (props) => {
    
    
    return <Card>
    <CardContent> 
      <Typography fontSize={15} ml={7}>
        Author: {props.author}
      </Typography>
      <Typography fontSize={15}ml={7}>
        Name: {props.bookName}
      </Typography>
    </CardContent>
    </Card>


}


export default BookCard;