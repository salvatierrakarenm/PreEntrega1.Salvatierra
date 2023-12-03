
const ItemListContainer = ({ greeting }) => {
    return (
        <div style={{
            textAlign: "center",
            fontWeight: 'medium',
            fontStyle: "italic",
            fontSize: '2rem', }}>
            
            {greeting}
        </div>
    )
}

export default ItemListContainer