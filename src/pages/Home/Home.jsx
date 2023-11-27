import React from 'react';
import Catalog from '../../components/Catalog/Catalog';
import Collections from '../../components/Collections/Collections';
import Cover from '../../components/Cover/Cover';
import History from '../../components/History/History';
import Excursions from '../../components/Excursions/Excursions';
import Shares from "../../components/Shares/Shares";

const Home = () => {
  return (
    <>
      <Cover />
      <Collections />
      <History />
      <Catalog />
      <Excursions />
      <Shares />
    </>
  );
}

export default Home;
