import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import styles from './Layout.module.scss';

const Layout = () => {
    return (
        <>
            <Header />
            <main className={styles.Main}>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </>
    );
}
 
export default Layout;