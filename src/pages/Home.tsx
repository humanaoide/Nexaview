import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              NexaView
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              The Future of Smart Eyewear
            </p>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Introducing LensQi Smart Glasses - Affordable AI-powered eyewear designed for students and everyday users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button variant="primary">Explore Products</Button>
              </Link>
              <Link to="/features">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p className="text-center">
                At NexaView, we believe that cutting-edge technology should be accessible to everyone. 
                Our mission is to revolutionize the smart eyewear industry by creating affordable, 
                high-quality AI-powered glasses that enhance daily life without breaking the bank.
              </p>
              <p className="text-center">
                We're a student startup passionate about making advanced technology available to students, 
                professionals, and everyday users. LensQi Smart Glasses combine innovative features like 
                AI assistance, OCR scanning, and seamless mobile connectivity in a lightweight, 
                comfortable design that won't empty your wallet.
              </p>
              <p className="text-center text-neon-blue font-semibold">
                Technology for everyone. Innovation without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Why LensQi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-neon-orange transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-neon-blue mb-2">AI Assistant</h3>
              <p className="text-gray-400">
                Built-in AI connectivity for voice commands and smart assistance
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-neon-orange transition-all duration-300">
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-neon-blue mb-2">OCR Scanning</h3>
              <p className="text-gray-400">
                Micro-camera for text recognition and document scanning
              </p>
            </div>
            <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-neon-orange transition-all duration-300">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-semibold text-neon-blue mb-2">Solar Powered</h3>
              <p className="text-gray-400">
                Solar strip on top for extended battery life
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/features">
              <Button variant="primary">View All Features</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-neon-orange/10 to-neon-blue/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already made the switch to smart eyewear.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button variant="primary">Shop Now</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

