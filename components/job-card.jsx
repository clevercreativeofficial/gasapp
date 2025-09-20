// components/job-card.jsx
import { MapPin, Clock, DollarSign, Bookmark } from 'lucide-react'

export default function JobCard({ company, logoBg, position, location, type, salary, posted, featured }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className={`w-12 h-12 ${logoBg} rounded-lg flex items-center justify-center`}>
          <span className="font-bold text-gray-800">{company.charAt(0)}</span>
        </div>
        <button className="text-gray-400 hover:text-purple-600">
          <Bookmark size={18} />
        </button>
      </div>
      
      <h3 className="font-semibold mt-4 text-lg">{position}</h3>
      <p className="text-gray-600 text-sm mt-1">{company}</p>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <MapPin size={14} className="mr-2" />
          {location}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Clock size={14} className="mr-2" />
          {type}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <DollarSign size={14} className="mr-2" />
          {salary}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <span className="text-xs text-gray-400">{posted}</span>
        {featured && (
          <span className="text-xs bg-purple-50 text-purple-600 px-2 py-1 rounded-full">Featured</span>
        )}
      </div>
    </div>
  )
}