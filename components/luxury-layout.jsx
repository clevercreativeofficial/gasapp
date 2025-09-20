// components/luxury-layout.jsx
"use client"
import { useState } from 'react'
import { 
  Home, 
  Search, 
  Briefcase, 
  MessageCircle, 
  Bell, 
  User,
  Bookmark,
  Settings,
  LogOut
} from 'lucide-react'

export default function LuxuryLayout({ children }) {
  const [activeTab, setActiveTab] = useState('home')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex">
      {/* Sidebar Navigation */}
      <aside className="w-20 lg:w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col justify-between py-6 fixed h-screen">
        <div>
          {/* Logo */}
          <div className="px-4 mb-10">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 hidden lg:block">EliteConnect</h1>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center lg:hidden">
              <span className="text-white font-bold text-sm">EC</span>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="space-y-2">
            {[
              { id: 'home', icon: Home, label: 'Home' },
              { id: 'discover', icon: Search, label: 'Discover' },
              { id: 'jobs', icon: Briefcase, label: 'Jobs' },
              { id: 'messages', icon: MessageCircle, label: 'Messages' },
              { id: 'notifications', icon: Bell, label: 'Notifications' },
              { id: 'profile', icon: User, label: 'Profile' },
              { id: 'saved', icon: Bookmark, label: 'Saved' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full px-4 py-3 text-left transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-purple-50 text-purple-600 border-r-2 border-purple-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon size={20} />
                <span className="ml-3 hidden lg:block">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        
        {/* Bottom actions */}
        <div className="space-y-2 px-4">
          <button className="flex items-center w-full px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <Settings size={20} />
            <span className="ml-3 hidden lg:block">Settings</span>
          </button>
          <button className="flex items-center w-full px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
            <LogOut size={20} />
            <span className="ml-3 hidden lg:block">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-20 lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <div className="max-w-md w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search connections, jobs, or companies..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}