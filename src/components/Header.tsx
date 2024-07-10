import { Typography } from "@mui/material";

type Props = {
    headerName: string;
    amount: number;
}

const Header: React.FC<Props> = (props) => {

return <Typography sx={{ml:9}} variant="h6">{`${props.headerName}: ${props.amount}`} </Typography>
}

export default Header;