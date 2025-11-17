import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">NexaView</h3>
            <p className="text-gray-400 text-sm">
              Creating affordable AI-powered eyewear for students and everyday users.
            </p>
          </div>

          <div>
            <h4 className="text-neon-blue font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-neon-orange transition-colors">
                  Base
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-neon-orange transition-colors">
                  Premium
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-neon-orange transition-colors">
                  Pro
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-neon-orange transition-colors">
                  Pro+
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-neon-blue font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/team" className="text-gray-400 hover:text-neon-orange transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-neon-orange transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-neon-orange transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-neon-orange transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-neon-blue font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-neon-orange transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="text-gray-400">support@nexaview.com</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2024 NexaView. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

