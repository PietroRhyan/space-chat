'use client'

import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { Card } from 'ui/card'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { useInputVisibility } from '@/ui/input/use-input-visibility'
import { VisibleInputIcon } from '@/ui/input/visible-input-icon'
import { Label } from '@/ui/label'

export default function SignIn() {
	const { isVisible, handleVisibility } = useInputVisibility()

	return (
		<div className='flex flex-col gap-2' >
			<Card title='Fazer login' width={480}>
				<div className='w-full flex flex-col gap-6'>
					<p>
						Seja bem-vindo ao SpaceChat! Por favor, insira suas credenciais para
						acessar sua conta
					</p>

					<form action='' className='w-full flex flex-col gap-6'>
						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='email'>E-mail</Label>
							<Input
								id='email'
								type='email'
								minLength={6}
								placeholder='Digite seu e-mail'
								autoComplete='off'
							/>
						</div>

						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='password'>Senha</Label>
							<Input
								id='password'
								type={isVisible ? 'text' : 'password'}
								minLength={6}
								placeholder='Digite sua senha'
								autoComplete='off'
								icon={
									<VisibleInputIcon
										isVisible={isVisible}
										handleVisibility={handleVisibility}
									/>
								}
							/>

							<Link
								href='#'
								className='text-primary underline underline-offset-2 ml-auto'
							>
								Esqueci minha senha
							</Link>
						</div>

						<div className='w-full mt-3 flex flex-col gap-6'>
							<Button title='Realizar login' type='submit' fullWidth />

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
							/>
						</div>
					</form>
				</div>
			</Card>

			<Link
				href='#'
				className='text-primary underline underline-offset-2'
			>
				Não tem uma conta? Criar conta
			</Link>
		</div>
	)
}
