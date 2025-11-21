'use client'

import { useState } from 'react'

export function useInputVisibility() {
	const [isVisible, setIsVisible] = useState(false)

	const handleVisibility = () => {
		setIsVisible(!isVisible)
	}

	return {
		isVisible,
		handleVisibility,
	}
}
