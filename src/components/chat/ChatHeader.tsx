import Icon from '@/components/ui/icon'

interface ChatHeaderProps {
  channelName: string
}

export const ChatHeader = ({ channelName }: ChatHeaderProps) => {
  return (
    <div className="h-16 px-6 flex items-center justify-between border-b border-glass-border/30 backdrop-blur-glass">
      <div className="flex items-center space-x-3">
        <Icon name="Hash" size={20} className="text-scarlet-400" />
        <h2 className="text-white font-semibold text-lg">{channelName}</h2>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-lg hover:bg-glass-light/30 transition-colors">
          <Icon name="Users" size={18} className="text-gray-300 hover:text-white" />
        </button>
        <button className="p-2 rounded-lg hover:bg-glass-light/30 transition-colors">
          <Icon name="Search" size={18} className="text-gray-300 hover:text-white" />
        </button>
        <button className="p-2 rounded-lg hover:bg-glass-light/30 transition-colors">
          <Icon name="MoreHorizontal" size={18} className="text-gray-300 hover:text-white" />
        </button>
      </div>
    </div>
  )
}