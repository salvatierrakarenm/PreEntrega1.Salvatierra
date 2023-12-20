
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useGetProductById } from "../hooks/useProducts";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const { productId } = useParams();

    const { productData } = useGetProductById(productId);

    return (

        <Card key={productData.id} >
            <Card.Img variant="top" src={productData.thumbnail} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{productData.title}</Card.Title>
                <Card.Text>{productData.description}</Card.Text>
                <div>{productData.price}</div>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};


