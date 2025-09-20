import Footer from "@/components/footer_sm";
import Sidebar from "@/components/sidebar";
import Filters from "@/components/filters";
import Categories from "@/components/categories";
import Modal from "@/components/modal"
import Jobs from "@/components/jobs";
import Container from "@/components/container"

const Shop = () => {
  return (
    <Container>
      <div className="flex justify-center px-3">
        <div className="relative w-full flex md:justify-between justify-center gap-3">
          {/* Sidebar */}
          <div className="hidden md:block">
            <Sidebar>
              <h2 className="font-semibold text-2xl pt-5 text-accent">
                Opportunities
              </h2>
              <p className="text-sm text-foreground mb-4">
                Get the latest job listings
              </p>
              <div className="h-[calc(100vh-350px)] flex flex-col overflow-y-auto">
                <Filters />
                <Categories />
              </div>
              <div className="absolute left-3 -bottom-32">
                <Footer />
              </div>
            </Sidebar>
          </div>

          {/* Jobs Section */}
          <div className="pt-4 w-full">
            <Modal /> {/* Include modal functionality */}
            <Jobs /> {/* Jobs component rendering the jobs list */}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Shop;
