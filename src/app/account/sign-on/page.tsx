'use client'

import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { Input } from '@/ui/input'
import { useInputVisibility } from '@/ui/input/use-input-visibility'
import { VisibleInputIcon } from '@/ui/input/visible-input-icon'
import { useSignOn } from './hooks/use-sign-on'

export default function SignOn() {
  const { handleVisibility, isVisible } = useInputVisibility()

  const { register, handleSubmit, onSubmit, isLoading, errors, signInRoute } = useSignOn()

  return (
    <div className='flex flex-col gap-2'>
      <Card title='Cadastro da conta' width={480}>
        <div className='w-full flex flex-col gap-6'>
          <p>
            Crie sua conta agora e converse com seus companheiros astronautas!
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full flex flex-col gap-6'
          >
            <div className='w-full flex flex-col gap-2'>
              <Label htmlFor='name'>Nome</Label>
              <Input
                id='name'
                {...register('name')}
                type='string'
                placeholder='Digite seu nome'
                disabled={isLoading}
                autoComplete='off'
              />
              {errors.name && (
                <p className='text-danger text-xs'>{errors.name.message}</p>
              )}
            </div>

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
            </div>

            <div className='w-full mt-3 flex flex-col gap-6'>
              <Button
                title='Criar conta'
                type='submit'
                fullWidth
                isLoading={isLoading}
              />
            </div>
          </form>
        </div>
      </Card>

      <Link
        href={signInRoute()}
        className='text-primary underline underline-offset-2'
      >
        Já tem uma conta? Realizar login
      </Link>
    </div>
  )
}
