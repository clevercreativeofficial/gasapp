// components/post-card.jsx
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react'

export default function PostCard({ name, title, time, content, comments, likes, shares }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{title} · {time}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={18} />
        </button>
      </div>
      
      <p className="mt-4 text-gray-700">{content}</p>
      
      <div className="flex justify-between mt-5 pt-4 border-t border-gray-100">
        <button className="flex items-center text-gray-500 hover:text-red-500 text-sm">
          <Heart size={18} className="mr-1" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-blue-500 text-sm">
          <MessageCircle size={18} className="mr-1" />
          <span>{comments}</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-green-500 text-sm">
          <Share size={18} className="mr-1" />
          <span>{shares}</span>
        </button>
      </div>
    </div>
  )
}