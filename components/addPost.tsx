"use client"
import { assets } from '@/public/assets';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from 'react'

const AddPost = () => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <Card className='w-full rounded-2xl border-border/20 bg-card transition-all duration-300 group relative overflow-hidden'>
            <CardContent className="px-4">
                <div className="w-full flex items-center gap-3 pb-4">
                    <Avatar className="h-12 w-12 border-2 border-border/20">
                        <AvatarImage src={assets.profile.src} alt={`profile`} />
                        <AvatarFallback className="bg-gradient-to-r from-accent/20 to-accent/30 text-white">
                            {"JD"}
                        </AvatarFallback>
                    </Avatar>

                    <div className="w-[calc(100%-44px)]">
                        <Input
                            type="text"
                            placeholder="What's new?"
                            className='w-full h-10 pl-4 text-lg font-normal bg-transparent border-transparent rounded-lg'
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                        />
                    </div>
                </div>

                <div className={`flex justify-between items-center mt-3 pt-4 border-t border-border/30 transition-all duration-300 ${isFocused ? 'opacity-100' : 'opacity-90'}`}>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-full hover:bg-blue-500/10 hover:text-blue-600 transition-colors duration-200 group/icon"
                        >
                            <i className="fi fi-rr-picture text-base"></i>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-full hover:bg-green-500/10 hover:text-green-600 transition-colors duration-200 group/icon"
                        >
                            <i className="fi fi-rr-play-alt text-base"></i>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-9 w-9 rounded-full hover:bg-yellow-500/10 hover:text-yellow-600 transition-colors duration-200 group/icon"
                        >
                            <i className="fi fi-rr-smile text-base"></i>
                        </Button>
                    </div>

                    <Button
                        className="px-5 h-9 bg-accent hover:bg-primary/90 text-white rounded-lg shadow-sm hover:shadow transition-all duration-200"
                    >
                        Post
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default AddPost