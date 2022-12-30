import { TextField } from "@mui/material"
import Paper from "@mui/material/Paper"
import Avatar from "@mui/material/Avatar"
import { deepOrange, deepPurple } from "@mui/material/colors"

export default function SignUp() {


    return (
        <>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Avatar>H</Avatar>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
        </>
    )
}