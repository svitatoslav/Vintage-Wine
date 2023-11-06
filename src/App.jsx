import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductsThunk } from './redux/reducers/products-reducer';
import { useEffect } from 'react';

import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Catalog from './pages/Catalog/Catalog';
import Shop from './pages/Shop/Shop';
import News from './pages/News/News';
import DeliveryAndPayment from './pages/DeliveryAndPayment/DeliveryAndPayment';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import NoPage from './pages/NoPage/NoPage';
import SingleCatalog from './components/SingleCatalog/SingleCatalog';

import './App.scss';
import SingleProduct from './pages/SingleProduct/SingleProduct';


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsThunk());
    }, [dispatch]);
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="home" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="catalog" element={<Catalog />} />
                    <Route path="catalog/:slug" element={<SingleCatalog />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="shop/catalog/:id" element={<SingleProduct />} />
                    <Route path="news" element={<News />} />
                    <Route path="delivery&payment" element={<DeliveryAndPayment />} />
                    <Route path="contacts" element={<Contact />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
