import Catalog from '../../components/Catalog/Catalog';
import Collections from '../../components/Collections/Collections';
import Cover from '../../components/Cover/Cover';
import History from '../../components/History/History';

const Home = () => {
    return (
        <main>
            <Collections />
            <History />
            <Catalog />
        </main>
    );
};

export default Home;
