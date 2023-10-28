import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>            
            <Footer />
        </>
    );
}
 
export default Layout;