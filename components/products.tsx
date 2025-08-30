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
      {/* <Product
              productImages={[
                "https://media.s-bol.com/80Kl9xEJYmGm/ENrAMl/550x550.jpg",
                "https://www.bhphotovideo.com/images/images500x500/apple_mgyj3am_a_airpods_max_silver_1607506546_1610234.jpg",
              ]}
              productName="Headphones"
              seller="Jack Zadesh"
              place="Gitega"
              price={5852}
            /> */}
      {/* <Product
              productImages={[
                "https://media.s-bol.com/80Kl9xEJYmGm/ENrAMl/550x550.jpg",
                "https://www.bhphotovideo.com/images/images500x500/apple_mgyj3am_a_airpods_max_silver_1607506546_1610234.jpg",
              ]}
              productName="Headphones"
              seller="Jack Zadesh"
              place="Gitega"
              price={5852}
            />
            <Product
              productImages={[
                "https://media.s-bol.com/80Kl9xEJYmGm/ENrAMl/550x550.jpg",
                "https://www.bhphotovideo.com/images/images500x500/apple_mgyj3am_a_airpods_max_silver_1607506546_1610234.jpg",
              ]}
              productName="Headphones"
              seller="Jack Zadesh"
              place="Gitega"
              price={5852}
            />
            <Product
              productImages={[
                "https://media.s-bol.com/80Kl9xEJYmGm/ENrAMl/550x550.jpg",
                "https://www.bhphotovideo.com/images/images500x500/apple_mgyj3am_a_airpods_max_silver_1607506546_1610234.jpg",
              ]}
              productName="Headphones"
              seller="Jack Zadesh"
              place="Gitega"
              price={5852}
            />
            <Product
              productImages={[
                "https://media.s-bol.com/80Kl9xEJYmGm/ENrAMl/550x550.jpg",
                "https://www.bhphotovideo.com/images/images500x500/apple_mgyj3am_a_airpods_max_silver_1607506546_1610234.jpg",
              ]}
              productName="Headphones"
              seller="Jack Zadesh"
              place="Gitega"
              price={5852}
            />
            <Product
              productImages={[
                "https://media.s-bol.com/80Kl9xEJYmGm/ENrAMl/550x550.jpg",
                "https://www.bhphotovideo.com/images/images500x500/apple_mgyj3am_a_airpods_max_silver_1607506546_1610234.jpg",
              ]}
              productName="Headphones"
              seller="Jack Zadesh"
              place="Gitega"
              price={5852}
            />
            <Product
              productImages={[
                "https://media.s-bol.com/80Kl9xEJYmGm/ENrAMl/550x550.jpg",
                "https://www.bhphotovideo.com/images/images500x500/apple_mgyj3am_a_airpods_max_silver_1607506546_1610234.jpg",
              ]}
              productName="Headphones"
              seller="Jack Zadesh"
              place="Gitega"
              price={5852}
            />
            <Product
              productImages={[
                "https://media.s-bol.com/80Kl9xEJYmGm/ENrAMl/550x550.jpg",
                "https://www.bhphotovideo.com/images/images500x500/apple_mgyj3am_a_airpods_max_silver_1607506546_1610234.jpg",
              ]}
              productName="Headphones"
              seller="Jack Zadesh"
              place="Gitega"
              price={5852}
            />
            <Product
              productImages={[
                "https://media.s-bol.com/80Kl9xEJYmGm/ENrAMl/550x550.jpg",
                "https://www.bhphotovideo.com/images/images500x500/apple_mgyj3am_a_airpods_max_silver_1607506546_1610234.jpg",
              ]}
              productName="Headphones"
              seller="Jack Zadesh"
              place="Gitega"
              price={5852}
            /> */}

      {/* Add more products */}
    </div>
  )
}

export default Products;