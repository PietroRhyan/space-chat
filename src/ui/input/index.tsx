import type * as React from 'react'

import { cn } from '@/lib/utils'
import { inputStyle } from './style'

interface InputProps extends React.ComponentProps<'input'> {
	icon?: React.ReactNode
}

function Input({ className, type, icon, ...props }: InputProps) {
	return (
		<div className='relative'>
			<input
				type={type}
				data-slot='input'
				className={cn(inputStyle({ icon: !!icon }), className)}
				{...props}
			></input>

			{icon && (
				<div className='absolute top-1/2 -translate-y-1/2 right-3'>{icon}</div>
			)}
		</div>
	)
}

export { Input }
