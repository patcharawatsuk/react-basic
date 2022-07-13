import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormComponent = ({onAddItem}) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [formAllowSubmit, setFormAllowSubmit] = useState(false);
    const [submitColor, setSubmitColor] = useState("error");

    const inputTitle = (e) => {
        setTitle(e.target.value);
    }
    
    const inputAmount = (e) => {
        setAmount(e.target.value);
    }
    
    const saveItem = (e) => {
        e.preventDefault();
        const itemData = {
            id: uuidv4(),
            title : title,
            amount : Number(amount)
        }
        onAddItem(itemData);
        setTitle('');
        setAmount(0);
    }

    useEffect(() => {
        const checkData = (String(title).trim().length > 0) && (Number(amount) !== 0);
        setFormAllowSubmit(checkData);
        if(amount > 0) {
            setSubmitColor('success');
        } else {
            setSubmitColor('error');
        }

    }, [title, amount])

    return (
        <div>
            <form onSubmit={saveItem}>
                <TextField fullWidth type="text" id="outlined-basic" label="ชื่อรายการ" variant="outlined" onChange={inputTitle} value={title} />
                <br></br>
                <br></br>
                <TextField fullWidth type="number" id="filled-basic" label="(+ รายรับ, - รายจ่าย)" variant="outlined" onChange={inputAmount} value={amount} />
                <br></br>
                <br></br>
                <Button type="submit" color={submitColor} fullWidth variant="contained" disabled={!formAllowSubmit}>เพิ่มข้อมูล</Button>
            </form>
        </div>
    )
}

export default FormComponent;