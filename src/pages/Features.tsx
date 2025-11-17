import Card from '../components/Card'

const features = [
  {
    icon: '🪶',
    title: 'Lightweight Frame',
    description: 'Designed for comfort with a lightweight frame that you can wear all day without fatigue. Premium materials ensure durability without compromising on weight.'
  },
  {
    icon: '☀️',
    title: 'Solar Strip',
    description: 'Integrated solar strip on the top of the frame harnesses sunlight to extend battery life. Stay powered longer with eco-friendly energy harvesting technology.'
  },
  {
    icon: '📡',
    title: 'Bluetooth Module',
    description: 'Non-working demo Bluetooth module for connectivity demonstration. Seamlessly pairs with your mobile devices for a connected experience.'
  },
  {
    icon: '🤖',
    title: 'AI Assistant Connectivity',
    description: 'Built-in AI assistant connectivity allows you to interact with your glasses using voice commands. Get answers, set reminders, and control your smart home devices hands-free.'
  },
  {
    icon: '🔊',
    title: 'Text-to-Speech',
    description: 'Advanced text-to-speech capability reads out information, messages, and notifications directly to you. Perfect for accessibility and hands-free information access.'
  },
  {
    icon: '📷',
    title: 'Micro-Camera for OCR',
    description: 'High-resolution micro-camera enables Optical Character Recognition (OCR) scanning. Capture text from documents, signs, and screens for instant translation or note-taking.'
  },
  {
    icon: '👆',
    title: 'Simple Touch Controls',
    description: 'Intuitive touch controls on the frame allow you to navigate menus, adjust settings, and interact with features effortlessly. No complex gestures required.'
  },
  {
    icon: '📱',
    title: 'Mobile App Pairing',
    description: 'Companion mobile app for iOS and Android provides full control and customization. Sync data, update firmware, and access advanced features through the intuitive interface.'
  }
]

const Features = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gradient">
            LensQi Technology
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the innovative features that make LensQi Smart Glasses the perfect companion for your daily life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-5xl mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-neon-blue mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-gradient text-center">
            Why Choose LensQi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-semibold text-neon-orange mb-2">Affordable</h3>
              <p className="text-gray-400">
                Premium technology at student-friendly prices
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold text-neon-orange mb-2">Innovative</h3>
              <p className="text-gray-400">
                Cutting-edge features in a sleek, modern design
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-neon-orange mb-2">Practical</h3>
              <p className="text-gray-400">
                Designed for real-world use by students and professionals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features

