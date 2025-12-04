'use client'

import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { Input } from '@/ui/input'
import { useInputVisibility } from '@/ui/input/use-input-visibility'
import { VisibleInputIcon } from '@/ui/input/visible-input-icon'
import { Label } from '@/ui/label'
import { useGoogleProvider } from './hooks/use-google-provider'
import { useSignIn } from './hooks/use-sign-in'

export default function SignIn() {
	const { isVisible, handleVisibility } = useInputVisibility()

	const { register, handleSubmit, isLoading, errors, onSubmit, signOnRoute } = useSignIn()
	const { googleAuth, isProviderLoading } = useGoogleProvider()

	return (
		<div className='flex flex-col gap-2'>
			<Card title='Fazer login' width={480}>
				<div className='w-full flex flex-col gap-6'>
					<p>
						Seja bem-vindo ao SpaceChat! Por favor, insira suas credenciais para
						acessar sua conta
					</p>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className='w-full flex flex-col gap-6'
					>
						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='email'>E-mail</Label>
							<Input
								id='email'
								{...register('email')}
								type='string'
								placeholder='Digite seu e-mail'
								disabled={isLoading}
								autoComplete='off'
							/>
							{errors.email && (
								<p className='text-danger text-xs'>{errors.email.message}</p>
							)}
						</div>

						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='password'>Senha</Label>
							<Input
								id='password'
								{...register('password')}
								type={isVisible ? 'text' : 'password'}
								placeholder='Digite sua senha'
								disabled={isLoading}
								autoComplete='off'
								icon={
									<VisibleInputIcon
										isVisible={isVisible}
										handleVisibility={handleVisibility}
									/>
								}
							/>
							{errors.password && (
								<p className='text-danger text-xs'>{errors.password.message}</p>
							)}
							<Link
								href='#'
								className='text-primary underline underline-offset-2 ml-auto'
							>
								Esqueci minha senha
							</Link>
						</div>

						<div className='w-full mt-3 flex flex-col gap-6'>
							<Button
								title='Realizar login'
								type='submit'
								fullWidth
								isLoading={isLoading}
							/>

							<div className='relative w-full flex items-center justify-center'>
								<div className='h-px w-full bg-neutral-900/20' />
								<p className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-black-900 text-neutral-900 px-1'>
									ou
								</p>
							</div>

							<Button
								title='Acessar com Google'
								buttonType='neutral'
								leftIcon={<FcGoogle size={24} />}
								type='button'
								fullWidth
								onClick={googleAuth}
								isLoading={isProviderLoading}
							/>
						</div>
					</form>
				</div>
			</Card>

			<Link
				href={signOnRoute()}
				className='text-primary underline underline-offset-2'
			>
				Não tem uma conta? Criar conta
			</Link>
		</div>
	)
}
