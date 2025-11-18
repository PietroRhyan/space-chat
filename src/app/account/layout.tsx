import { LogoWithTypography } from "./shared/components/logo-with-typography";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative h-screen w-full" >
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#CBD9D8_1px,transparent_2px)] bg-size-[16px_16px]" />
      <div className="absolute h-full w-full bg-radial from-[#111D1C] to-[#000] opacity-95" />
      <div className="relative z-10 pt-16 w-full flex flex-col items-center gap-[75px]">
        <LogoWithTypography />

        {children}
      </div>
    </section>
  )
}