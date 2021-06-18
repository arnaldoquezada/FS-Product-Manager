import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <div>
            <div className="content">
                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Other</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Contact</Nav.Link>
                    </Nav.Item>                    
                </Nav>
            </div>
            <div className="wrapper">
                <div>
                    <ProductForm />
                </div>
                <div>
                    <h2>Products List</h2>
                    <ProductList />
                </div>

            </div>
        </div>
    )
}