import { Form, Button } from "react-bootstrap"
import {useContext, useState} from 'react';

const AddContact = () =>{
    const [contact, setContact] = useState({
        name:"", email:"", phoneNo:""
    });

    const onInputChange = (e) => {
        setContact({...contact,[e.target.name]: e.target.value})
    }

    const {name, email, phoneNo} = contact;

    const handleSubmit = (e) => {
        e.preventDefault();
        AddContact(name, email, phoneNo);
    }

     return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange = { (e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="PhoneNo"
                    name="phoneNo"
                    value={phoneNo}
                    onChange = { (e) => onInputChange(e)}
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Ajouter un contact
            </Button>
        </Form>

     )
}
export default AddContact


