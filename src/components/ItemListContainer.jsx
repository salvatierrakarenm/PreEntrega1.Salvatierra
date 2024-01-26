import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemListContainer = ({ productsData }) => {
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 15 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '800px' }}>
                {productsData.map((products) => {
                    return (
                        <Card key={products.id} style={{ width: "12rem", margin: 10 }}>
                            <Link to={`/item/${products.id}`}><Card.Img variant="top" src={products.thumbnail} /></Link>
                            <Card.Body>
                                <Card.Title>{products.title}</Card.Title>
                                <Card.Text>
                                    {products.description}
                                </Card.Text>
                                <div>{products.price}</div>
                                <Button variant="primary">Agregar al carrito</Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </div>
        </div>

    );
};

export default ItemListContainer;