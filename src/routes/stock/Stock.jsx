import React, { useEffect } from "react";

function Stock() {
  useEffect(() => {
    document.title = "Stock | Lanka Hardwarehub";
  }, []);
  return <div>Stock</div>;
}

export default Stock;
