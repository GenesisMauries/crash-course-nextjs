import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      {children}
      <section>
        <h2>Featured products section</h2>
      </section>
    </section>
  );
};

export default ProductLayout;
