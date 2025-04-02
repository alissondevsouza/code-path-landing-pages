'use client';

import { useState, useEffect } from 'react';
import { useMemo } from 'react';

export default function CountdownTimer() {
    const initialTime = useMemo(() => 22 * 60 * 60, []);  
    const [timeLeft, setTimeLeft] = useState(initialTime);
  
    useEffect(() => {
        const timer = setInterval(() => {
          setTimeLeft((prev) => {
            if (prev <= 1) return initialTime;
            return prev - 1;
          });
        }, 1000);
    
        return () => clearInterval(timer);
      },[initialTime]); 
  
    const formatTime = () => {
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
  
      return {
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      };
    };
  
    const { hours, minutes, seconds } = formatTime();
  
    return (
      <div className="bg-black/30 p-4 rounded-lg mb-8 border border-[var(--secondary-codigo-pro)]">
        <p className="text-sm mb-2 uppercase tracking-wider">OFERTA TERMINA EM:</p>
        <div className="flex justify-center gap-3 font-bold text-3xl">
          <div className="bg-[var(--dark-codigo-pro)] px-4 py-2 rounded-lg">{hours}</div>
          <div className="text-[var(--secondary-codigo-pro)]">:</div>
          <div className="bg-[var(--dark-codigo-pro)] px-4 py-2 rounded-lg">{minutes}</div>
          <div className="text-[var(--secondary-codigo-pro)]">:</div>
          <div className="bg-[var(--dark-codigo-pro)] px-4 py-2 rounded-lg">{seconds}</div>
        </div>
      </div>
    );
}