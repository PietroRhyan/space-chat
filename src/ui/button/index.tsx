import { ComponentProps } from 'react'
import { buttonStyle } from './style'

interface IButtonProps extends ComponentProps<'button'> {
	title: string
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	size?: 'sm' | 'md' | 'lg'
	buttonType?: 'success' | 'neutral' | 'danger'
	fullWidth?: boolean
}

export function Button({
	title,
	size = 'lg',
	buttonType = 'success',
	fullWidth,
	leftIcon,
	rightIcon,
	...props
}: IButtonProps) {
	return (
		<button {...props} className={buttonStyle({ size, buttonType, fullWidth })}>
			{leftIcon && leftIcon}
			{title}
			{rightIcon && rightIcon}
		</button>
	)
}
