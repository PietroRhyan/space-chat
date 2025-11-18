import { cardStyle, cardTitleStyle } from "./style"

interface ICardProps {
  title: string
  width?: number
  size?: 'sm' | 'lg'
  children: React.ReactNode
}

export function Card({ title, size = 'lg', width = 300, children }: ICardProps) {
  return (
    <div className={cardStyle({ size })} style={{ maxWidth: width }}>
      <h3 className={cardTitleStyle({ size })}>
        {title}
      </h3>

      {children}
    </div>
  )
}