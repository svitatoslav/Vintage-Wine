import PageTitle from '../../components/Title/PageTitle';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import Container from '../../components/Container/Container';

const News = ({}) => {
  const pathParts = useBreadcrumbs();
  return (
    <Container>
      <PageTitle>News</PageTitle>
      <Breadcrumbs pathParts={pathParts} />
    </Container>
  );
}

export default News;
