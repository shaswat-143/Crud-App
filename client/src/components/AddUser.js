import { useState } from "react";


import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";

import { addUser } from "../service/api";


const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto 0 auto;
& > div {
    margin-top: 20px;
}
`

const defaultValue = {
    name:'',
    username:'',
    email:'',
    phone:'',
    gender:''
}


const Adduser = () => {

    const [user, setUser] = useState(defaultValue);


    const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    }

    const addUserDetails = async () => {
    await addUser(user);
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>E-mail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <InputLabel>Gender</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="gender" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default Adduser;