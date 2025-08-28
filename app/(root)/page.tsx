import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer_sm";
import AddPost from "@/components/addPost";
import Post from "@/components/post";
import { assets } from "@/public/assets";
import User from "@/components/user";
import Status from '@/components/status'

const page = () => {
  return (
    <Container>
      <div className="flex md:justify-between justify-center gap-6">
        {/* sidebar */}
        <div className="hidden md:block">
          <Sidebar>
            <div className="h-full flex flex-col">
              <div className="flex flex-col">
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-foreground mb-4 px-2">Menu</h2>
                  <ul className="flex flex-col">
                    <li className="text-foreground/80 group hover:bg-accent/10 rounded-lg duration-200">
                      <Link href="/profile" className="flex items-center gap-3 p-3">
                        <i className="fi fi-rr-user text-accent duration-200 translate-y-0.5"></i>
                        <span className="font-medium">Profile</span>
                      </Link>
                    </li>
                    <li className="text-foreground/80 group hover:bg-accent/10 rounded-lg duration-200">
                      <Link href="/" className="flex items-center gap-3 p-3">
                        <i className="fi fi-rr-newspaper text-accent duration-200 translate-y-0.5"></i>
                        <span className="font-medium">News feed</span>
                      </Link>
                    </li>
                    <li className="text-foreground/80 group hover:bg-accent/10 rounded-lg duration-200">
                      <Link href="/" className="flex items-center gap-3 p-3">
                        <i className="fi fi-rr-users text-accent duration-200 translate-y-0.5"></i>
                        <span className="font-medium">Friends</span>
                      </Link>
                    </li>
                    <li className="text-foreground/80 group hover:bg-accent/10 rounded-lg duration-200">
                      <Link href="/" className="flex items-center gap-3 p-3">
                        <i className="fi fi-rr-play-alt text-accent duration-200 translate-y-0.5"></i>
                        <span className="font-medium">Watch videos</span>
                      </Link>
                    </li>
                    <li className="text-foreground/80 group hover:bg-accent/10 rounded-lg duration-200">
                      <Link href="/" className="flex items-center gap-3 p-3">
                        <i className="fi fi-rr-images text-accent duration-200 translate-y-0.5"></i>
                        <span className="font-medium">Photos</span>
                      </Link>
                    </li>
                    <li className="text-foreground/80 group hover:bg-accent/10 rounded-lg duration-200">
                      <Link href="/shop" className="flex items-center gap-3 p-3">
                        <i className="fi fi-rr-shopping-bag text-accent duration-200 translate-y-0.5"></i>
                        <span className="font-medium">Marketplace</span>
                      </Link>
                    </li>
                    <li className="text-foreground/80 group hover:bg-accent/10 rounded-lg duration-200">
                      <Link href="/" className="flex items-center gap-3 p-3">
                        <i className="fi fi-rr-heart text-accent duration-200 translate-y-0.5"></i>
                        <span className="font-medium">Wishlist</span>
                      </Link>
                    </li>
                    <li className="text-foreground/80 group hover:bg-accent/10 rounded-lg duration-200">
                      <Link href="/" className="flex items-center gap-3 p-3">
                        <i className="fi fi-rr-bookmark text-accent duration-200 translate-y-0.5"></i>
                        <span className="font-medium">Bookmarks</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <Footer />
              </div>
            </div>
          </Sidebar>
        </div>

        <div className="max-w-[calc(1200px-275px)] flex gap-6">
          <main className="flex-1">
            {/* Status */}
            <div className="w-full grid grid-cols-1 mt-2">
              <Status />
            </div>

            <div className="flex items-center justify-center flex-col my-3">
              <AddPost />
            </div>

            <div className="w-full grid grid-cols-1 gap-4 mb-4">
              <Post
                profileImg={assets.profile1.src}
                userName={"Emily Rose"}
                address={"Las Vegas"}
                time={"4 minute"}
                postImages={[
                  "https://images.unsplash.com/photo-1726741696376-e405ed2b3946?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1726741694629-e224aa43f1ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
                  "https://images.unsplash.com/photo-1726741697502-34c84d9918ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
                  "https://images.unsplash.com/photo-1726741696949-348c16a3a2dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1726741694689-13b4ce907512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
                  "https://images.unsplash.com/photo-1726741695632-ba122c4a216f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1726741693950-5e6bfc408ced?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ]}
                likes={15}
                comments={5}
                views={8}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                harum, deserunt ea est non aliquid rem quisquam dolorem
                temporibus necessitatibus eum voluptates at ab, doloribus illum
                quis earum architecto ducimus fugit corporis nostrum! Eligendi.
              </Post>

              <Post
                profileImg={assets.profile4.src}
                userName={"Rosita Rositae"}
                address={"Mayotte Island"}
                time={"9 minute"}
                postImages={[
                  "https://images.unsplash.com/photo-1726741693627-811336dd4dd6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1726741696752-0e704789d666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
                  "https://images.unsplash.com/photo-1726741696951-de8652f2c1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
                ]}
                likes={5}
                comments={10}
                views={584}
              >
                This one must be the first caption...
              </Post>

              <Post
                profileImg={assets.profile1.src}
                userName={"Emily Rose"}
                address={"Las Vegas"}
                time={"4 minute"}
                postImages={[
                  "https://images.unsplash.com/photo-1591752270708-d2de0f30f7ec?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1591751675630-498149a1aa89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
                ]}
                likes={15}
                comments={5}
                views={8}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                harum, deserunt ea est non aliquid rem quisquam dolorem
                temporibus necessitatibus eum voluptates at ab, doloribus illum
                quis earum architecto ducimus fugit corporis nostrum! Eligendi.
              </Post>

              <Post
                profileImg={assets.profile4.src}
                userName={"Rosita Rositae"}
                address={"Mayotte Island"}
                time={"9 minute"}
                postImages={[
                  "https://images.unsplash.com/photo-1726741692098-5d56e33b07ae?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1726741691832-e7a9e800fff5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  "https://images.unsplash.com/photo-1726741692461-f04c5c732cd6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ]}
                likes={0}
                comments={0}
                views={584}
              >
                This one must be the first caption...
              </Post>

              <Post
                profileImg={assets.profile.src}
                userName={"Emily Rose"}
                address={"Mayotte Island"}
                time={"9 minute"}
                postImages={[
                  "https://images.unsplash.com/photo-1687965641843-7dd4518f89e1?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                ]}
                likes={0}
                comments={0}
                views={584}
              ></Post>
            </div>
          </main>

          {/* Right Sidebar */}
          <div className="sticky top-24 hidden lg:block my-2">
            <Sidebar>
              <div className="h-[calc(100vh-70px)] flex flex-col gap-4">
                {/* Sponsors */}
                <div className="py-5 px-5 bg-[var(--card)] rounded-xl">
                  <h2 className="font-semibold mb-4 text-lg text-foreground">Sponsored</h2>
                  <div className="w-full rounded-lg overflow-hidden mt-4">
                    <Image
                      src="https://www.bancobu.com/images/webBancobu.jpg"
                      alt="Sponsored content"
                      width={500}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="font-medium mt-4 text-foreground">Premium Banking Solutions</h3>
                  <p className="text-sm text-foreground/70 mt-2">
                    Experience the future of banking with our premium services tailored for professionals.
                  </p>
                </div>

                {/* Meet new people */}
                <div className="py-5 px-5 bg-[var(--card)] rounded-xl mb-4">
                  <h2 className="font-semibold mb-4 text-lg text-foreground">Meet new people</h2>
                  <p className="text-sm text-foreground/70 mb-4">
                    Connect with professionals in your industry
                  </p>
                  <div className="w-full flex flex-col mb-4 gap-2">
                    <User />
                    <User />
                    <User />
                    <User />
                    <User />
                  </div>
                </div>
              </div>
            </Sidebar>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;