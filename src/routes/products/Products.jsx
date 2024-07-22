import React, { useEffect } from "react";
import Product from "../../components/product/Product";

function Products() {
  useEffect(() => {
    document.title = "Products | Lanka Hardwarehub";
  }, []);

  return (
    <div>
      <Product />
    </div>
  );
}

export default Products;
