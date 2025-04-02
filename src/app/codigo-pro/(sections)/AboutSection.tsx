'use client'

import { FaCheck, FaStar, FaClock, FaUsers } from 'react-icons/fa';
import aboutStyles from '../(styles)/aboutStyle.module.css';
import logo from '../../../../public/codigo-pro/domain/logo.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

interface AboutSectionProps {
    children?: React.ReactNode;
}

export default function AboutSection({ children }: AboutSectionProps) {
    return (
      <>
          <section className="py-12 md:py-20 px-4 bg-black text-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
              <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative group max-w-[90%] mx-auto"
              >
                  <Image 
                  src={logo}
                  alt="Logo"
                  className='rounded-xl md:rounded-2xl transform group-hover:scale-105 transition-all duration-300 shadow-xl md:shadow-2xl'
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl md:rounded-2xl" />
              </motion.div>
  
              <div>
                  <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-bold leading-snug md:leading-tight"
                  >
                      O que é o <span className={`${aboutStyles.gradientText}`}>PACOTE CÓDIGO PRÓ</span> ?
                  </motion.h2>
  
                  <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="mt-6 md:mt-8 text-base md:text-lg space-y-3 md:space-y-4 text-gray-300"
                  >
                  <p>
                      O <strong className="text-white">Pacote Código Pro</strong> é a ferramenta definitiva para desenvolvedores que querem:
                  </p>
  
                  <ul className="space-y-3 md:space-y-5">
                      {[
                      '🚀 Acelerar sua evolução técnica',
                      '💡 Entender padrões de projeto complexos',
                      '🎯 Aplicar soluções práticas no dia a dia',
                      '💰 Aumentar seu valor de mercado'
                      ].map((item, index) => (
                      <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center bg-gradient-to-r from-gray-900 to-black p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-800 text-sm md:text-base"
                      >
                          <FaStar className="text-yellow-400 mr-2 md:mr-3 flex-shrink-0 text-lg" />
                          {item}
                      </motion.li>
                      ))}
                  </ul>
                  </motion.div>
              </div>
              </div>
  
              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
              >
              {[
                  'Clean Code',
                  'Clean Architecture',
                  'Domain Driven Design',
                  'Refatoração',
                  'Padrões de Projeto',
                  'Programador Pragmático'
              ].map((book, index) => (
                  <motion.div
                  key={book}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 md:p-6 bg-gray-900 rounded-lg md:rounded-xl border border-gray-800 hover:border-purple-500 transition-all group"
                  >
                  <div className="flex items-center">
                      <div className="relative">
                      <FaCheck className="text-green-500 text-lg md:text-xl mr-2 md:mr-3" />
                      <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
                      </div>
                      <span className={`${aboutStyles.gradientText} text-lg md:text-xl font-semibold`}>
                      {book}
                      </span>
                  </div>
                  </motion.div>
              ))}
              </motion.div>
  
              <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 md:mt-20 text-center"
              >
              <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 md:px-8 md:py-3 rounded-full mb-6 md:mb-8 text-sm md:text-base">
                  <FaUsers className="mr-2 text-sm md:text-base" />
                  <span className='font-bold'>+1.000 Devs Já Transformaram suas Carreiras </span>
              </div>
  
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                  Junte-se aos Desenvolvedores {' '}
                  <span className={aboutStyles.gradientText}>Mais Bem Pagos do Mercado</span>
              </h3>
  
              <div className='flex items-center justify-center gap-2 md:gap-4 text-base md:text-lg font-bold' >
                  <FaClock className='text-[var(--accent-codigo-pro)] text-lg md:text-xl' /> 7 Dias de Garantia Incondicional
              </div>
              </motion.div>
  
              <div className='flex flex-col items-center justify-center gap-3 md:gap-4 text-gray-400 mt-6 md:mt-8'>
                  <button className={`${aboutStyles.ctaButton} ${aboutStyles.badgeScarcity} text-sm md:text-base`}>
                      QUERO TRANSFORMAR MINHA CARREIRA AGORA
                  </button>
  
                  <p className="text-gray-400 text-xs md:text-sm text-center px-4">
                      ⚠️ Atenção: Preço especial por tempo limitado. Garanta seu acesso antes do aumento!
                  </p>
              </div>
          </div>
          </section>
          {children}
      </>
    );
  }