'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import evidenceStyles from '../(styles)/EvidenceSection.module.css';


interface EvidenceSectionProps {
    children?: React.ReactNode;
}

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Desenvolvedor Front-end",
    quote: "Os ebooks me deram o conhecimento prático que faltava na faculdade. O template de portfólio foi crucial para conseguir minha primeira vaga!"
  },
  {
    id: 2,
    name: "Antonio W. Holland",
    role: "Engenheiro de Software",
    quote: "Comprei para me atualizar e acabei revendo conceitos fundamentais que melhoraram meu código em 200%. Recomendo!"
  },
  {
    id: 3,
    name: "Fernando Costa",
    role: "Tech Lead",
    quote: "O ebook sobre Clean Code e Refectoring me ajudou a liderar minha equipe com mais propriedade. Recomendo para todos os líderes!"
  },
  {
    id: 4,
    name: "Breno Pereira Goncalves",
    role: "Desenvolvedor Full-Stack Sênior",
    quote: "Usei os ebooks para rever conceitos e me atualizar do que ha de mais moderno no mercado. Recomendo para todos!"
  },
  {
    id: 5,
    name: "Ricardo Moura",
    role: "CTO",
    quote: "Adquiri para minha equipe e os resultados foram imediatos. Redução de 40% no tempo de onboarding de novos desenvolvedores!"
  },
  {
    id: 6,
    name: "Camila Santos",
    role: "Mobile Developer",
    quote: "Os exemplos práticos dos ebooks me ajudaram a pular de Júnior para Pleno em 6 meses. Valeu cada centavo investido!"
  },
  {
    id: 7,
    name: "Lucas Oliveira",
    role: "Engeheiro de Software",
    quote: "Mesmo com experiência, aprendi padrões de código mais seguros. O capítulo de boas práticas de segurança é imbatível!"
  },
  {
    id: 8,
    name: "Mariana Lima",
    role: "Desenvolvedora Back-end",
    quote: "Migrei de carreira aos 35 anos graças à didática clara dos materiais. Hoje tenho flexibilidade e salário 3x maior!"
  },
  {
    id: 9,
    name: "Roberto Nogueira",
    role: "Desenvolvedor Full-Stack",
    quote: "Os ebooks me ajudaram a entender o fluxo de trabalho de uma equipe ágil. Hoje sou mais produtivo e assertivo!"
  },
  {
    id: 10,
    name: "Gustavo Oliveira Rodrigues",
    role: "Engenheiro de Software Sênior",
    quote: "Magnifico! Graças aos ebooks, consegui implementar um novo padrão de arquitetura que reduziu em 50% o tempo de deploy!"
  }
];

export default function EvidenceSection({ children }: EvidenceSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return(
    <>
      <section className="py-8 md:py-10 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-gray-800">
            + de 1000 Devs Ja Alçaram o Próximo Nivel Com Nossos Materiais
          </h2>
          <p className="max-w-4xl mx-auto text-base md:text-xl text-center text-gray-700 mb-8 md:mb-12">
            Veja como nossos materiais ajudaram desenvolvedores a se tornarem profissionais que o mercado procura e hoje trabalham nas melhores empresas do Brasil e do mundo.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto relative overflow-hidden"
        >
          <div className="relative w-full">
            <div className="flex transition-transform duration-500 ease-in-out" 
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 flex justify-center px-2 md:px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-4 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 max-w-2xl w-full"
                  >
                    <div className="flex items-center mb-4">
                      <Image 
                        src={`/codigo-pro/people/pessoa${testimonial.id}.png`}
                        width={48}
                        height={48}
                        alt="Depoimento"
                        className="rounded-full mr-3 md:mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-sm md:text-base text-gray-800">{testimonial.name}</h3>
                        <p className="text-blue-600 text-xs md:text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic text-sm md:text-base">{testimonial.quote}</p>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4">
              <button onClick={handlePrev} className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <FiChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button onClick={handleNext} className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <FiChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            <div className="md:hidden flex justify-center gap-4 mt-6">
              <button onClick={handlePrev} className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <FiChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button onClick={handleNext} className="bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform">
                <FiChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-6 rounded-full transition-all ${
                    activeIndex === index ? 'bg-[var(--accent-codigo-pro)]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="py-8 md:py-16 text-center">
            <div className="max-w-7xl mx-auto px-4">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                Faça Como Eles e Alcance o Próximo Nível Também!
              </h3>
              <p className="text-base md:text-xl text-gray-700">
                De <span className="line-through text-red-400">R$ 99,90</span> por apenas
                <span className="text-2xl md:text-3xl text-[var(--secondary-codigo-pro)] font-bold ml-2">R$ 29,90</span>
              </p>
              <p className='text-sm md:text-lg font-bold text-gray-600 mb-4 md:mb-8'>ou 12x R$ 2,90</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${evidenceStyles.ctaButton} text-sm md:text-base`}
              >
                QUERO ALCANÇAR O PRÓXIMO NÍVEL!
              </motion.button>

              <div className="mt-6 md:mt-8 flex flex-wrap justify-center items-center gap-3 md:gap-4">
                {['visa', 'mastercard', 'pix', 'boleto'].map((payment) => (
                  <div key={payment} className="flex items-center space-x-2">
                    <Image 
                      src={`/codigo-pro/payment/${payment}.png`}
                      width={32}
                      height={32}
                      alt={payment}
                      className="opacity-70 w-8 h-8 md:w-12 md:h-12"
                    />
                    <p className='text-xs md:text-xl text-black hidden md:block'>{payment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {children}
    </>
  )
}