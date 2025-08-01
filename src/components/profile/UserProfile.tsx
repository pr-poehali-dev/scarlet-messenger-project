import { useState } from 'react'
import Icon from '@/components/ui/icon'

export const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    username: 'Космический Пилот',
    discriminator: '#4521',
    email: 'pilot@space.com',
    avatar: '👨‍🚀',
    status: 'online' as 'online' | 'away' | 'busy' | 'invisible',
    customStatus: 'Исследую космические дали',
    aboutMe: 'Опытный астронавт с 15-летним стажем космических полетов. Специализируюсь на межпланетных миссиях и исследовании дальнего космоса.'
  })

  const handleSave = () => {
    setIsEditing(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500'
      case 'away': return 'bg-yellow-500'
      case 'busy': return 'bg-red-500'
      case 'invisible': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="relative">
        <div className="h-32 bg-scarlet-gradient" />
        
        <div className="relative px-6 pb-6">
          <div className="flex items-end space-x-4 -mt-16">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-scarlet-600/80 flex items-center justify-center text-white text-3xl border-4 border-gray-900 backdrop-blur-glass">
                {profile.avatar}
              </div>
              <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-3 border-gray-900 ${getStatusColor(profile.status)}`} />
            </div>
            
            <div className="flex-1 text-white">
              <h1 className="text-2xl font-bold">{profile.username}</h1>
              <p className="text-gray-300">{profile.discriminator}</p>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 bg-glass-dark/40 backdrop-blur-glass border border-glass-border/30 rounded-lg text-white hover:bg-glass-light/20 transition-colors"
            >
              {isEditing ? 'Сохранить' : 'Редактировать'}
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-6">
        <div className="bg-glass-dark/30 backdrop-blur-glass border border-glass-border/30 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4">Моя учетная запись</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-gray-300 text-sm">Имя пользователя</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profile.username}
                    onChange={(e) => setProfile({...profile, username: e.target.value})}
                    className="block w-full mt-1 px-3 py-2 bg-glass-dark/40 border border-glass-border/30 rounded-lg text-white backdrop-blur-glass focus:outline-none focus:ring-2 focus:ring-scarlet-500/50"
                  />
                ) : (
                  <p className="text-white font-medium">{profile.username}{profile.discriminator}</p>
                )}
              </div>
            </div>

            <div>
              <label className="text-gray-300 text-sm">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className="block w-full mt-1 px-3 py-2 bg-glass-dark/40 border border-glass-border/30 rounded-lg text-white backdrop-blur-glass focus:outline-none focus:ring-2 focus:ring-scarlet-500/50"
                />
              ) : (
                <p className="text-white">{profile.email}</p>
              )}
            </div>

            <div>
              <label className="text-gray-300 text-sm">Пользовательский статус</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profile.customStatus}
                  onChange={(e) => setProfile({...profile, customStatus: e.target.value})}
                  className="block w-full mt-1 px-3 py-2 bg-glass-dark/40 border border-glass-border/30 rounded-lg text-white backdrop-blur-glass focus:outline-none focus:ring-2 focus:ring-scarlet-500/50"
                  placeholder="Чем вы занимаетесь?"
                />
              ) : (
                <p className="text-white">{profile.customStatus}</p>
              )}
            </div>

            <div>
              <label className="text-gray-300 text-sm">О себе</label>
              {isEditing ? (
                <textarea
                  value={profile.aboutMe}
                  onChange={(e) => setProfile({...profile, aboutMe: e.target.value})}
                  rows={4}
                  className="block w-full mt-1 px-3 py-2 bg-glass-dark/40 border border-glass-border/30 rounded-lg text-white backdrop-blur-glass focus:outline-none focus:ring-2 focus:ring-scarlet-500/50 resize-none"
                  placeholder="Расскажите о себе..."
                />
              ) : (
                <p className="text-white">{profile.aboutMe}</p>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 flex space-x-3">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-scarlet-600 hover:bg-scarlet-700 text-white rounded-lg transition-colors"
              >
                Сохранить изменения
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-glass-dark/40 border border-glass-border/30 text-white rounded-lg hover:bg-glass-light/20 transition-colors"
              >
                Отмена
              </button>
            </div>
          )}
        </div>

        <div className="bg-glass-dark/30 backdrop-blur-glass border border-glass-border/30 rounded-xl p-6">
          <h3 className="text-white font-semibold mb-4">Активность</h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-scarlet-600/80 rounded-lg flex items-center justify-center">
                <Icon name="MessageCircle" size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm">Сообщений отправлено</p>
                <p className="text-gray-400 text-xs">1,247 за этот месяц</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-scarlet-600/80 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white text-sm">Время в голосовых каналах</p>
                <p className="text-gray-400 text-xs">47 часов за этот месяц</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}