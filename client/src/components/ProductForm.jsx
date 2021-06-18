
import '../styles/App.scss';
import axios from "axios";
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
const { useState } = require("react");

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',
            {
                title,
                price,
                description
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <Row>
                <Col>
                    <Form onSubmit={onSubmitHandler}>
                        <h2>Add Products</h2>
                        <Form.Group>
                            <Form.Control size="sm" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                            <br />
                            <Form.Control size="sm" type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
                            <br />
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control size="sm" as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
                            <br />
                            <Button variant="primary" size="sm" block type="submit">
                                Add Product
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

        </div>
                     
    )}