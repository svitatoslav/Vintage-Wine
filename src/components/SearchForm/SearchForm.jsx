import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./SearchForm.module.scss";
import { filterProducts } from "../../redux/reducers/products-reducer";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isInputActive, setIsInputActive] = useState(false);

  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") ?? "");
  const debouncedValue = useDebounce(searchTerm, 250);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    setIsInputActive(false);
  });

  const products = useSelector((state) => state.products.filteredProducts);

  const isDropDownOpen = searchTerm !== "" && isInputActive;

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (searchTerm.length >= 2) {
      dispatch(filterProducts(debouncedValue));
      setSearchParams({
        query: debouncedValue,
      });
    }
  }, [debouncedValue, dispatch, setSearchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const limitedProducts = products.slice(0, 5);

  const handleAddProduct = (id) => {
    localStorage.setItem("viewedProducts", id);
  };

  return (
    <form
      ref={wrapperRef}
      onSubmit={handleSearch}
      className={styles.Search}
      data-testid="SearchForm"
    >
      <input
        className={styles.Input}
        placeholder="Find your favorite drink"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsInputActive(true)}
      />
      {isDropDownOpen && (
        <ul className={styles.List}>
          {limitedProducts.length > 0 && searchTerm.length >= 2 ? (
            limitedProducts.map((product) => (
              <li key={product._id}>
                <Link
                  className={styles.Link}
                  onClick={() => handleAddProduct(product._id)}
                  key={product._id}
                  to={`/shop/${product._id}`}
                >
                  {product.name}
                </Link>
              </li>
            ))
          ) : (
            <li className={styles.Link}>Nothing Found</li>
          )}
        </ul>
      )}
    </form>
  );
};

export default SearchForm;
