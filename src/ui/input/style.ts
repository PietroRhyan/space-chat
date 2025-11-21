import { tv } from 'tailwind-variants'

export const inputStyle = tv({
	base: 'file:text-foreground placeholder:text-neutral-800 selection:bg-accent-600 border border-black-700 h-[42px] w-full min-w-0 rounded-md bg-transparent py-1 text-md shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-black-500 focus-visible:ring-2 aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
	variants: {
		icon: {
			true: 'pl-3 pr-12',
			false: 'px-3',
		},
	},
	defaultVariants: {
		icon: false,
	},
})
