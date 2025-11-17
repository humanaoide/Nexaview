import { useState } from 'react'
import ProductCard from '../components/ProductCard'

type Category = 'Base' | 'Premium' | 'Pro' | 'Pro+'

interface Product {
  name: string
  description: string
  price: string
  image: string
  color: string
}

const products: Record<Category, Product[]> = {
  Base: [
    {
      name: 'LensQi Base - Classic Black',
      description: 'NexaView LensQi Base Model: Your essential smart eyewear, blending effortless connectivity, discreet design, and all-day comfort at an unbeatable price.',
      price: '₹2200',
      image: '/Basic/classic black.jpg',
      color: 'Classic Black'
    },
    {
      name: 'LensQi Base - Ocean Blue',
      description: 'NexaView LensQi Base Model: Your essential smart eyewear, blending effortless connectivity, discreet design, and all-day comfort at an unbeatable price.',
      price: '₹2300',
      image: '/Basic/ocean blue.jpg',
      color: 'Ocean Blue'
    },
    {
      name: 'LensQi Base - Forest Green',
      description: 'NexaView LensQi Base Model: Your essential smart eyewear, blending effortless connectivity, discreet design, and all-day comfort at an unbeatable price.',
      price: '₹2500',
      image: '/Basic/forest green.jpg',
      color: 'Forest Green'
    },
    {
      name: 'LensQi Base - Sunset Orange',
      description: 'NexaView LensQi Base Model: Your essential smart eyewear, blending effortless connectivity, discreet design, and all-day comfort at an unbeatable price.',
      price: '₹2400',
      image: '/Basic/sunset orange.jpg',
      color: 'Sunset Orange'
    },
    {
      name: 'LensQi Base - Midnight Purple',
      description: 'NexaView LensQi Base Model: Your essential smart eyewear, blending effortless connectivity, discreet design, and all-day comfort at an unbeatable price.',
      price: '₹2500',
      image: '/Basic/midnight purple.jpg',
      color: 'Midnight Purple'
    },
    {
      name: 'LensQi Base - Arctic White',
      description: 'NexaView LensQi Base Model: Your essential smart eyewear, blending effortless connectivity, discreet design, and all-day comfort at an unbeatable price.',
      price: '₹2400',
      image: '/Basic/artic white.jpg',
      color: 'Arctic White'
    }
  ],
  Premium: [
    {
      name: 'LensQi Premium - Matte Black',
      description: 'NexaView LensQi Premium: Elevate your reality with advanced AI, superior cameras, and a sleek carbon-fiber design, crafted for creators and tech enthusiasts.',
      price: '₹3600',
      image: '/premium/matte black.jpg',
      color: 'Matte Black'
    },
    {
      name: 'LensQi Premium - Electric Blue',
      description: 'NexaView LensQi Premium: Elevate your reality with advanced AI, superior cameras, and a sleek carbon-fiber design, crafted for creators and tech enthusiasts..',
      price: '₹3800',
      image: '/premium/electric blue.jpg',
      color: 'Electric Blue'
    },
    {
      name: 'LensQi Premium - Emerald Green',
      description: 'NexaView LensQi Premium: Elevate your reality with advanced AI, superior cameras, and a sleek carbon-fiber design, crafted for creators and tech enthusiasts..',
      price: '₹3600',
      image: '/premium/emrald.jpg',
      color: 'Emerald Green'
    },
    {
      name: 'LensQi Premium - Flame Red',
      description: 'NexaView LensQi Premium: Elevate your reality with advanced AI, superior cameras, and a sleek carbon-fiber design, crafted for creators and tech enthusiasts..',
      price: '₹3900',
      image: '/premium/flame red.jpg',
      color: 'Flame Red'
    },
    {
      name: 'LensQi Premium - Royal Gold',
      description: 'NexaView LensQi Premium: Elevate your reality with advanced AI, superior cameras, and a sleek carbon-fiber design, crafted for creators and tech enthusiasts..',
      price: '₹4000',
      image: '/premium/royal gold.jpg',
      color: 'Royal Gold'
    },
    {
      name: 'LensQi Premium - Silver Chrome',
      description: 'NexaView LensQi Premium: Elevate your reality with advanced AI, superior cameras, and a sleek carbon-fiber design, crafted for creators and tech enthusiasts..',
      price: '₹4000',
      image: '/premium/silver chrome.jpg',
      color: 'Silver Chrome'
    }
  ],
  Pro: [
    {
      name: 'LensQi Pro - Carbon Fiber',
      description: 'Master your world with precision AR, dual-camera intelligence, electro-tint lenses, and a revolutionary carbon-titanium frame.',
      price: '₹11000',
      image: '/pro/carbon fiber.jpg',
      color: 'Carbon Fiber'
    },
    {
      name: 'LensQi Pro - Titanium Gray',
      description: 'Master your world with precision AR, dual-camera intelligence, electro-tint lenses, and a revolutionary carbon-titanium frame.',
      price: '₹11300',
      image: '/pro/titanium gray.jpg',
      color: 'Titanium Gray'
    },
    {
      name: 'LensQi Pro - Navy Blue',
      description: 'Master your world with precision AR, dual-camera intelligence, electro-tint lenses, and a revolutionary carbon-titanium frame.',
      price: '₹11500',
      image: '/pro/navy blue.jpg',
      color: 'Navy Blue'
    },
    {
      name: 'LensQi Pro - Rose Gold',
      description: 'Master your world with precision AR, dual-camera intelligence, electro-tint lenses, and a revolutionary carbon-titanium frame.',
      price: '₹12000',
      image: '/pro/copper.jpg',
      color: 'Rose Gold'
    },
    {
      name: 'LensQi Pro - Jet Black',
      description: 'Master your world with precision AR, dual-camera intelligence, electro-tint lenses, and a revolutionary carbon-titanium frame.',
      price: '₹12000',
      image: '/pro/jet black.jpg',
      color: 'Jet Black'
    },
    {
      name: 'LensQi Pro - Copper',
      description: 'Master your world with precision AR, dual-camera intelligence, electro-tint lenses, and a revolutionary carbon-titanium frame.',
      price: '₹11900',
      image: '/pro/copper.jpg',
      color: 'Copper'
    }
  ],
  'Pro+': [
    {
      name: 'LensQi Pro+ - Obsidian',
      description: 'NexaView LensQi Pro+: Experience the future with seamless holographic AR, transparent solar lenses, and an impossibly light aerogel-reinforced frame.',
      price: '₹25000',
      image: encodeURI('/pro+/pro+ obsidion.jpg'),
      color: 'Obsidian'
    },
    {
      name: 'LensQi Pro+ - Platinum',
      description: 'NexaView LensQi Pro+: Experience the future with seamless holographic AR, transparent solar lenses, and an impossibly light aerogel-reinforced frame.',
      price: '₹24000',
      image: encodeURI('/pro+/pro+ platinium.jpg'),
      color: 'Platinum'
    },
    {
      name: 'LensQi Pro+ - Sapphire',
      description: 'NexaView LensQi Pro+: Experience the future with seamless holographic AR, transparent solar lenses, and an impossibly light aerogel-reinforced frame.',
      price: '₹24500',
      image: encodeURI('/pro+/pro+ sapphire.jpg'),
      color: 'Sapphire'
    },
    {
      name: 'LensQi Pro+ - Ruby',
      description: 'NexaView LensQi Pro+: Experience the future with seamless holographic AR, transparent solar lenses, and an impossibly light aerogel-reinforced frame.',
      price: '₹26000',
      image: encodeURI('/pro+/pro+ ruby.jpg'),
      color: 'Ruby'
    },
    {
      name: 'LensQi Pro+ - Diamond',
      description: 'NexaView LensQi Pro+: Experience the future with seamless holographic AR, transparent solar lenses, and an impossibly light aerogel-reinforced frame.',
      price: '₹27000',
      image: encodeURI('/pro+/pro+ dimond.jpg'),
      color: 'Diamond'
    },
    {
      name: 'LensQi Pro+ - Onyx',
      description: 'NexaView LensQi Pro+: Experience the future with seamless holographic AR, transparent solar lenses, and an impossibly light aerogel-reinforced frame.',
      price: '₹28000',
      image: encodeURI('/pro+/pro+ onyx.jpg'),
      color: 'Onyx'
    }
  ]
}

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('Base')

  const categories: Category[] = ['Base', 'Premium', 'Pro', 'Pro+']

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4 text-gradient">
          LensQi Smart Glasses
        </h1>
        <p className="text-xl text-center text-gray-400 mb-12">
          Choose from our range of smart eyewear options
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-neon-orange to-neon-blue text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[selectedCategory].map((product, index) => (
            <ProductCard
              key={`${selectedCategory}-${index}`}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              color={product.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products

