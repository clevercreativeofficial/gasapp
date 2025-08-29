import Footer from "@/components/footer_sm";
import Sidebar from "@/components/sidebar";
import Product from "@/components/product";
import Filters from "@/components/filters";
import Categories from "@/components/categories";
import Modal from "@/components/modal"

function Shop() {
  return (
    <div className="max-w-[1200px] m-auto flex justify-center px-3">
      <div className="w-full flex md:justify-between justify-center gap-3">
        {/* Sidebar */}
        <div className="hidden md:block">
          <Sidebar>
            <h2 className="font-semibold text-2xl pt-5 text-accent">
              Marketplace
            </h2>
            <p className="text-sm text-foreground mb-4">
              Get the latest products
            </p>
            <div className="h-[calc(100vh-350px)] flex flex-col overflow-y-auto">
              <Filters />
              <Categories />
            </div>
            <div className="absolute left-3 bottom-5">
              <Footer />
            </div>
          </Sidebar>
        </div>

        {/* Products Section */}
        <div className="pt-4 w-full">
          <Modal /> {/* Include modal functionality */}
          <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-5">
            {/* Products List */}
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
            
            {/* Add more products */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
