import type { ComponentProps } from 'react'
import { Spinner } from '../spinner/spinner'
import { buttonStyle } from './style'

interface IButtonProps extends ComponentProps<'button'> {
	title: string
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	size?: 'sm' | 'md' | 'lg'
	buttonType?: 'success' | 'neutral' | 'danger'
	fullWidth?: boolean
	isLoading?: boolean
}

export function Button({
	title,
	size = 'lg',
	buttonType = 'success',
	fullWidth,
	leftIcon,
	rightIcon,
	isLoading,
	...props
}: IButtonProps) {
	return (
		<button
			{...props}
			disabled={isLoading}
			className={buttonStyle({ size, buttonType, fullWidth })}
		>
			{isLoading && <Spinner />}
			{leftIcon && leftIcon}
			{title}
			{rightIcon && rightIcon}
		</button>
	)
}
