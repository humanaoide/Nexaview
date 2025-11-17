import Card from '../components/Card'

const steps = [
  {
    number: '1',
    title: 'Download the App',
    description: 'Get the LensQi mobile app from the App Store or Google Play Store. Available for both iOS and Android devices.',
    icon: '📱'
  },
  {
    number: '2',
    title: 'Pair Your Glasses',
    description: 'Enable Bluetooth on your phone and open the LensQi app. Follow the simple pairing process to connect your smart glasses.',
    icon: '🔗'
  },
  {
    number: '3',
    title: 'Customize Settings',
    description: 'Personalize your experience through the app. Adjust AI assistant preferences, touch controls, and notification settings.',
    icon: '⚙️'
  },
  {
    number: '4',
    title: 'Start Using',
    description: 'You\'re all set! Use touch controls, voice commands, or the app to interact with your LensQi Smart Glasses.',
    icon: '🚀'
  }
]

const features = [
  {
    title: 'Voice Commands',
    description: 'Activate AI assistant with a simple voice command. Ask questions, set reminders, or control smart home devices.',
    visual: '🎤'
  },
  {
    title: 'OCR Scanning',
    description: 'Point your glasses at any text. The micro-camera captures and processes it, then reads it aloud or saves it to your notes.',
    visual: '📄'
  },
  {
    title: 'Notifications',
    description: 'Receive calls, messages, and app notifications directly in your glasses. Stay connected without looking at your phone.',
    visual: '🔔'
  },
  {
    title: 'Solar Charging',
    description: 'The solar strip automatically charges your glasses when exposed to light. Extended battery life for all-day use.',
    visual: '☀️'
  }
]

const HowItWorks = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gradient">
            How It Works
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Getting started with LensQi Smart Glasses is simple and straightforward
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-neon-orange to-neon-blue rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="mt-8 mb-4 text-5xl">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-neon-blue mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Visual */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-gradient text-center">
              Bluetooth Workflow
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center text-6xl border-2 border-neon-blue">
                  📱
                </div>
                <h3 className="text-xl font-semibold text-neon-blue mb-2">Mobile App</h3>
                <p className="text-gray-400 text-sm">Control & Customize</p>
              </div>
              <div className="text-4xl text-neon-orange">⇄</div>
              <div className="flex-1 text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gray-700 rounded-xl flex items-center justify-center text-6xl border-2 border-neon-orange">
                  👓
                </div>
                <h3 className="text-xl font-semibold text-neon-orange mb-2">LensQi Glasses</h3>
                <p className="text-gray-400 text-sm">Smart Features</p>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
              <p className="text-sm">
                Seamless Bluetooth connectivity enables real-time synchronization between your phone and glasses
              </p>
            </div>
          </Card>
        </div>

        {/* Key Features */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gradient text-center">
            Key Features in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{feature.visual}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-neon-blue mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-6">
              Experience the future of smart eyewear today
            </p>
            <a
              href="/products"
              className="inline-block px-6 py-3 bg-gradient-to-r from-neon-orange to-neon-blue text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-orange/50 transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </a>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks

