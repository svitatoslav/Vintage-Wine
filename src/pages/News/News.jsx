import PageTitle from '../../components/Title/PageTitle';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import Container from '../../components/Container/Container';
import NewsItem from '../../components/NewsItem/NewsItem';

const News = ({}) => {
  const pathParts = useBreadcrumbs();
  return (
    <Container>
      <PageTitle text="News"/>
      <Breadcrumbs pathParts={pathParts} />
        <NewsItem/>
    </Container>
  );
}

export default News;
