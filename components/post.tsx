"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Share,
  Bookmark,
  Heart,
  MessageCircle,
  MoreVertical,
  UserRoundPlus,
  UserRoundCheck,
  UserMinus,
  Ban,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Props interface
interface PostProps {
  profileImg: string;
  userName: string;
  address: string;
  time: string;
  children?: React.ReactNode;
  postImages: string[];
  likes: number;
  comments: number;
  views: number;
}

const Post: React.FC<PostProps> = ({
  profileImg,
  userName,
  address,
  time,
  children,
  postImages,
  likes,
  comments,
  views,
}) => {
  const [isPostSettingVisible, setIsPostSettingVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isFollowing, setFollowing] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  // const [currentSlide, setCurrentSlide] = useState(0);
  const postSettingRef = useRef<HTMLUListElement>(null);

  // Like toggle fix — ensures state consistency
  const toggleLike = () => {
    setIsLiked((prev) => {
      setLikeCount((count) => (prev ? count - 1 : count + 1));
      return !prev;
    });
  };

  const toggleFollowing = () => {
      setFollowing((prev) => prev ? false : true);
  }

  const togglePostSetting = () => {
    setIsPostSettingVisible((prev) => !prev);
  };

  // const handleSlideChange = (index: number) => {
  //   setCurrentSlide(index);
  // };

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (postSettingRef.current && !postSettingRef.current.contains(event.target as Node)) {
        setIsPostSettingVisible(false);
      }
    };

    if (isPostSettingVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPostSettingVisible]);

  return (
    <Card className="relative w-full overflow-hidden border-border/20 bg-card/70 backdrop-blur-sm transition-all duration-300 rounded-2xl">
      {/* Header */}
      <CardHeader className="pb-2 px-5">
        <div className="flex justify-between items-center">
          {/* User Info */}
          <div className="flex items-center justify-between w-full gap-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-11 w-11 object-cover border-2 border-border/20">
                <AvatarImage src={profileImg} alt={`${userName}'s profile`} />
                <AvatarFallback className="bg-gradient-to-r from-accent/20 to-accent/10 text-foreground font-medium">
                  {userName.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-semibold text-foreground">
                    {userName}
                  </h3>
                  <i className="fi fi-sr-shield-trust text-accent" aria-hidden="true"></i>
                </div>
                <p className="text-sm text-muted-foreground">
                  {address} · {time} ago
                </p>
              </div>

            </div>
            <Button onClick={toggleFollowing} className={`${isFollowing === true ? 'bg-accent' : ''} aspect-square rounded-full bg-muted text-foreground hover:text-white hover:bg-accent`}>
              {
                isFollowing ?
                (<UserRoundCheck className="h-4 w-4" />) : (<UserRoundPlus className="h-4 w-4" />)
              }
            </Button>
          </div>

          {/* Post Settings */}
          <Button onClick={togglePostSetting} className="aspect-square rounded-full bg-transparent text-foreground hover:bg-transparent">
            <MoreVertical className="h-4 w-4" />
          </Button>

          {isPostSettingVisible && (
            <ul
              ref={postSettingRef}
              className="absolute right-4 top-16 p-2 min-w-[220px] flex flex-col gap-1 bg-card/95 backdrop-blur-lg text-sm font-normal text-foreground shadow-xl rounded-xl border border-border/30 overflow-hidden z-40"
            >
              <li className="flex items-center py-2 px-3 hover:bg-accent/10 cursor-pointer rounded-lg transition-colors">
                <Bookmark className="h-4 w-4 mr-2" />
                Save post
              </li>
              <li className="flex items-center py-2 px-3 hover:bg-accent/10 cursor-pointer rounded-lg transition-colors">
                <UserRoundPlus className="h-4 w-4 mr-2" />
                Follow {userName}
              </li>
              <li className="flex items-center py-2 px-3 hover:bg-accent/10 cursor-pointer rounded-lg transition-colors">
                <UserMinus className="h-4 w-4 mr-2" />
                Unfollow {userName}
              </li>
              <li className="flex items-center py-2 px-3 hover:bg-destructive/10 cursor-pointer rounded-lg text-destructive">
                <Ban className="h-4 w-4 mr-2" />
                Block this profile
              </li>
            </ul>
          )}
        </div>
      </CardHeader>

      {/* Caption */}
      {children && (
        <CardContent className="pb-4 pt-0 px-5">
          <p className="text-sm text-foreground/90">{children}</p>
        </CardContent>
      )}

      {/* Post Images */}
      <div className="relative">
        {postImages.length > 1 ? (
          <div className="relative w-full overflow-hidden">
            <Badge variant="secondary" className="absolute top-4 right-4 z-30 bg-background/80 backdrop-blur-sm border-border/30">
              <small>{postImages.length} photos</small>
            </Badge>

            {/* NOTE: Ensure your Carousel component supports slide change tracking */}
            <Carousel className="w-full" /* onSlideChange is custom - handle in your Carousel implementation */>
              <CarouselContent>
                {postImages.map((img, index) => (
                  <CarouselItem key={`post-image-${index}`}>
                    <div className="relative w-full lg:h-[500px] h-80 aspect-square overflow-hidden">
                      <Image
                        className="relative w-full h-full object-contain z-20"
                        src={img}
                        alt={`Post image ${index + 1}`}
                        height={500}
                        width={500}
                        priority={index === 0}
                      />
                      <Image
                        className="absolute top-0 left-0 w-full h-full object-cover scale-150 blur-xl z-0 opacity-30"
                        src={img}
                        alt=""
                        aria-hidden="true"
                        height={500}
                        width={500}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 h-9 w-9 bg-background/80 backdrop-blur-sm border-border/30 opacity-90 hover:opacity-100 hover:bg-background transition-all" />
              <CarouselNext className="right-4 h-9 w-9 bg-background/80 backdrop-blur-sm border-border/30 opacity-90 hover:opacity-100 hover:bg-background transition-all" /></Carousel>
          </div>
        ) : postImages.length > 0 ? (
          <div className="relative w-full lg:h-[500px] h-80 aspect-square overflow-hidden">
            <Image
              className="relative w-full h-full object-contain z-20"
              src={postImages[0]}
              alt="Post image"
              height={500}
              width={500}
              priority
            />
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover scale-150 blur-xl z-0 opacity-30"
              src={postImages[0]}
              alt=""
              aria-hidden="true"
              height={500}
              width={500}
            />
          </div>
        ) : null}
      </div>

      {/* Footer */}
      <CardFooter className="flex-col gap-3 p-0">
        <div className="flex justify-between w-full px-5">
          <div className="flex gap-2">
            <Button
              variant={isLiked ? "default" : "outline"}
              size="sm"
              onClick={toggleLike}
              className={`${isLiked ? "bg-rose-500/10 text-rose-500" : ""} border-transparent gap-2 rounded-full transition-all duration-200 hover:bg-rose-500/20`}
            >
              <Heart
                className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`}
              />
              <span>{likeCount}</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2 border-transparent rounded-full transition-all duration-200 hover:bg-accent/10">
              <MessageCircle className="h-4 w-4" />
              <span>{comments}</span>
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="gap-2 rounded-full text-muted-foreground hover:text-white transition-colors">
              <Eye className="h-4 w-4" />
              <span>{views}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-muted-foreground hover:text-white transition-colors"
            >
              <Share className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsBookmarked((prev) => !prev)}
              className="rounded-full text-muted-foreground hover:text-white transition-colors"
            >
              <Bookmark
                className={`h-4 w-4 ${isBookmarked ? "fill-current text-primary" : ""}`}
              />
            </Button>
          </div>
        </div>

        {/* Comment Input */}
        <div className="flex items-center gap-3 w-full px-5">
          <Avatar className="h-12 w-12 border-2 border-border/20">
            <AvatarImage src={profileImg} alt={`${userName}'s profile`} />
            <AvatarFallback className="bg-gradient-to-r from-accent/20 to-accent/30 text-white">
              {userName.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex w-full items-center gap-2 bg-muted/30 rounded-full px-3 py-1 border border-border/20 transition-all duration-200 focus-within:border-border/40 focus-within:bg-muted/50">
            <Input
              type="text"
              placeholder="Write a comment..."
              className="pl-2 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/70"
            />
            <Button variant="ghost" className="rounded-full text-muted-foreground hover:text-accent">
              Post
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Post;
