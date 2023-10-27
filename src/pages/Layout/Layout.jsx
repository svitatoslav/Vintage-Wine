import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </>
    );
}
 
export default Layout;