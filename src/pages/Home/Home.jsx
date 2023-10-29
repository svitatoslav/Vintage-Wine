import React from 'react';
import Catalog from '../../components/Catalog/Catalog';
import Collections from '../../components/Collections/Collections';
import Cover from '../../components/Cover/Cover';
import History from '../../components/History/History';

const Home = () => {
  return (
    <>
      <Cover />
      <Collections />
      <History />
      <Catalog />
    </>
  );
}

export default Home;
