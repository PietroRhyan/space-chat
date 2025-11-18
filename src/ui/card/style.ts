import { tv } from "tailwind-variants/lite";

export const cardStyle = tv({
  base: 'w-full bg-black border border-black-700 rounded-xl max-w-[710px] shadow-modal',
  variants: {
    size: {
      sm: 'p-4',
      lg: 'p-6'
    },
  },
  defaultVariants: {
    size: 'lg'
  }
})

export const cardTitleStyle = tv({
  base: 'text-white font-outfit font-semibold',
  variants: {
    size: {
      sm: 'text-base',
      lg: 'text-2xl'
    }
  },
  defaultVariants: {
      size: 'lg'
  }
})