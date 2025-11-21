import Image from 'next/image'

export function LogoWithTypography() {
	return (
		<div className='flex items-center justify-center'>
			<Image
				src='/images/logo-with-typography.png'
				alt='SpaceChat logo'
				width={290}
				height={56}
				quality={100}
				draggable={false}
			/>
		</div>
	)
}
