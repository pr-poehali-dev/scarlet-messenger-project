import Icon from '@/components/ui/icon'
import { cn } from '@/lib/utils'

interface SidebarProps {
  activeView: 'chat' | 'servers' | 'friends' | 'profile' | 'settings' | 'voice'
  onViewChange: (view: 'chat' | 'servers' | 'friends' | 'profile' | 'settings' | 'voice') => void
}

export const Sidebar = ({ activeView, onViewChange }: SidebarProps) => {
  const menuItems = [
    { id: 'chat' as const, icon: 'MessageCircle', label: 'Чаты' },
    { id: 'servers' as const, icon: 'Server', label: 'Серверы' },
    { id: 'friends' as const, icon: 'Users', label: 'Друзья' },
    { id: 'voice' as const, icon: 'Phone', label: 'Голосовые' },
    { id: 'profile' as const, icon: 'User', label: 'Профиль' },
    { id: 'settings' as const, icon: 'Settings', label: 'Настройки' },
  ]

  return (
    <div className="w-20 h-full flex flex-col items-center py-4 space-y-2">
      <div className="mb-6">
        <div className="w-12 h-12 bg-scarlet-600 rounded-full flex items-center justify-center shadow-glass">
          <span className="text-white font-bold text-xl">С</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200",
              "backdrop-blur-glass border border-glass-border/30 shadow-glass-inset",
              "hover:bg-glass-light hover:scale-105",
              activeView === item.id 
                ? "bg-scarlet-600/80 text-white border-scarlet-500" 
                : "bg-glass-dark/40 text-gray-300 hover:text-white"
            )}
            title={item.label}
          >
            <Icon name={item.icon} size={20} />
          </button>
        ))}
      </div>

      <div className="mt-auto">
        <div className="w-10 h-10 bg-scarlet-700 rounded-full flex items-center justify-center">
          <Icon name="User" size={16} className="text-white" />
        </div>
      </div>
    </div>
  )
}