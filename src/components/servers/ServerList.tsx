import { useState } from 'react'
import Icon from '@/components/ui/icon'

interface Server {
  id: string
  name: string
  icon: string
  channels: Channel[]
}

interface Channel {
  id: string
  name: string
  type: 'text' | 'voice'
  members?: number
}

interface ServerListProps {
  onSelectServer: (serverId: string) => void
  onSelectChannel: (channelId: string) => void
}

export const ServerList = ({ onSelectServer, onSelectChannel }: ServerListProps) => {
  const [selectedServer, setSelectedServer] = useState<string | null>('1')
  const [selectedChannel, setSelectedChannel] = useState<string | null>('1')

  const servers: Server[] = [
    {
      id: '1',
      name: 'Космическая База',
      icon: '🚀',
      channels: [
        { id: '1', name: 'общий', type: 'text' },
        { id: '2', name: 'миссии', type: 'text' },
        { id: '3', name: 'технический', type: 'text' },
        { id: '4', name: 'Голосовой чат', type: 'voice', members: 3 },
        { id: '5', name: 'Командный центр', type: 'voice', members: 1 },
      ]
    },
    {
      id: '2',
      name: 'Разработка',
      icon: '💻',
      channels: [
        { id: '6', name: 'frontend', type: 'text' },
        { id: '7', name: 'backend', type: 'text' },
        { id: '8', name: 'Планерка', type: 'voice', members: 0 },
      ]
    }
  ]

  const handleServerSelect = (serverId: string) => {
    setSelectedServer(serverId)
    onSelectServer(serverId)
  }

  const handleChannelSelect = (channelId: string) => {
    setSelectedChannel(channelId)
    onSelectChannel(channelId)
  }

  const selectedServerData = servers.find(s => s.id === selectedServer)

  return (
    <div className="flex h-full">
      <div className="w-72 bg-glass-dark/40 backdrop-blur-glass border-r border-glass-border/30">
        <div className="p-4 border-b border-glass-border/30">
          <h2 className="text-white font-semibold text-lg">Серверы</h2>
        </div>
        
        <div className="p-3 space-y-2">
          {servers.map((server) => (
            <button
              key={server.id}
              onClick={() => handleServerSelect(server.id)}
              className={`w-full p-3 rounded-xl flex items-center space-x-3 transition-all duration-200 ${
                selectedServer === server.id
                  ? 'bg-scarlet-600/80 text-white'
                  : 'bg-glass-dark/30 text-gray-300 hover:bg-glass-light/20 hover:text-white'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-scarlet-600/80 flex items-center justify-center text-white">
                {server.icon}
              </div>
              <span className="font-medium">{server.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-glass-dark/20 backdrop-blur-glass">
        {selectedServerData && (
          <div className="h-full">
            <div className="p-4 border-b border-glass-border/30">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-scarlet-600/80 flex items-center justify-center text-white text-sm">
                  {selectedServerData.icon}
                </div>
                <h3 className="text-white font-semibold">{selectedServerData.name}</h3>
              </div>
            </div>

            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-400 uppercase text-xs font-semibold mb-2 flex items-center">
                    <Icon name="Hash" size={14} className="mr-1" />
                    Текстовые каналы
                  </h4>
                  <div className="space-y-1">
                    {selectedServerData.channels.filter(c => c.type === 'text').map((channel) => (
                      <button
                        key={channel.id}
                        onClick={() => handleChannelSelect(channel.id)}
                        className={`w-full p-2 rounded-lg flex items-center space-x-2 transition-colors ${
                          selectedChannel === channel.id
                            ? 'bg-scarlet-600/50 text-white'
                            : 'text-gray-300 hover:bg-glass-light/20 hover:text-white'
                        }`}
                      >
                        <Icon name="Hash" size={16} />
                        <span>{channel.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-gray-400 uppercase text-xs font-semibold mb-2 flex items-center">
                    <Icon name="Volume2" size={14} className="mr-1" />
                    Голосовые каналы
                  </h4>
                  <div className="space-y-1">
                    {selectedServerData.channels.filter(c => c.type === 'voice').map((channel) => (
                      <button
                        key={channel.id}
                        onClick={() => handleChannelSelect(channel.id)}
                        className={`w-full p-2 rounded-lg flex items-center justify-between transition-colors ${
                          selectedChannel === channel.id
                            ? 'bg-scarlet-600/50 text-white'
                            : 'text-gray-300 hover:bg-glass-light/20 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon name="Volume2" size={16} />
                          <span>{channel.name}</span>
                        </div>
                        {channel.members !== undefined && channel.members > 0 && (
                          <span className="text-xs bg-scarlet-600/30 px-2 py-1 rounded-full">
                            {channel.members}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}