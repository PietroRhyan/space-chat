'use client'

import { Eye, EyeClosed } from 'lucide-react'

interface IVisibleInputIconProps {
	isVisible: boolean
	handleVisibility: () => void
}

export function VisibleInputIcon({ isVisible, handleVisibility }: IVisibleInputIconProps) {
	return (
		<div className='flex items-center justify-center text-neutral-800' onClick={handleVisibility}>
			{isVisible ? <Eye size={18} /> : <EyeClosed size={18} />}
		</div>
	)
}
