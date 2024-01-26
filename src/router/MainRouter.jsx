import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComponent from '../components/NavBarComponents/NavBarComponent'
import { Home } from '../pages/Home'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import { Category } from '../pages/Category'
import { CreateProduct } from "../pages/CreateProduct";
import { UpdateProduct } from "../pages/UpdateProduct";
import { Cart } from "../pages/Cart";

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/update-product/:id" element={<UpdateProduct />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}

