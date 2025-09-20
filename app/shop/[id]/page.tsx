"use client";
// import { assets } from "@/public/assets";
import Link from "next/link";
import Footer from "@/components/footer_sm";
import Sidebar from "@/components/sidebar";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator"
import Container from "@/components/container";
import Image from "next/image";
import { Bookmark, Share2, MapPin, Heart, MessageCircle, Reply, MoreVertical, Flag, UserRoundPlus, SendHorizontal } from "lucide-react";

const Item = () => {
  const comments = [
    {
      profile: "https://mighty.tools/mockmind-api/content/human/124.jpg",
      fullname: "Emily Rose",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus",
      place: "Bujumbura",
      time: "9 Nov 2025"
    },
    {
      profile: "https://mighty.tools/mockmind-api/content/cartoon/26.jpg",
      fullname: "Awa Melvine",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus",
      place: "Gitega",
      time: "9 Nov 2025"
    },
    {
      profile: "https://mighty.tools/mockmind-api/content/human/124.jpg",
      fullname: "Emily Rose",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus",
      place: "Bujumbura",
      time: "9 Nov 2025"
    },
    {
      profile: "https://mighty.tools/mockmind-api/content/human/124.jpg",
      fullname: "Emily Rose",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus",
      place: "Bujumbura",
      time: "9 Nov 2025"
    },
  ];

  return (
    <Container>
      <div className='flex md:justify-between justify-center gap-3'>
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
        <div className='w-full flex md:justify-between justify-center gap-3'>
          {/* Products Section */}
          <div className='relative md:pt-3 pt-2 w-full flex flex-col gap-3 overflow-hidden'>
            <div className='grid grid-cols-1'>
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <div className="w-full grid grid-cols-1 rounded-xl overflow-hidden">
                      <Image
                        className="w-full h-full object-cover z-10"
                        src="https://media.s-bol.com/80Kl9xEJYmGm/ENrAMl/550x550.jpg"
                        width={500}
                        height={500}
                        alt="product image"
                        unoptimized
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="w-full grid grid-cols-1 rounded-xl overflow-hidden">
                      <Image
                        className="w-full h-full object-cover z-10"
                        src="https://www.bhphotovideo.com/images/images500x500/apple_mgyj3am_a_airpods_max_silver_1607506546_1610234.jpg"
                        width={500}
                        height={500}
                        alt="product image"
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>

                <CarouselPrevious className="left-4 h-9 w-9 bg-background/80 backdrop-blur-sm border-border/30 opacity-90 hover:opacity-100 hover:bg-background transition-all" />
                <CarouselNext className="right-4 h-9 w-9 bg-background/80 backdrop-blur-sm border-border/30 opacity-90 hover:opacity-100 hover:bg-background transition-all" />
              </Carousel>

            </div>

            <div className='w-full bg-card rounded-xl p-6 mb-4'>
              <h2 className='font-semibold text-xl mb-4 text-foreground'>
                Comments
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
                </span>
              </h2>

              <div className='flex flex-col gap-6'>
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className='flex flex-col gap-3 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-200'
                  >
                    <div className='flex justify-between items-start'>
                      <div className='flex gap-3'>
                        <Avatar className="h-10 w-10 border-2 border-background">
                          <AvatarImage
                            src={comment.profile}
                            className="object-cover"
                            alt={comment.fullname}
                          />
                          <AvatarFallback className="bg-primary/10 text-primary font-medium">
                            {comment.fullname.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col'>
                          <h3 className='font-medium text-foreground'>
                            {comment.fullname}
                          </h3>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <small className='text-muted-foreground text-sm'>
                              {comment.place}
                            </small>
                          </div>
                        </div>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                          <DropdownMenuItem>
                            <Flag className="mr-2 h-4 w-4" />
                            Report
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Reply className="mr-2 h-4 w-4" />
                            Reply
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <p className='text-foreground/80 text-base leading-relaxed pl-13'>
                      {comment.text}
                    </p>

                    <div className="flex items-center gap-4 pl-13 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1 hover:text-foreground cursor-pointer">
                        <Heart className="h-4 w-4" />
                        Like
                      </span>
                      <span className="flex items-center gap-1 hover:text-foreground cursor-pointer">
                        <MessageCircle className="h-4 w-4" />
                        Reply
                      </span>
                      <span className="text-xs">
                        {comment.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className='hidden md:block'>
          <Sidebar>
            <div className='h-[calc(100vh-100px)] overflow-y-auto'>
              <div className='bg-card p-6 rounded-xl'>
                <div className="flex flex-col justify-between items-start">
                  <div className='flex flex-col'>
                    <h2 className='font-semibold text-2xl text-primary'>
                      Smart Watch
                    </h2>
                    <p className='text-sm text-muted-foreground mt-1'>
                      5,545 BIF • In stock
                    </p>
                    <p className="text-sm my-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus ipsum dolor sit... (Read more)
                    </p>
                  </div>
                  <div className='flex gap-2'>
                    <Button variant='outline' size='icon' className='rounded-full h-10 w-10'>
                      <Bookmark className='h-4 w-4' />
                    </Button>
                    <Button variant='outline' size='icon' className='rounded-full h-10 w-10'>
                      <Share2 className='h-4 w-4' />
                    </Button>
                  </div>
                </div>

                <Separator className='my-6' />

                <div className='flex flex-col'>
                  <h2 className='font-semibold text-lg text-foreground mb-4'>
                    Details
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className='text-sm text-muted-foreground'>Condition</p>
                      <p className='text-sm font-medium'>New</p>
                    </div>
                    <div>
                      <p className='text-sm text-muted-foreground'>Brand</p>
                      <p className='text-sm font-medium'>Apple</p>
                    </div>
                    <div>
                      <p className='text-sm text-muted-foreground'>Size</p>
                      <p className='text-sm font-medium'>44mm</p>
                    </div>
                    <div>
                      <p className='text-sm text-muted-foreground'>Location</p>
                      <p className='text-sm font-medium'>Gitega</p>
                    </div>
                  </div>

                  <Separator className='my-6' />

                  <div>
                    <h2 className='font-semibold text-lg text-foreground mb-4'>
                      Seller information
                    </h2>
                    <div className='flex items-center justify-between mb-6'>
                      <div className='flex items-center gap-3'>
                        <Avatar className='w-12 h-12'>
                          <AvatarImage
                            className='w-full h-full aspect-square object-cover'
                            src='https://mighty.tools/mockmind-api/content/human/87.jpg'
                          />
                          <AvatarFallback className="bg-primary/10">JZ</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col'>
                          <h2 className='font-medium text-foreground'>
                            Jack Zadesh
                          </h2>
                          <small className='text-muted-foreground'>Gitega</small>
                        </div>
                      </div>
                      <Button variant="outline" className="rounded-full aspect-square gap-2">
                        <UserRoundPlus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Separator className='my-6' />

                    <h2 className='font-semibold text-lg text-foreground mb-4'>
                      Ask the seller
                    </h2>
                    <div className='relative w-full'>
                      <Textarea
                        placeholder='Type your message here...'
                        className='w-full min-h-[150px] p-4 text-foreground bg-muted/50 border-border resize-none rounded-xl pr-16'
                      />
                      <Button
                        size="icon"
                        className='absolute bottom-3 right-3 h-10 w-10 rounded-lg'
                      >
                        <SendHorizontal className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Sidebar>
        </div>
      </div>
    </Container >
  );
}

export default Item;
