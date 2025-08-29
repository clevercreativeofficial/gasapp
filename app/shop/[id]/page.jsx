"use client";
// import { assets } from "@/public/assets";
import Link from "next/link";
import Footer from "../../components/footer/Footer_sm";
import Sidebar from "../../components/Sidebar";
import Carousel from "@/app/components/Carousel";
import Button from "@/app/components/buttons/Button_sm";
import Container from "@/app/components/Container";

function Item() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const comments = [
    {
      profile: 'https://mighty.tools/mockmind-api/content/human/124.jpg',
      fullname: 'Emily Rose',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus',
      place : 'Bujumbura'
    },
    {
      profile: 'https://mighty.tools/mockmind-api/content/cartoon/26.jpg',
      fullname: 'Awa Melvine',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus',
      place : 'Gitega'
    },
    {
      profile: 'https://mighty.tools/mockmind-api/content/human/124.jpg',
      fullname: 'Emily Rose',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus',
      place : 'Bujumbura'
    },
    {
      profile: 'https://mighty.tools/mockmind-api/content/human/124.jpg',
      fullname: 'Emily Rose',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus',
      place : 'Bujumbura'
    },
  ]

  return (
    <Container>
      <div className="flex md:justify-between justify-center gap-3">
        {/* sidebar */}
        <div className="hidden md:block my-3">
          <Sidebar>
            <div className="h-full flex flex-col py-4">
              <div className="h-[calc(100vh-250px)] flex flex-col overflow-y-auto">
                <ul className="flex flex-col gap-5 mb-6">
                  <li className="text-gray-600 group hover:text-primary-500 duration-150">
                    <Link href="/profile" className="flex items-center gap-2">
                      <i className="fi fi-rr-user group-hover:text-primary-500 text-primary-dark duration-150 translate-y-0.5"></i>
                      Profile
                    </Link>
                  </li>
                  <li className="text-gray-600 group hover:text-primary-500 duration-150">
                    <Link href="/" className="flex items-center gap-2">
                      <i className="fi fi-rr-newspaper group-hover:text-primary-500 text-primary-dark duration-150 translate-y-0.5"></i>
                      News feed
                    </Link>
                  </li>
                  <li className="text-gray-600 group hover:text-primary-500 duration-150">
                    <Link href="/" className="flex items-center gap-2">
                      <i className="fi fi-rr-users group-hover:text-primary-500 text-primary-dark duration-150 translate-y-0.5"></i>
                      Friends
                    </Link>
                  </li>
                  <li className="text-gray-600 group hover:text-primary-500 duration-150">
                    <Link href="/" className="flex items-center gap-2">
                      <i className="fi fi-rr-play-alt group-hover:text-primary-500 text-primary-dark duration-150 translate-y-0.5"></i>
                      Watch videos
                    </Link>
                  </li>

                  <li className="text-gray-600 group hover:text-primary-500 duration-150">
                    <Link href="/" className="flex items-center gap-2">
                      <i className="fi fi-rr-images group-hover:text-primary-500 text-primary-dark duration-150 translate-y-0.5"></i>
                      Photos
                    </Link>
                  </li>

                  <li className="text-gray-600 group hover:text-primary-500 duration-150">
                    <Link href="/shop" className="flex items-center gap-2">
                      <i className="fi fi-rr-shopping-bag group-hover:text-primary-500 text-primary-dark duration-150 translate-y-0.5"></i>
                      Marketplace
                    </Link>
                  </li>

                  <li className="text-gray-600 group hover:text-primary-500 duration-150">
                    <Link href="/" className="flex items-center gap-2">
                      <i className="fi fi-rr-heart group-hover:text-primary-500 text-primary-dark duration-150 translate-y-0.5"></i>
                      Wishlist
                    </Link>
                  </li>

                  <li className="text-gray-600 group hover:text-primary-500 duration-150">
                    <Link href="/" className="flex items-center gap-2">
                      <i className="fi fi-rr-bookmark group-hover:text-primary-500 text-primary-dark duration-150 translate-y-0.5"></i>
                      Bookmarks
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="absolute left-3 bottom-5">
                <Footer />
              </div>
            </div>
          </Sidebar>
        </div>
        <div className="w-full flex md:justify-between justify-center gap-3">
          {/* Products Section */}
          <div className="relative md:pt-3 pt-2 w-full flex flex-col gap-3 overflow-hidden">
            <div className="grid grid-cols-1 mb-5">
              <Carousel settings={settings}>
                <div className="w-full grid grid-cols-1 rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover z-10"
                    src="https://media.s-bol.com/80Kl9xEJYmGm/ENrAMl/550x550.jpg"
                  />
                </div>
                <div className="w-full grid grid-cols-1 rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover z-10"
                    src="https://www.bhphotovideo.com/images/images500x500/apple_mgyj3am_a_airpods_max_silver_1607506546_1610234.jpg"
                  />
                </div>
              </Carousel>
            </div>

            <div className="w-full bg-white rounded-lg pt-5 pb-3 px-3 border">
              <h2 className="font-semibold text-lg text-gray-700">
                Description
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, voluptatibus. Magni, nisi accusamus voluptate cumque,
                vitae excepturi, aliquam unde cupiditate praesentium quaerat
                magnam ex aliquid.
              </p>
            </div>

            <div className="md:hidden block">
            <div className="bg-white p-3 border rounded-lg">
                  <h2 className="font-semibold text-2xl text-primary-500">
                    Smart whatch
                  </h2>
                  <p className="text-sm text-gray-700 mb-4">
                    5.545 BIF In stock
                  </p>
                  <div className="my-3 flex gap-2">
                    <Button variant="secondary">
                      <i className="fi fi-rr-bookmark"></i>
                    </Button>
                    <Button variant="secondary">
                      <i className="fi fi-rr-redo"></i>
                    </Button>
                  </div>

                  <div className="flex flex-col">
                    <h2 className="font-semibold text-lg pt-5 text-gray-700">
                      Details
                    </h2>
                    <ul>
                      <li className="text-sm my-1 text-gray-600">Condition</li>
                      <li className="text-sm my-1 text-gray-600">Brand</li>
                      <li className="text-sm my-1 text-gray-600">Size</li>
                      <li className="text-sm my-1 text-gray-600">Location</li>
                    </ul>
                    <div>
                      <h2 className="font-semibold text-lg pt-5 text-gray-700">
                        Seller information
                      </h2>
                      <div className="flex items-center justify-between mt-2 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                              className="w-full h-full aspect-square object-cover"
                              src="https://mighty.tools/mockmind-api/content/human/87.jpg"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h2 className="font-normal text-lg text-gray-700">
                              Jack Zadesh
                            </h2>
                            <small className="text-gray-600">Gitega</small>
                          </div>
                        </div>
                      </div>
                      <Button variant="primary">Follow</Button>
                      <h2 className="font-semibold text-lg pt-5 text-gray-700">
                        Ask the seller
                      </h2>
                      <form className="relative w-full mt-2">
                        <textarea
                          name=""
                          id=""
                          placeholder="Message..."
                          className="w-full min-h-[150px] p-3 text-sm text-gray-600 bg-gray-100 outline-none rounded-lg"
                        ></textarea>
                        <button className="absolute bottom-2 right-2 h-10 aspect-square justify-center p-4 text-sm rounded-lg transition-colors duration-200 flex gap-2 items-center bg-gray-200 text-gray-700 hover:text-white hover:bg-primary-500">
                          <i className="fi fi-rr-paper-plane-top"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
            </div>

            <div className="w-full bg-white rounded-lg py-3 px-3 border">
              <h2 className="font-semibold text-lg mb-3 text-gray-700">Comments</h2>
              <div className="flex flex-col gap-6">

                {/* comments */}
                {comments.map((comment, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <img
                          className="w-12 h-12 object-cover rounded-xl"
                          src={comment.profile}
                          alt=""
                        />
                        <div className="flex flex-col">
                          <h2 className="font-normal text-lg text-gray-700">
                            {comment.fullname}
                          </h2>
                          <small className="text-gray-600">
                            {comment.place}
                          </small>
                        </div>
                      </div>
                      <div className="h-[30px] flex items-center text-white cursor-pointer bg-gray-900 bg-opacity-20 rounded-full z-10">
                        <i className="fi fi-sr-menu-dots-vertical translate-y-0.5"></i>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">{comment.text}</div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden md:block">
            <Sidebar>
              <div className="h-[calc(100vh-100px)] overflow-y-auto ">
                <div className="bg-white p-3 border rounded-lg">
                  <h2 className="font-semibold text-2xl text-primary-500">
                    Smart whatch
                  </h2>
                  <p className="text-sm text-gray-700 mb-4">
                    5.545 BIF In stock
                  </p>
                  <div className="my-3 flex gap-2">
                    <Button variant="secondary">
                      <i className="fi fi-rr-bookmark"></i>
                    </Button>
                    <Button variant="secondary">
                      <i className="fi fi-rr-redo"></i>
                    </Button>
                  </div>

                  <div className="flex flex-col">
                    <h2 className="font-semibold text-lg pt-5 text-gray-700">
                      Details
                    </h2>
                    <ul>
                      <li className="text-sm my-1 text-gray-600">Condition</li>
                      <li className="text-sm my-1 text-gray-600">Brand</li>
                      <li className="text-sm my-1 text-gray-600">Size</li>
                      <li className="text-sm my-1 text-gray-600">Location</li>
                    </ul>
                    <div>
                      <h2 className="font-semibold text-lg pt-5 text-gray-700">
                        Seller information
                      </h2>
                      <div className="flex items-center justify-between mt-2 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img
                              className="w-full h-full aspect-square object-cover"
                              src="https://mighty.tools/mockmind-api/content/human/87.jpg"
                            />
                          </div>
                          <div className="flex flex-col">
                            <h2 className="font-normal text-lg text-gray-700">
                              Jack Zadesh
                            </h2>
                            <small className="text-gray-600">Gitega</small>
                          </div>
                        </div>
                      </div>
                      <Button variant="primary">Follow</Button>
                      <h2 className="font-semibold text-lg pt-5 text-gray-700">
                        Ask the seller
                      </h2>
                      <form className="relative w-full mt-2">
                        <textarea
                          name=""
                          id=""
                          placeholder="Message..."
                          className="w-full min-h-[150px] p-3 text-sm text-gray-600 bg-gray-100 outline-none rounded-lg"
                        ></textarea>
                        <button className="absolute bottom-2 right-2 h-10 aspect-square justify-center p-4 text-sm rounded-lg transition-colors duration-200 flex gap-2 items-center bg-gray-200 text-gray-700 hover:text-white hover:bg-primary-500">
                          <i className="fi fi-rr-paper-plane-top"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </Sidebar>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Item;
