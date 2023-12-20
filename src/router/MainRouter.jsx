import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComponent from '../components/NavBarComponents/NavBarComponent'
import { Home } from '../pages/home'
import {ItemDetailContainer} from '../pages/ItemDetailContainer'
import { Category } from '../pages/Category'

export const MainRouter = () => {
    return (
        <BrowserRouter>
        <NavBarComponent/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/item/:productId' element={<ItemDetailContainer />} />
                <Route path='/category/:id' element={<Category />} />
            </Routes>
        </BrowserRouter>
    )
} 