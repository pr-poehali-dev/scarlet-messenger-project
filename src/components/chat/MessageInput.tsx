import { useState } from 'react'
import Icon from '@/components/ui/icon'

interface MessageInputProps {
  onSendMessage: (content: string) => void
}

export const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      onSendMessage(message.trim())
      setMessage('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="p-4 border-t border-glass-border/30">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-end space-x-3">
          <div className="flex-1">
            <div className="relative">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Напишите сообщение..."
                className="w-full px-4 py-3 pr-12 bg-glass-dark/40 border border-glass-border/30 rounded-xl text-white placeholder-gray-400 backdrop-blur-glass shadow-glass-inset focus:outline-none focus:ring-2 focus:ring-scarlet-500/50 focus:border-scarlet-500/50 resize-none"
                rows={1}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-lg hover:bg-glass-light/30 transition-colors"
              >
                <Icon name="Smile" size={18} className="text-gray-400 hover:text-white" />
              </button>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button
              type="button"
              className="p-3 rounded-xl bg-glass-dark/40 border border-glass-border/30 backdrop-blur-glass hover:bg-glass-light/30 transition-colors"
            >
              <Icon name="Paperclip" size={18} className="text-gray-400 hover:text-white" />
            </button>
            
            <button
              type="submit"
              disabled={!message.trim()}
              className="p-3 rounded-xl bg-scarlet-600 hover:bg-scarlet-700 disabled:bg-gray-600 disabled:opacity-50 transition-colors shadow-glass"
            >
              <Icon name="Send" size={18} className="text-white" />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}