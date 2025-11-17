import { useState, FormEvent } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gradient">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-2xl font-bold mb-6 text-neon-blue">
                Send us a Message
              </h2>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✓</div>
                  <p className="text-neon-orange text-lg font-semibold">
                    Thank you! Your message has been sent.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-neon-orange transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-neon-orange transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-neon-orange transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="product">Product Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="warranty">Warranty & Returns</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 focus:outline-none focus:border-neon-orange transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-bold mb-4 text-neon-blue">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email</div>
                  <a
                    href="mail to: nexaviewofficial@gmail.com"
                    className="text-neon-orange hover:text-neon-blue transition-colors"
                  >
                    nexaviewofficial@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Phone</div>
                  <a
                    href="tel:98918 76892"
                    className="text-neon-orange hover:text-neon-blue transition-colors"
                  >
                    +91 98918 76892
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Business Hours</div>
                  <div className="text-gray-300 text-sm">
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday: 10:00 AM - 4:00 PM EST<br />
                    Sunday: Closed
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-bold mb-4 text-neon-blue">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-neon-orange transition-colors"
                  aria-label="Twitter"
                >
                  <span className="text-xl">🐦</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-neon-orange transition-colors"
                  aria-label="Instagram"
                >
                  <span className="text-xl">📷</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-neon-orange transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="text-xl">💼</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-neon-orange transition-colors"
                  aria-label="YouTube"
                >
                  <span className="text-xl">▶️</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

