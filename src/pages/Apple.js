import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';



export const Apple = () => {
    const Navigate = useNavigate();
    const onHomePageButtonClick = () => {
        //Navigate = ("/")
        alert ("the button has been clicked")
    }
    return(<div>
    Apple Page🍎<br></br>
    <Button variant="contained" onClick={onHomePageButtonClick}>Hello World!</Button>
    </div>)
}

