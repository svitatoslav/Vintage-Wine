import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Collections from './pages/Collections/Collections';
import Shop from './pages/Shop/Shop';
import News from './pages/News/News';
import DeliveryAndPayment from './pages/DeliveryAndPayment/DeliveryAndPayment';
import Contact from './pages/Contact/Contact';
import NoPage from './pages/NoPage/NoPage';
import './App.scss';
import Cart from './pages/Cart/Cart';
import { useDispatch } from 'react-redux';
import { fetchProductsThunk } from './redux/reducers/products-reducer';
import { useEffect } from 'react';
import Footer from './components/Footer/Footer';

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
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/news" element={<News />} />
                <Route path="/delivery" element={<DeliveryAndPayment />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NoPage />} />
            </Route>
        </Routes>
            <Footer />
        </>
    );
};

export default App;
