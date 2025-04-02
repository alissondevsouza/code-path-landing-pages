'use client';

import { motion } from 'framer-motion'
import heroStyles from '../(styles)/heroStyle.module.css';
import { FiCheck } from 'react-icons/fi';
import {  FaCode, FaGift, FaLock, FaStar } from 'react-icons/fa';
import compraSeguraImage from '../../../../public/codigo-pro/site/comprasegura.svg';
import garantiaCliente from '../../../../public/codigo-pro/site/garantiacliente.svg';
import siteSeguro from '../../../../public/codigo-pro/site/siteseguro.svg';
import SecurityBadge from '../(components)/SecurityBadge';
 
const features = [
    {
        title: "Desvendando o Clean Code",
        description: "Domine Clean Code com exemplos reais que reduzem 70% dos bugs e aumentam a produtividade"
    },
    {
        title: "Desvendando a Clean Architecture",
        description: "Aprenda com casos reais a arquitetura de software mais usada pelas big techs para sistemas alta performance"
    },
    {
        title: "Dominando Domain Driven Design",
        description: "Estruture sistemas complexos como um expert utilizando Domain-Driven Design"
    },
    {
        title: "Guia Prático de Refatoração",
        description: "Técnicas passo a passo para aperfeiçoar design de código e manter sistemas legados"
    },
    {
        title: "Resumo Prático Sobre Padrões de Projeto",
        description: "Segredos de designs patterns que os melhores devs usam (mas não contam)"
    },
    {
        title: "Guia Simplificado do Programador Pragmático",
        description: "Hacks mentais e fluxos de trabalho dos programadores mais bem pagos do mercado"
    }
]

interface HeroSectionProps {
    children?: React.ReactNode
}

export default function HeroSection({ children }: HeroSectionProps) {
    return (
        <>
            <section className="max-w-[95rem] mx-auto my-4 md:my-10 p-4 md:p-8 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-25 items-center">
                <div className='relative'>
                    <div className='flex flex-col items-center mb-4'>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className={`${heroStyles.badge} mb-4 md:mb-8 text-sm md:text-base hover:scale-105 transition-transform text-center`}
                        >
                            🚀 <span className='animate-pulse'>+1.000</span> DEVS TRANSFORMARAM SUAS CARREIRAS
                        </motion.div>
                    </div>

                    <div className='space-y-6 md:space-y-8'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-[var(--secondary-codigo-pro)] to-[#00ff88] bg-clip-text text-transparent'>
                            Domine as Habilidades Mais Valorizadas do Mercado
                        </h2>
                        
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                            {features.map((feature, key) => (
                                <motion.div
                                    key={key}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: key * 0.1 }}
                                    className='p-4 md:p-6 bg-gradient-to-br from-black/30 to-black/50 rounded-xl border border-[var(--accent-codigo-pro)] hover:border-[var(--secondary-codigo-pro)] transition-all group'
                                >
                                    <div className='flex items-start gap-3 md:gap-4'>
                                        <div className='p-2 md:p-3 bg-[var(--dark-codigo-pro)] rounded-lg group-hover:bg-[var(--secondary-codigo-pro)] transition-colors'>
                                            <FiCheck className='text-lg md:text-xl text-[var(--secondary-codigo-pro)] group-hover:text-black' />
                                        </div>
                                        <div>
                                            <h3 className='text-lg md:text-xl font-semibold mb-1 md:mb-2'>{feature.title}</h3>
                                            <p className='text-sm md:text-gray-400'>{feature.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className='mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-2 md:gap-4 text-gray-400 text-sm md:text-base'>
                            <FaLock className='text-lg hidden md:block' />
                            <span className='font-extrabold'>+ Bônus Exclusivo: </span>
                            <span className='px-2 py-1 md:px-3 md:py-1 bg-[var(--accent-codigo-pro)] rounded-full flex items-center gap-2'>
                                <FaCode className='text-[var(--secondary-codigo-pro)]' />
                                <span className='text-xs md:text-sm'>Template Profissional Para Portifólio</span>
                            </span>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x:20 }}
                    animate={{ opacity: 1, x:0 }}
                    className='bg-[var(--primary-codigo-pro)] p-6 md:p-10 rounded-2xl border-[2px] border-[var(--accent-codigo-pro)] relative'
                >   
                    <div className={`w-auto md:w-48 mx-auto mb-4 bg-red-500 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs text-center font-bold ${heroStyles.badgeScarcity}`}>
                        ⚡ ÚLTIMAS UNIDADES!
                    </div>
                    <div className='w-full h-full flex flex-col justify-between space-y-6 md:space-y-8'>
                        <h3 className='text-3xl md:text-4xl text-center md:text-left mb-4 md:mb-6 font-bold'>PACOTE <span className={`${heroStyles.gradientText}`}>CÓDIGO PRÓ</span></h3>
                        <div className="flex flex-col items-center md:items-baseline gap-2 md:gap-4">
                            <div className="text-xl md:text-2xl text-gray-400 line-through">R$ 99,90</div>
                            <div className='text-4xl md:text-5xl font-bold text-[var(--secondary-codigo-pro)]'>R$ 29,90</div>
                        </div>
                        <p className='text-gray-400 text-center md:text-left text-sm md:text-base'>ou 12x R$ 2,90</p>

                        <button className={`${heroStyles.ctaButton} ${heroStyles.badgeScarcity} text-sm md:text-base`}>
                            <FaLock className='inline mr-2' /> GARANTIR MEU PACOTE AGORA
                        </button>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="relative">
                                        <FaStar className="text-gray-600 text-base md:text-lg" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm text-center">
                                +1.000 clientes satisfeitos
                            </p>
                        </div>

                        <div className={`mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4`}>
                            <SecurityBadge icon={compraSeguraImage} text="Pagamento Seguro" />
                            <SecurityBadge icon={garantiaCliente} text="Garantia 7 Dias" />
                            <SecurityBadge icon={siteSeguro} text="Certificado SSL" />
                        </div>

                        <div className='border-t border-[var(--accent-codigo-pro)] mt-6 md:mt-8'>
                            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-black/20 rounded-xl">
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="bg-[var(--secondary-codigo-pro)] p-3 md:p-4 rounded-lg">
                                        <FaGift className="text-2xl md:text-3xl text-black" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg md:text-xl font-bold">BÔNUS IMEDIATO</h4>
                                        <p className="opacity-90 text-sm md:text-base">Template Profissional Node.js com TS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
            {children}
        </>
    )
}