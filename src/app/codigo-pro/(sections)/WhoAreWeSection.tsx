'use client'

import Image from "next/image"
import cp from "../../../../public/codigo-pro/domain/CP.png"

interface WhoAreWeSectionProps {
    children?: React.ReactNode
}

export default function WhoAreWeSection({ children }: WhoAreWeSectionProps) {
    return (
        <>
            <section className="py-16 md:py-24 px-4 bg-white text-black overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <div className="space-y-6 md:space-y-8">
                            <h1 className={`text-3xl md:text-5xl font-extrabold tracking-tight text-gray-800 text-center`}>
                                Quem Somos?
                            </h1>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                Somos uma equipe de Engenheiros de Software com anos de experiência no mercado de TI, forjados em projetos que desafiaram limites e 
                                transformaram realidades. Mais do que mestres do código, somos movidos por uma paixão visceral por tecnologia e uma obsessão por inovação.
                                Temos a certeza inabalável de que a programação é a chave para desbloquear um mundo de possibilidades para você, para empresas, para o 
                                futuro.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-gray-700">
                                Foi essa visão que deu vida à <span className="font-bold">Code Path</span>. Não oferecemos simples cursos ou infoprodutos nós entregamos 
                                uma jornada estratégica para que você domine o desenvolvimento de software, conquiste sua liberdade no mercado tech e eleve suas 
                                habilidades a patamares extraordinários. Com a Code Path, você não apenas aprende, você se torna protagonista de uma revolução digital 
                                guiada por quem já venceu esse jogo.
                            </p>
                        </div>
                        <div className="relative flex justify-center mt-8 lg:mt-0">
                            <div className="relative z-10 max-w-[90%] md:max-w-none">
                                <Image 
                                    src={cp}
                                    alt="Logo Code Path"
                                    width={500}
                                    height={500}
                                    className="rounded-xl md:rounded-3xl shadow-lg md:shadow-2xl hover:scale-105 transition-transform duration-500"
                                    style={{
                                        width: '100%',
                                        height: 'auto'
                                    }}
                                />
                            </div>
                            <div className="absolute inset-0 bg-[#7A63FF]/10 rounded-full blur-xl md:blur-3xl scale-110 md:scale-125 -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>
            {children}
        </>
    )
}