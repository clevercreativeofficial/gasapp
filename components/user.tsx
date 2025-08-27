'use client'
import Link from 'next/link'
import Follow from '@/components/followBtn'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const User = () => {
    return (
      <Link href="" className="flex items-center justify-between p-3 rounded-xl hover:bg-accent/5 transition-all duration-300 group">
        <div className="flex gap-3 items-center">
          <div className="relative">
            <Avatar className="w-12 h-12 border-2 border-white group-hover:shadow-lg transition-all duration-300">
              <AvatarImage 
                src="https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/EAACMW43EZAVNDPNCAV26JZAFI.jpg" 
                alt="Carine Nippyn"
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-r from-accent/20 to-accent/10 text-foreground font-medium">
                CN
              </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-foreground truncate font-medium group-hover:text-accent transition-colors duration-300">
              Carine Nippyn
            </h3>
            <small className="text-foreground/60 text-xs">
              Los Angeles
            </small>
          </div>
        </div>

        <div className="transform translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <Follow />
        </div>
      </Link>
    );
}

export default User