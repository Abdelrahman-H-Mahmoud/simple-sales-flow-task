import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions";
import ProductsCategory from "../../components/ProductsCategory/ProductsCategory";
import {
  getProductCategoriesState,
  getBasketItems,
} from "../../redux/selectors";
import Loading from "../../components/common/loading/Loading";
import ButtonLink from "../../components/common/buttonLink/ButtonLink";


function ProductsPage(): ReactElement {
  const dispatch = useDispatch();

  let categoriesState = useSelector(getProductCategoriesState);
  let basketItems = useSelector(getBasketItems);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="container">
      {categoriesState.loading && <Loading />}
      {categoriesState.data.length > 0 && !categoriesState.loading ? (
        <ProductsCategory
          categories={categoriesState.data}
          basketItems={basketItems}
        />
      ) : null}

      <div className="row">
        <div className="col align-right">
          <ButtonLink href="/basket">
            Basket
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
