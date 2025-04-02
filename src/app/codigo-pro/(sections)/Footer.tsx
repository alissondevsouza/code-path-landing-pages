import { FaCopyright } from 'react-icons/fa'
import cp from '../../../../public/codigo-pro/domain/CP.png'
import Image from 'next/image'
import footerStyle  from '../(styles)/footerStyle.module.css'

export default function Footer() {
  return (
    <footer className={`px-4 text-center relative overflow-hidden ${footerStyle.headerGradient}`}>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-[var(--secondary-codigo-pro)] rounded-full -top-20 -left-20 md:-top-32 md:-left-32 mix-blend-screen"></div>
        <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-[var(--accent-codigo-pro)] rounded-full -bottom-28 -right-28 md:-bottom-40 md:-right-40 mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6 space-y-6 md:space-y-0">
          <div className="w-32 md:w-48 transition-all duration-300 hover:scale-105">
            <Image
              src={cp}
              alt="Logo Código Pro"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <p className="text-base md:text-lg font-semibold text-white max-w-[500px] px-4 md:px-0">
            Capacitando Desenvolvedores de Software a Alcançarem as Habilidades que o Mercado Exige.
          </p>
        </div>

        <div className="border-t border-white/30 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-center text-sm text-white/80 space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-2">
              <FaCopyright className="text-sm" />
              <span>2025 Code Path. Todos os direitos reservados.</span>
            </div>
            <div className="hidden md:block">•</div>
          </div>
        </div>
      </div>
    </footer>
  )
}