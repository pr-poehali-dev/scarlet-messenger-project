import { useState } from 'react'
import Icon from '@/components/ui/icon'

interface Friend {
  id: string
  name: string
  avatar: string
  status: 'online' | 'offline' | 'busy' | 'away'
  activity?: string
}

export const FriendsList = () => {
  const [activeTab, setActiveTab] = useState<'online' | 'all' | 'pending' | 'blocked'>('online')

  const friends: Friend[] = [
    {
      id: '1',
      name: 'Космический Инженер',
      avatar: '🔧',
      status: 'online',
      activity: 'В миссии на Марс'
    },
    {
      id: '2',
      name: 'Командир Экипажа',
      avatar: '⭐',
      status: 'online',
      activity: 'Играет в Kerbal Space Program'
    },
    {
      id: '3',
      name: 'Навигатор',
      avatar: '🧭',
      status: 'away',
      activity: 'Отошел'
    },
    {
      id: '4',
      name: 'Биолог',
      avatar: '🌱',
      status: 'offline'
    },
    {
      id: '5',
      name: 'Геолог',
      avatar: '🪨',
      status: 'busy',
      activity: 'Анализирует образцы'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500'
      case 'away': return 'bg-yellow-500'
      case 'busy': return 'bg-red-500'
      case 'offline': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'В сети'
      case 'away': return 'Отошел'
      case 'busy': return 'Занят'
      case 'offline': return 'Не в сети'
      default: return 'Неизвестно'
    }
  }

  const filteredFriends = friends.filter(friend => {
    switch (activeTab) {
      case 'online': return friend.status === 'online'
      case 'all': return true
      case 'pending': return false
      case 'blocked': return false
      default: return true
    }
  })

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-glass-border/30">
        <h2 className="text-white font-semibold text-xl mb-4">Друзья</h2>
        
        <div className="flex space-x-1 bg-glass-dark/40 rounded-lg p-1 backdrop-blur-glass">
          {[
            { key: 'online', label: 'В сети', count: friends.filter(f => f.status === 'online').length },
            { key: 'all', label: 'Все', count: friends.length },
            { key: 'pending', label: 'Ожидающие', count: 0 },
            { key: 'blocked', label: 'Заблокированные', count: 0 },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-scarlet-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-glass-light/20'
              }`}
            >
              {tab.label} {tab.count > 0 && `(${tab.count})`}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {filteredFriends.map((friend) => (
            <div
              key={friend.id}
              className="p-4 rounded-xl bg-glass-dark/30 backdrop-blur-glass border border-glass-border/30 hover:bg-glass-light/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-scarlet-600/80 flex items-center justify-center text-white text-lg">
                      {friend.avatar}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800 ${getStatusColor(friend.status)}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-white font-medium">{friend.name}</h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-gray-400">{getStatusText(friend.status)}</span>
                      {friend.activity && (
                        <>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-300">{friend.activity}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg bg-glass-dark/40 hover:bg-scarlet-600/50 transition-colors">
                    <Icon name="MessageCircle" size={16} className="text-gray-300 hover:text-white" />
                  </button>
                  <button className="p-2 rounded-lg bg-glass-dark/40 hover:bg-green-600/50 transition-colors">
                    <Icon name="Phone" size={16} className="text-gray-300 hover:text-white" />
                  </button>
                  <button className="p-2 rounded-lg bg-glass-dark/40 hover:bg-glass-light/30 transition-colors">
                    <Icon name="MoreHorizontal" size={16} className="text-gray-300 hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}