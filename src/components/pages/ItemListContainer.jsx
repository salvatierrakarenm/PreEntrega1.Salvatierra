import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({ productsData }) => {
    return (
        <div>
            {productsData?.map((products) => {  
            <Card key={products?.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={ productsData.thumbnail} />
                <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                    <Card.Text>
                        {products.description}
                        bulk of the card's content.
                    </Card.Text>
                    <div>
                        {products.price}
                    </div>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        })
    }
        </div>
    )
}

export default ItemListContainer


