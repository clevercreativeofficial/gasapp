"use client";
import Product from "@/components/product";
import { getProducts } from "@/db/products"

const Products = () => {
  return (
    <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-5">
      {/* Products List */}
      {getProducts.map(product => (
        <Product
          key={product.id}
          productImages={product.images}
          productName={product.name}
          seller={product.seller}
          place={product.place}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default Products;