interface Message {
  id: string
  user: string
  avatar: string
  content: string
  timestamp: Date
  type: 'text' | 'image' | 'file'
}

interface MessageItemProps {
  message: Message
}

export const MessageItem = ({ message }: MessageItemProps) => {
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('ru-RU', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  return (
    <div className="flex space-x-3 group hover:bg-glass-light/10 px-3 py-2 rounded-lg transition-colors">
      <div className="w-10 h-10 rounded-full bg-scarlet-600/80 flex items-center justify-center text-white font-medium backdrop-blur-glass border border-glass-border/30 shadow-glass">
        {message.avatar}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline space-x-2">
          <span className="font-semibold text-white">{message.user}</span>
          <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
        </div>
        
        <div className="mt-1">
          <p className="text-gray-200 break-words">{message.content}</p>
        </div>
      </div>
    </div>
  )
}