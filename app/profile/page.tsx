import { assets } from "@/public/assets";
import Image from "next/image";
import AddPost from "@/components/addPost";
import Post from "@/components/post";
import Sidebar from "@/components/sidebar";
import User from "@/components/user";
import Footer from "@/components/footer_sm";
//import Link from "next/link";
import Container from "@/components/container";

function Profile() {
  return (
    <>
      <Container>
        <div className="relative w-full lg:h-80 h-52 bg-primary-100 overflow-hidden rounded-none lg:rounded-b-3xl">
          <small className="absolute w-8 h-8 right-4 top-4 flex gap-2 justify-center items-center cursor-pointer text-background bg-foreground bg-opacity-30 p-2 rounded-full">
            <i className="fi fi-rr-camera translate-y-0.5"></i>
          </small>
          <Image
            className="w-full h-full object-cover"
            src={assets.profile}
            alt=""
          />
        </div>

        <div className="relative w-full h-[150px] grid grid-cols-1 place-items-center">
          <div className="relative lg:absolute lg:left-14 lg:w-40 lg:h-40 w-32 h-32 -translate-y-1/2  border-4 lg:border-8 border-background bg-background rounded-full overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={assets.profile}
              alt=""
            />
          </div>

          {/* Online status */}
          <div className="absolute lg:left-14 lg:w-40 lg:h-40 w-32 h-32 -translate-y-1/2">
            <div className="w-6 h-6 absolute bottom-3 right-4 bg-accent border-4 border-background rounded-full"></div>
          </div>

          <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center lg:pl-[275px] lg:translate-y-0 -translate-y-1/2 gap-4 px-4 ">
            <div className="flex flex-col items-center lg:items-start gap-2">
              <h1 className="lg:text-4xl text-2xl flex gap-2 items-center font-bold text-foreground">
                Emily Rose
                <i className="fi fi-sr-shield-trust text-accent text-xl translate-y-1"></i>
              </h1>
              <p className="text-foreground/50">32K Follows 254 · Online</p>
            </div>

            <div className="">
              <small className="w-[115px] right-4 top-4 flex gap-2 justify-center items-center cursor-pointer text-background bg-primary-500 p-2 rounded-full">
                <i className="fi fi-rr-user-pen translate-y-0.5"></i>
                Edit Profile
              </small>
            </div>
          </div>
        </div>

        <div>
          <div className="flex md:justify-between justify-center gap-6">
            {/* sidebar */}
            <div className="hidden md:block">
              <Sidebar>
                <div className="h-full flex flex-col">
                  <div className="flex flex-col">
                    <div className="mb-8">
                      <h2 className=" text-foreground text-xl font-medium mb-2 flex justify-between items-center">
                        Intro
                      </h2>
                      <p className="mb-4 text-foreground/60 text-sm font-light">
                        I am a Senior Graphic Designer & Software Engineer,Lorem
                        ipsum dolor sit.
                      </p>
                      <ul className="flex flex-col gap-2">
                        <li className="flex items-center gap-1 font-light text-sm text-foreground">
                          <i className="fi fi-sr-info translate-y-0.5"></i>
                          <span className="font-medium">Profile: </span>Graphic
                          Designer
                        </li>
                        <li className="flex items-center gap-1 font-light text-sm text-foreground">
                          <i className="fi fi-sr-briefcase translate-y-0.5"></i>
                          <span className="inline-block font-medium">
                            Software Engineer:{" "}
                          </span>
                          TheCreative House
                        </li>
                        <li className="flex items-center gap-1 font-light text-sm text-foreground">
                          <i className="fi fi-sr-graduation-cap translate-y-0.5"></i>
                          <span className="font-medium">Studied at </span>ETSA
                          Gitega
                        </li>
                        <li className="flex items-center gap-1 font-light text-sm text-foreground">
                          <i className="fi fi-sr-house-chimney translate-y-0.5"></i>
                          <span className="font-medium">Lives in </span>Bujumbura
                        </li>
                        <li className="flex items-center gap-1 font-light text-sm text-foreground">
                          <i className="fi fi-sr-envelope translate-y-0.5"></i>
                          <span className="font-medium">Email: </span>
                          contact@klevadev.com
                        </li>
                      </ul>
                    </div>
                    <div className="mb-8">
                      <h2 className=" text-foreground text-xl font-medium mb-2 flex justify-between items-center">
                        Photos
                        <small className="text-sm text-foreground/50 cursor-pointer">
                          See all
                        </small>
                      </h2>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <Image
                          className="h-20 w-full object-cover rounded-lg"
                          src="https://media.istockphoto.com/id/1360681083/photo/little-sister-hugging-and-kissing-her-brother-in-grass-field.jpg?s=612x612&w=0&k=20&c=QP1ljKjxYiMgmC-s6gduDLRxgZ1RX3lNbX8TxUplIk4="
                          alt=""
                          width={100}
                          height={100}
                        />
                        <Image
                          className="h-20 object-cover rounded-lg"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s"
                          alt=""
                          width={100}
                          height={100}
                        />
                        <Image
                          className="h-20 w-full object-cover rounded-lg"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPf8V6rmTuaBVaC5Y3Sl1SLAHoICWGW4Qmrm0gZfBPHghTAHKDv_gRsi6zo814F1UlmQI&usqp=CAU"
                          alt=""
                          width={100}
                          height={100}
                        />
                        <Image
                          className="h-20 w-full object-cover rounded-lg"
                          src="https://images.unsplash.com/photo-1444594975920-e69885b357d5?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                          alt=""
                          width={100}
                          height={100}
                        />
                        <Image
                          className="h-20 w-full object-cover rounded-lg"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlH0wa8lnlAe7L5KMHEAK_xXpc-awquzXHj-T0FRnji_3Rv1rZ2U3CztQC22rTnAE8BS0&usqp=CAU"
                          alt=""
                          width={100}
                          height={100}
                        />
                        <Image
                          className="h-20 w-full object-cover rounded-lg"
                          src="https://media.istockphoto.com/id/174104033/photo/young-couple-hugging-on-the-city-road.jpg?s=612x612&w=0&k=20&c=qp_KvTK3_YOcx0X8zEJdaU_9sGg_ii_IyAVXqdXFMYY="
                          alt=""
                          width={100}
                          height={100}
                        />

                        <Image
                          className="h-20 w-full object-cover rounded-lg"
                          src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
                          alt=""
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    
                    <div className="">
                      <Footer />
                    </div>
                  </div>
                </div>
              </Sidebar>
            </div>

            <div className="max-w-[calc(1200px-275px)] flex gap-6">
              <main className="flex-1">

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
        </div>
      </Container>
    </>
  );
}

export default Profile;
