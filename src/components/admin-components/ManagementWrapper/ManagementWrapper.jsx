import React from "react";
import styles from './ManagementWrapper.module.scss';
import { useParams } from "react-router-dom";
import SectionTitle from "../../Title/SectionTitle";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../../hooks/useBreadcrumbs";
import ProductsForm from "../ManagementForms/ProductsForm/ProductsForm";
import ExcursionsForm from "../ManagementForms/ExcursionsForm/ExcursionsForm";
import NewsForm from "../ManagementForms/NewsForm/NewsForm";
import SharesForm from "../ManagementForms/SharesForm/SharesForm";

const ManagementWrapper = () => {
  const pathParts = useBreadcrumbs();
  const { slug } = useParams();

  const titleName = slug[0].toUpperCase() + slug.slice(1);

  const displayedForm = () => {
    switch (slug) {
      case 'products':
        return <ProductsForm />
      case 'excursions':
        return <ExcursionsForm />
      case 'news':
        return <NewsForm />
      case 'shares':
        return <SharesForm />

      default:
        break;
    }
  }



  return (
    <>
      <SectionTitle secText={`${titleName} form`} />
      <Breadcrumbs pathParts={pathParts.slice(1)} noPrefix />

      {displayedForm()}
    </>
  );
}

export default ManagementWrapper;
