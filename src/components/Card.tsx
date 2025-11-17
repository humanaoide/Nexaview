import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div
      className={`bg-gray-800 rounded-xl p-6 border border-gray-700 ${
        hover ? 'hover:border-neon-orange hover:shadow-lg hover:shadow-neon-orange/20 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card

