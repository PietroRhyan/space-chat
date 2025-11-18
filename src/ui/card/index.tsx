import { cardStyle, cardTitleStyle } from "./style"

interface ICardProps {
  title: string
  size?: 'sm' | 'lg'
  children: React.ReactNode
}

export function Card({ title, size = 'lg', children }: ICardProps) {
  return (
    <div className={cardStyle({ size })}>
      <h3 className={cardTitleStyle({ size })}>
        {title}
      </h3>

      {children}
    </div>
  )
}