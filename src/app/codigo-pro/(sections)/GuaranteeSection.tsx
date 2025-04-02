import Image from "next/image";
import garantiaImage from '../../../../public/codigo-pro/site/garantia.png';

interface GuaranteeSectionProps {
    children?: React.ReactNode;
}


export default function GuaranteeSection({ children }: GuaranteeSectionProps) {
    return (
        <>
            <section className="py-12 md:py-24 px-4 bg-white text-black overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    <div className="flex-shrink-0 max-w-[300px] md:max-w-none">
                        <Image 
                            src={garantiaImage}
                            width={300}
                            height={300}
                            alt="Garantia"
                            className="w-full h-auto mx-auto"
                        />
                    </div>
                    <div className="md:flex-1 md:text-left text-center mt-6 md:mt-0">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-3 md:mb-4">
                            VOCÊ NÃO TEM NADA A PERDER!
                        </h1>
                        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                            Você terá 7 dias para testar. Se nesse período você acreditar que o 
                            conteúdo não é para você, não tem problema, eu devolvo 100% do seu dinheiro.
                        </p>
                    </div>
                </div>
            </section>
            {children}
        </>
    )
}