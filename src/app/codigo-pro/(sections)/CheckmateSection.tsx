'use client'

import { FaCheck } from "react-icons/fa";
import checkmateStyle from '../(styles)/checkmateStyle.module.css';
import Image from 'next/image';

interface CheckmateSectionProps {
    children?: React.ReactNode;
}

const offerItems = [
    { name: 'Livro Clean Code', price: 'R$ 125,90', included: true },
    { name: 'Livro Clean Architecture', price: 'R$ 217,71', included: true },
    { name: 'Livro Implementando Domain-Driven-Design', price: 'R$ 145,38', included: true },
    { name: 'Livro Refatoração: Aperfeiçoando Códigos', price: 'R$ 94,58', included: true },
    { name: 'Livro Padrões de Projeto', price: 'R$ 141,95', included: true },
    { name: 'Livro o Programador Pragmático', price: 'R$ 149,63', included: true },
    { name: 'Aplicação em node.js com TS', price: 'Incalculavel', included: true },
];


export default function CheckmateSection({ children }: CheckmateSectionProps) {
    return (
        <>
            <section className="py-12 md:py-20 px-4 bg-black text-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
                    <div className="max-w-5xl">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-center leading-tight md:leading-normal">
                            Se você comprasse todo o material que usei para montar este conteúdo, gastaria facilmente mais de R$ 1.000,00 
                            sem contar o tempo que você investiria para ler e entender centenas de páginas e conteúdos super técnicos.
                        </h1>
                        <p className="text-base md:text-xl font-bold text-center mt-4 md:mt-6 text-[var(--secondary-codigo-pro)]">
                            Entregarei tudo isso por apenas uma fração desse valor...
                        </p>
                    </div>
                    
                    <div className='max-w-4xl mx-auto mt-8 md:mt-12'>
                        <div className='bg-[var(--primary-codigo-pro)] p-6 md:p-10 rounded-xl md:rounded-2xl border-2 border-[var(--accent-codigo-pro)] relative'>
                            <div className="mb-8 md:mb-12">
                                <h1 className={`text-2xl md:text-4xl font-bold text-center ${checkmateStyle.gradientText} px-4`}>
                                    Oferta Exclusiva Válida Apenas Pelos Próximos Dias
                                </h1>
                            </div>

                            <div className='max-w-xl mx-auto'>
                                <div className='flex flex-col gap-3 md:gap-4'>
                                    {offerItems.map((item, index) => (
                                        <div key={index} className='flex justify-between items-center bg-[var(--accent-codigo-pro)] p-3 md:p-4 rounded-md md:rounded-lg'>
                                            <div className="flex items-center gap-2 md:gap-3">
                                                <FaCheck className='text-[var(--secondary-codigo-pro)] text-lg md:text-xl flex-shrink-0'/>
                                                <p className='text-sm md:text-base font-semibold text-black line-clamp-2'>
                                                    {item.name}
                                                </p>
                                            </div>
                                            <p className='text-sm md:text-base font-bold text-[var(--secondary-codigo-pro)] whitespace-nowrap ml-2'>
                                                {item.price}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="mt-8 md:mt-12 text-center">
                                <div className="mb-6 md:mb-8">
                                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                                        Valor Total:
                                    </h2>
                                    <div className="text-3xl md:text-4xl font-bold text-red-500 line-through">
                                        R$ 99,90
                                    </div>
                                </div>

                                <div className="bg-black/20 p-6 md:p-8 rounded-xl">
                                    <h3 className="text-lg md:text-xl text-white mb-4">
                                        Você Paga Hoje:
                                    </h3>
                                    <div className="flex flex-col items-center gap-4">

                                    <div className="flex flex-col items-center md:flex-row md:items-baseline gap-2">
                                        <div className="text-2xl md:text-4xl font-bold text-[var(--secondary-codigo-pro)]">
                                            12x de
                                        </div>
                                        <div className="flex items-baseline gap-1">
                                        <span className="text-7xl md:text-7xl font-bold text-[var(--secondary-codigo-pro)]">R$</span>
                                        <span className="text-7xl md:text-7xl font-bold text-[var(--secondary-codigo-pro)]">2,90</span>
                                        </div>
                                    </div>

                                    <span className="text-white text-lg md:text-2xl">
                                        ou
                                    </span>

                                    <div className={`flex items-baseline gap-2 text-2xl md:text-4xl font-bold ${checkmateStyle.gradientText}`}>
                                        <span>R$</span>
                                        <span>29,90</span>
                                        <span className="text-lg md:text-2xl">à vista</span>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-8 md:mt-12 text-center'>
                                <button className={`${checkmateStyle.ctaButton} ${checkmateStyle.badgeScarcity} 
                                    w-full max-w-md mx-auto py-4 md:py-5 text-lg md:text-xl
                                    hover:scale-105 transition-transform duration-200`}>
                                    QUERO MEU ACESSO IMEDIATO!
                                </button>
                            </div>

                            <div className="mt-8 md:mt-12">
                                <p className="text-center text-gray-300 mb-4 text-sm md:text-base">
                                    Métodos de pagamento aceitos:
                                </p>
                                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                    {['visa', 'mastercard', 'pix', 'boleto'].map((payment) => (
                                        <div key={payment} className="flex items-center gap-1 md:gap-2 bg-white/10 p-2 rounded-lg">
                                            <Image 
                                                src={`/codigo-pro/payment/${payment}.png`}
                                                width={40}
                                                height={40}
                                                alt={payment}
                                                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                            />
                                            <span className="text-white text-sm md:text-base capitalize hidden md:inline">
                                                {payment}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>       
                    </div>
                </div>
            </section>
            {children}
        </>
    )
}