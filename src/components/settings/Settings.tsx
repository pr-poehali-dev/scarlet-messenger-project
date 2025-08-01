import { useState } from 'react'
import Icon from '@/components/ui/icon'

export const Settings = () => {
  const [activeSection, setActiveSection] = useState('account')
  const [settings, setSettings] = useState({
    notifications: {
      desktop: true,
      sounds: true,
      mentions: true,
      directMessages: true
    },
    appearance: {
      theme: 'dark',
      compactMode: false,
      animationsEnabled: true
    },
    privacy: {
      showOnlineStatus: true,
      allowDirectMessages: true,
      friendRequests: 'everyone'
    }
  })

  const settingsSections = [
    { id: 'account', name: 'Моя учетная запись', icon: 'User' },
    { id: 'privacy', name: 'Конфиденциальность', icon: 'Shield' },
    { id: 'notifications', name: 'Уведомления', icon: 'Bell' },
    { id: 'appearance', name: 'Внешний вид', icon: 'Palette' },
    { id: 'voice', name: 'Голос и видео', icon: 'Mic' },
    { id: 'keybinds', name: 'Горячие клавиши', icon: 'Keyboard' },
    { id: 'advanced', name: 'Дополнительно', icon: 'Settings' }
  ]

  const handleSettingChange = (section: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }))
  }

  const renderSettingsContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Моя учетная запись</h3>
              <div className="bg-glass-dark/30 backdrop-blur-glass border border-glass-border/30 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-scarlet-600/80 rounded-full flex items-center justify-center text-white text-xl">
                    👨‍🚀
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Космический Пилот</h4>
                    <p className="text-gray-400">#4521</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-scarlet-600 hover:bg-scarlet-700 text-white rounded-lg transition-colors">
                  Редактировать профиль
                </button>
              </div>
            </div>
          </div>
        )

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Уведомления</h3>
              <div className="bg-glass-dark/30 backdrop-blur-glass border border-glass-border/30 rounded-xl p-6 space-y-4">
                {Object.entries(settings.notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div>
                      <p className="text-white capitalize">{key === 'desktop' ? 'Уведомления на рабочем столе' : 
                        key === 'sounds' ? 'Звуки уведомлений' :
                        key === 'mentions' ? 'Упоминания' : 'Личные сообщения'}</p>
                    </div>
                    <button
                      onClick={() => handleSettingChange('notifications', key, !value)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        value ? 'bg-scarlet-600' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Внешний вид</h3>
              <div className="bg-glass-dark/30 backdrop-blur-glass border border-glass-border/30 rounded-xl p-6 space-y-4">
                <div>
                  <label className="text-white block mb-2">Тема</label>
                  <select
                    value={settings.appearance.theme}
                    onChange={(e) => handleSettingChange('appearance', 'theme', e.target.value)}
                    className="w-full px-3 py-2 bg-glass-dark/40 border border-glass-border/30 rounded-lg text-white backdrop-blur-glass focus:outline-none focus:ring-2 focus:ring-scarlet-500/50"
                  >
                    <option value="dark">Темная</option>
                    <option value="light">Светлая</option>
                    <option value="auto">Автоматически</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white">Компактный режим</p>
                    <p className="text-gray-400 text-sm">Уменьшить размер элементов интерфейса</p>
                  </div>
                  <button
                    onClick={() => handleSettingChange('appearance', 'compactMode', !settings.appearance.compactMode)}
                    className={`w-12 h-6 rounded-full transition-colors ${
                      settings.appearance.compactMode ? 'bg-scarlet-600' : 'bg-gray-600'
                    }`}
                  >
                    <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                      settings.appearance.compactMode ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400">Настройки для этого раздела скоро появятся</p>
          </div>
        )
    }
  }

  return (
    <div className="flex h-full">
      <div className="w-64 bg-glass-dark/40 backdrop-blur-glass border-r border-glass-border/30">
        <div className="p-4 border-b border-glass-border/30">
          <h2 className="text-white font-semibold text-lg">Настройки</h2>
        </div>
        
        <div className="p-3">
          <div className="space-y-1">
            {settingsSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full p-3 rounded-lg flex items-center space-x-3 transition-colors ${
                  activeSection === section.id
                    ? 'bg-scarlet-600/80 text-white'
                    : 'text-gray-300 hover:bg-glass-light/20 hover:text-white'
                }`}
              >
                <Icon name={section.icon} size={18} />
                <span className="text-sm">{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto">
        {renderSettingsContent()}
      </div>
    </div>
  )
}