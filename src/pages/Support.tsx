import Card from '../components/Card'
import Button from '../components/Button'

interface SubscriptionPlan {
  name: string
  price: string
  period: string
  features: string[]
  popular?: boolean
}

const plans: SubscriptionPlan[] = [
  {
    name: 'Basic',
    price: '₹99',
    period: 'per month',
    features: [
      'Standard warranty coverage',
      'Email support',
      'Firmware updates',
      'Basic troubleshooting guides'
    ]
  },
  {
    name: 'Premium',
    price: '₹199',
    period: 'per month',
    features: [
      'Extended warranty coverage',
      'Priority email & phone support',
      'Advanced AI features',
      'Cloud storage for OCR scans',
      'Early access to new features',
      'Monthly device health check'
    ],
    popular: true
  },
  {
    name: 'Pro',
    price: '₹599',
    period: 'per month',
    features: [
      'Full warranty coverage + accidental damage',
      '24/7 priority support',
      'All Premium features',
      'Unlimited cloud storage',
      'Beta testing access',
      'Quarterly device replacement option',
      'Dedicated support specialist'
    ]
  }
]

const warrantyInfo = [
  {
    title: 'Standard Warranty',
    description: '1-year limited warranty covering manufacturing defects and hardware malfunctions.'
  },
  {
    title: 'Extended Warranty',
    description: 'Available through Premium and Pro plans. Covers extended periods and additional protection.'
  },
  {
    title: 'Accidental Damage',
    description: 'Pro plan includes coverage for accidental drops, water damage, and other mishaps.'
  },
  {
    title: 'Replacement Policy',
    description: 'Quick replacement process for defective units. Pro plan includes quarterly replacement option.'
  }
]

const Support = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gradient">
            Support & Warranty
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive support plans and warranty coverage for your peace of mind
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
            Subscription Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? 'border-2 border-neon-orange scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-orange to-neon-blue text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neon-blue mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-neon-orange">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-neon-orange mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Choose Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Warranty Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
            Warranty Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {warrantyInfo.map((info, index) => (
              <Card key={index}>
                <h3 className="text-xl font-semibold text-neon-blue mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {info.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Resources */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <h2 className="text-3xl font-bold mb-6 text-gradient text-center">
              Additional Support Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-3">
                  📚 Documentation
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Comprehensive guides, tutorials, and FAQs to help you get the most out of your LensQi Smart Glasses.
                </p>
                <Button variant="outline" className="text-sm">
                  View Docs
                </Button>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-3">
                  🎥 Video Tutorials
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Step-by-step video guides covering setup, features, troubleshooting, and advanced tips.
                </p>
                <Button variant="outline" className="text-sm">
                  Watch Videos
                </Button>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-3">
                  💬 Community Forum
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Connect with other LensQi users, share tips, ask questions, and get community support.
                </p>
                <Button variant="outline" className="text-sm">
                  Join Forum
                </Button>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neon-blue mb-3">
                  📞 Contact Support
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Need direct assistance? Our support team is here to help via email, phone, or live chat.
                </p>
                <Button variant="outline" className="text-sm">
                  Contact Us
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Support

