import logo from '@/assets/img/logo.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden relative bg-[#1F1E27] p-8 h-[100svh] w-[100svw] flex items-center justify-center">
      <Image src={logo} width={881} height={217} alt="" />
      <Image
        alt=""
        src="/ghost.png"
        width={150}
        height={150}
        className="absolute -scale-x-100 left-[100%] animate-ghost rounded-tl-full rounded-bl-full mix-blend-exclusion"
      />
    </main>
  )
}
