'use client';

import { FaBolt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import headerStyles from '../(styles)/headerStyle.module.css'
import CountdownTimer from '../(components)/CountdownTimer'

interface HeaderProps {
    children?: React.ReactNode
}


export default function Header({ children }: HeaderProps) {
    return (
        <>
            <header className={`py-12 md:py-20 px-4 text-center relative overflow-hidden ${headerStyles.headerGradient} ${headerStyles.clipPath}`}>
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] bg-[var(--secondary-codigo-pro)] rounded-full -top-20 -left-20 md:-top-32 md:-left-32 mix-blend-screen"></div>
                <div className="absolute w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-[var(--accent-codigo-pro)] rounded-full -bottom-28 -right-28 md:-bottom-40 md:-right-40 mix-blend-screen"></div>
            </div>


                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`${headerStyles.badge} mb-4 md:mb-6 text-sm md:text-base`}
                >
                    <FaBolt className='inline mr-2' /> PROMOÇÃO RELÂMPAGO - 70% OFF
                </motion.div>

                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight'>
                    Domine as{' '}
                    <span className={`${headerStyles.gradientText} inline-block`}>
                        Técnicas dos Experts
                    </span>{' '}
                    em Programação
                </h1>
                
                <div className="max-w-[52rem] mx-auto">
                    <p className="text-base md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90">
                        Torne-se um Desenvolvedor Acima da Média com Nosso Pacote Essencial:
                        <br className="hidden md:block"/>
                        <span className='font-extrabold block md:inline mt-2 md:mt-0'>
                            6 E-books Premium + Bônus Exclusivo
                        </span>
                    </p>
                    
                    <CountdownTimer />
                </div>
            </header>
            {children}
        </>
    )
}