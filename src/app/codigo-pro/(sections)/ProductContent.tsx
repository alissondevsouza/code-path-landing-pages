'use client';

import productContentStyle from '../(styles)/productContentStyle.module.css';
import { motion } from 'framer-motion';

interface ProductContentProps {
    children?: React.ReactNode;
}

const features = [
    {
        header: "Ebook 01",
        title: "Desvendando o Clean Code",
        description: "Domine Clean Code com exemplos reais que reduzem 70% dos bugs e aumentam a produtividade"
    },
    {
        header: "Ebook 02",
        title: "Desvendando a Clean Architecture",
        description: "Aprenda com casos reais a arquitetura de software mais usada pelas big techs para sistemas alta performance"
    },
    {
        header: "Ebook 03",
        title: "Dominando Domain Driven Design",
        description: "Estruture sistemas complexos como um expert utilizando Domain-Driven Design"
    },
    {
        header: "Ebook 04",
        title: "Guia Prático de Refatoração",
        description: "Técnicas passo a passo para aperfeiçoar design de código e manter sistemas legados"
    },
    {
        header: "Ebook 05",
        title: "Resumo Prático Sobre Padrões de Projeto",
        description: "Segredos de designs patterns que os melhores devs usam (mas não contam)"
    },
    {
        header: "Ebook 06",
        title: "Guia Simplificado do Programador Pragmático",
        description: "Hacks mentais e fluxos de trabalho dos programadores mais bem pagos do mercado"
    }
]

export default function ProductContent({ children }: ProductContentProps) {
    return (
        <>
            <section className='py-16 md:py-20 px-4 bg-black text-white overflow-hidden'>
                <div className='max-w-5xl mx-auto'>
                    <h1 className={`text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-tight text-center`}>
                        Adquira o <span className={`${productContentStyle.gradientText}`}>Pacote Código Pró</span> e Tenha Acesso a Todo este Conteúdo:
                    </h1>
                </div>
                <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-8 md:mt-12'>
                    {features.map((feature, key) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: key * 0.1 }}
                            className='p-4 md:p-6 bg-gradient-to-br from-black/30 to-black/50 rounded-xl border border-[var(--accent-codigo-pro)] hover:border-[var(--secondary-codigo-pro)] transition-all group'
                        >
                            <div className='flex items-start gap-3 md:gap-4'>
                                <div className='flex flex-col items-center justify-center w-full'>
                                    <h1 className='text-lg md:text-xl font-bold bg-[var(--accent-codigo-pro)] rounded-lg md:rounded-xl p-1 md:p-2 mb-3 md:mb-4 w-full text-center'>
                                        {feature.header}
                                    </h1>
                                    <h3 className='text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-center'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-sm md:text-gray-400 text-center mb-3 md:mb-4 mx-0.5'>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className='max-w-2xl mx-auto mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-br from-black/30 to-black/50 rounded-xl border border-[var(--secondary-codigo-pro)] hover:border-[var(--accent-codigo-pro)] transition-all group'
                >
                    <div className='flex items-center justify-center gap-3 md:gap-4'>
                        <div className='flex flex-col items-center justify-center w-full'>
                            <h1 className='text-lg md:text-xl text-gray-800 font-bold bg-[var(--secondary-codigo-pro)] rounded-lg md:rounded-xl p-1 md:p-2 mb-3 md:mb-4 w-full text-center'>
                                SUPER BÔNUS EXCLUSIVO
                            </h1>
                            <h3 className='text-xl md:text-2xl font-semibold mb-1 md:mb-2 text-center'>
                                Template Profissional Para Seu Portfólio
                            </h3>
                            <p className='text-sm md:text-gray-400 text-center mb-3 md:mb-4 mx-0.5'>
                                Tenha um template profissional (em Node.js com TypeScript) com design patterns atuais e seguindo princípios de 
                                Clean Code e SOLID, para você usar como base em seus projetos e até publicar em seu portfólio.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </section>
            {children}
        </>
    )
}