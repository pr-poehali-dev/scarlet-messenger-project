import { useState } from 'react'
import { ChatHeader } from './ChatHeader'
import { MessageList } from './MessageList'
import { MessageInput } from './MessageInput'

interface Message {
  id: string
  user: string
  avatar: string
  content: string
  timestamp: Date
  type: 'text' | 'image' | 'file'
}

export const ChatArea = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      user: 'Астронавт',
      avatar: '🚀',
      content: 'Добро пожаловать в Скарлет! Как дела в космосе?',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      type: 'text'
    },
    {
      id: '2',
      user: 'Коммандир',
      avatar: '⭐',
      content: 'Отлично! Связь стабильная, готовы к миссии.',
      timestamp: new Date(Date.now() - 1000 * 60 * 10),
      type: 'text'
    },
    {
      id: '3',
      user: 'Инженер',
      avatar: '🔧',
      content: 'Все системы работают в штатном режиме.',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      type: 'text'
    }
  ])

  const handleSendMessage = (content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      user: 'Вы',
      avatar: '👨‍🚀',
      content,
      timestamp: new Date(),
      type: 'text'
    }
    setMessages(prev => [...prev, newMessage])
  }

  return (
    <div className="flex flex-col h-full">
      <ChatHeader channelName="Общий чат" />
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  )
}