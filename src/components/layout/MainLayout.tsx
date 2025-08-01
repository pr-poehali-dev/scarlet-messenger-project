import { useState } from 'react'
import { Sidebar } from './Sidebar'
import { ChatArea } from '../chat/ChatArea'
import { ServerList } from '../servers/ServerList'
import { FriendsList } from '../friends/FriendsList'
import { UserProfile } from '../profile/UserProfile'
import { Settings } from '../settings/Settings'
import { VoiceChannel } from '../voice/VoiceChannel'

export const MainLayout = () => {
  const [activeView, setActiveView] = useState<'chat' | 'servers' | 'friends' | 'profile' | 'settings' | 'voice'>('chat')
  const [selectedServer, setSelectedServer] = useState<string | null>(null)
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null)

  const renderMainContent = () => {
    switch (activeView) {
      case 'chat':
        return <ChatArea />
      case 'servers':
        return <ServerList onSelectServer={setSelectedServer} onSelectChannel={setSelectedChannel} />
      case 'friends':
        return <FriendsList />
      case 'profile':
        return <UserProfile />
      case 'settings':
        return <Settings />
      case 'voice':
        return <VoiceChannel />
      default:
        return <ChatArea />
    }
  }

  return (
    <div className="flex h-screen bg-scarlet-gradient overflow-hidden">
      <div className="backdrop-blur-glass bg-glass-dark/40 border-r border-glass-border">
        <Sidebar 
          activeView={activeView} 
          onViewChange={setActiveView}
        />
      </div>
      
      <div className="flex-1 backdrop-blur-glass bg-glass-dark/20">
        <div className="h-full bg-glass-gradient backdrop-blur-glass border border-glass-border/50 rounded-l-xl shadow-glass">
          {renderMainContent()}
        </div>
      </div>
    </div>
  )
}