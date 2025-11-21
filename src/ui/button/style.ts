import { tv } from 'tailwind-variants/lite'

export const buttonStyle = tv({
	base: 'text-dark-bg flex items-center justify-center gap-4 rounded-[8px] shadow-button outline-none focus-visible:border-ring focus-visible:ring-neutral-500 focus-visible:ring-2 disabled:opacity-75 transition-all duration-200 cursor-pointer',
	variants: {
		size: {
			sm: 'p-2 font-semibold text-md h-[35px]',
			md: 'p-3 font-semibold text-base h-[43px]',
			lg: 'p-4 font-bold text-base h-[51px]',
		},
		buttonType: {
			success: 'bg-primary hover:bg-primary-600 focus:bg-primary-600',
			neutral: 'bg-neutral-200 hover:bg-neutral-400 focus:bg-neutral-400',
			danger: 'bg-danger hover:bg-danger-600 focus:bg-danger-600',
		},
		fullWidth: {
			true: 'w-full',
			false: '',
		},
	},
})
