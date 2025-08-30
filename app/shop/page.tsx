import Footer from "@/components/footer_sm";
import Sidebar from "@/components/sidebar";
import Filters from "@/components/filters";
import Categories from "@/components/categories";
import Modal from "@/components/modal"
import Products from "@/components/products";

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
          <Products /> {/* Products component rendering the products list */}
        </div>
      </div>
    </div>
  );
}

export default Shop;
