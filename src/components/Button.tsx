import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button'
}: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'
  
  const variants = {
    primary: 'bg-gradient-to-r from-neon-orange to-neon-blue text-white hover:shadow-lg hover:shadow-neon-orange/50',
    secondary: 'bg-gray-800 text-neon-blue border-2 border-neon-blue hover:bg-gray-700',
    outline: 'border-2 border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-white'
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button

