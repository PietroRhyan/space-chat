'use client'

import { Input } from "@/ui/input";
import { useInputVisibility } from "@/ui/input/use-input-visibility";
import { VisibleInputIcon } from "@/ui/input/visible-input-icon";
import { Label } from "@/ui/label";
import Link from "next/link";
import { Card } from "ui/card";

export default function SignIn() {
  const { isVisible, handleVisibility } = useInputVisibility()

  return (
    <Card
      title="Fazer login"
      width={480}
    >
      <div className='w-full flex flex-col gap-6'>
        <p>Seja bem-vindo ao SpaceChat! Por favor, insira suas credenciais para acessar sua conta</p>

        <form action="" className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-2" >
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" minLength={6} placeholder="Digite seu e-mail" autoComplete='off' />
          </div>

          <div className="w-full flex flex-col gap-2" >
            <Label htmlFor="password">Senha</Label>
            <Input 
              id="password" 
              type={isVisible ? 'text' : 'password'} 
              minLength={6} 
              placeholder="Digite sua senha" 
              autoComplete='off'
              icon={
                <VisibleInputIcon 
                  isVisible={isVisible}
                  handleVisibility={handleVisibility} 
                />
              }  
            />

            <Link href='#' className="text-primary underline underline-offset-2 ml-auto">Esqueci minha senha</Link>
          </div>
        </form>

      </div>
    </Card>
  )
}