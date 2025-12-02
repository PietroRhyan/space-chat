'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Card } from 'ui/card'
import type { IActionResponse } from '@/shared/interfaces'
import { Button } from '@/ui/button'
import { Input } from '@/ui/input'
import { useInputVisibility } from '@/ui/input/use-input-visibility'
import { VisibleInputIcon } from '@/ui/input/visible-input-icon'
import { Label } from '@/ui/label'
import { signInUser } from './actions/sign-in'

const initialState: IActionResponse = {
	success: false,
}

export default function SignIn() {
	const [state, formAction, pending] = useActionState(signInUser, initialState)

	const { isVisible, handleVisibility } = useInputVisibility()

	return (
		<div className='flex flex-col gap-2'>
			<Card title='Fazer login' width={480}>
				<div className='w-full flex flex-col gap-6'>
					<p>
						Seja bem-vindo ao SpaceChat! Por favor, insira suas credenciais para
						acessar sua conta
					</p>

					<form action={formAction} className='w-full flex flex-col gap-6'>
						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='email'>E-mail</Label>
							<Input
								id='email'
								name='email'
								type='string'
								placeholder='Digite seu e-mail'
								autoComplete='off'
							/>
							{state?.errors?.email && (
								<p className='text-xs text-danger' aria-live='polite'>
									{state?.errors.email}
								</p>
							)}
						</div>

						<div className='w-full flex flex-col gap-2'>
							<Label htmlFor='password'>Senha</Label>
							<Input
								id='password'
								name='password'
								type={isVisible ? 'text' : 'password'}
								placeholder='Digite sua senha'
								autoComplete='off'
								icon={
									<VisibleInputIcon
										isVisible={isVisible}
										handleVisibility={handleVisibility}
									/>
								}
							/>
							{state?.errors?.password && (
								<div className='flex flex-col gap-1'>
									{state?.errors?.password.map((err) => (
										<p
											key={err}
											className='text-xs text-danger'
											aria-live='polite'
										>
											{err}
										</p>
									))}
								</div>
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
								isLoading={pending}
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
							/>
						</div>
					</form>
				</div>
			</Card>

			<Link href='#' className='text-primary underline underline-offset-2'>
				Não tem uma conta? Criar conta
			</Link>
		</div>
	)
}
