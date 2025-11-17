import Card from './Card'
import Button from './Button'

interface ProductCardProps {
  name: string
  description: string
  price: string
  image: string
  color?: string
}

const ProductCard = ({ name, description, price, image, color }: ProductCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="aspect-square w-full bg-gray-700 rounded-lg mb-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-neon-blue mb-2">{name}</h3>
      {color && (
        <p className="text-sm text-gray-400 mb-2">Color: {color}</p>
      )}
      <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-neon-orange">{price}</span>
        <Button variant="outline" className="text-sm px-4 py-2">
          View Details
        </Button>
      </div>
    </Card>
  )
}

export default ProductCard

