import { useState } from 'react'
import Icon from '@/components/ui/icon'

interface Participant {
  id: string
  name: string
  avatar: string
  isMuted: boolean
  isDeafened: boolean
  isSpeaking: boolean
  hasVideo: boolean
}

export const VoiceChannel = () => {
  const [isConnected, setIsConnected] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isDeafened, setIsDeafened] = useState(false)
  const [hasVideo, setHasVideo] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)

  const participants: Participant[] = [
    {
      id: '1',
      name: 'Командир Экипажа',
      avatar: '⭐',
      isMuted: false,
      isDeafened: false,
      isSpeaking: true,
      hasVideo: true
    },
    {
      id: '2',
      name: 'Инженер',
      avatar: '🔧',
      isMuted: true,
      isDeafened: false,
      isSpeaking: false,
      hasVideo: false
    },
    {
      id: '3',
      name: 'Навигатор',
      avatar: '🧭',
      isMuted: false,
      isDeafened: false,
      isSpeaking: false,
      hasVideo: true
    }
  ]

  const handleConnect = () => {
    setIsConnected(!isConnected)
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-glass-border/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Volume2" size={24} className="text-scarlet-400" />
            <div>
              <h2 className="text-white font-semibold text-lg">Командный центр</h2>
              <p className="text-gray-400 text-sm">{participants.length} участников</p>
            </div>
          </div>
          
          <button
            onClick={handleConnect}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              isConnected 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isConnected ? 'Отключиться' : 'Подключиться'}
          </button>
        </div>
      </div>

      {isConnected && (
        <>
          <div className="flex-1 p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {participants.filter(p => p.hasVideo).map((participant) => (
                <div key={participant.id} className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-scarlet-gradient opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">{participant.avatar}</div>
                  </div>
                  
                  <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                    <div className={`px-2 py-1 rounded-lg bg-black/50 backdrop-blur-glass text-white text-sm ${
                      participant.isSpeaking ? 'ring-2 ring-green-500' : ''
                    }`}>
                      {participant.name}
                    </div>
                    {participant.isMuted && (
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                        <Icon name="MicOff" size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-glass-dark/30 backdrop-blur-glass border border-glass-border/30 rounded-xl p-4">
              <h3 className="text-white font-medium mb-3">Участники без видео</h3>
              <div className="space-y-2">
                {participants.filter(p => !p.hasVideo).map((participant) => (
                  <div key={participant.id} className="flex items-center space-x-3">
                    <div className="relative">
                      <div className={`w-10 h-10 rounded-full bg-scarlet-600/80 flex items-center justify-center text-white ${
                        participant.isSpeaking ? 'ring-2 ring-green-500' : ''
                      }`}>
                        {participant.avatar}
                      </div>
                      {participant.isMuted && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-red-600 rounded-full flex items-center justify-center">
                          <Icon name="MicOff" size={8} className="text-white" />
                        </div>
                      )}
                    </div>
                    <span className="text-white">{participant.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-glass-border/30">
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`p-3 rounded-full transition-colors ${
                  isMuted 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-glass-dark/40 hover:bg-glass-light/30 border border-glass-border/30'
                }`}
              >
                <Icon name={isMuted ? "MicOff" : "Mic"} size={20} className="text-white" />
              </button>

              <button
                onClick={() => setIsDeafened(!isDeafened)}
                className={`p-3 rounded-full transition-colors ${
                  isDeafened 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-glass-dark/40 hover:bg-glass-light/30 border border-glass-border/30'
                }`}
              >
                <Icon name={isDeafened ? "VolumeX" : "Volume2"} size={20} className="text-white" />
              </button>

              <button
                onClick={() => setHasVideo(!hasVideo)}
                className={`p-3 rounded-full transition-colors ${
                  hasVideo 
                    ? 'bg-scarlet-600 hover:bg-scarlet-700' 
                    : 'bg-glass-dark/40 hover:bg-glass-light/30 border border-glass-border/30'
                }`}
              >
                <Icon name={hasVideo ? "VideoOff" : "Video"} size={20} className="text-white" />
              </button>

              <button
                onClick={() => setIsScreenSharing(!isScreenSharing)}
                className={`p-3 rounded-full transition-colors ${
                  isScreenSharing 
                    ? 'bg-blue-600 hover:bg-blue-700' 
                    : 'bg-glass-dark/40 hover:bg-glass-light/30 border border-glass-border/30'
                }`}
              >
                <Icon name="Monitor" size={20} className="text-white" />
              </button>

              <button
                onClick={handleConnect}
                className="p-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
              >
                <Icon name="PhoneOff" size={20} className="text-white" />
              </button>
            </div>
          </div>
        </>
      )}

      {!isConnected && (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <Icon name="Volume2" size={64} className="text-gray-500 mx-auto mb-4" />
            <h3 className="text-white text-xl font-semibold mb-2">Голосовой канал</h3>
            <p className="text-gray-400 mb-6">Подключитесь к голосовому каналу для общения с командой</p>
            <button
              onClick={handleConnect}
              className="px-6 py-3 bg-scarlet-600 hover:bg-scarlet-700 text-white rounded-lg font-medium transition-colors"
            >
              Подключиться к каналу
            </button>
          </div>
        </div>
      )}
    </div>
  )
}