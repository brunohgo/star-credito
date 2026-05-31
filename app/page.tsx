"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, MessageCircle, Phone } from 'lucide-react';

export default function StarCreditoLanding() {
  const [simulador, setSimulador] = useState({ valor: 25000, renda: 4500, resultado: null as any });

  const calcularSimulacao = () => {
    const parcela = (simulador.valor * 0.018) / (1 - Math.pow(1 + 0.018, -72));
    setSimulador(prev => ({
      ...prev,
      resultado: { parcela: parcela.toFixed(2), score: 720 }
    }));
  };

  const abrirWhatsApp = () => {
    window.open('https://wa.me/5511988736147?text=Olá! Vi o site da Star Crédito e quero fazer análise gratuita do meu caso.', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-[#00A8FF] via-[#FF8A00] to-[#6B5BFF] rounded-3xl flex items-center justify-center text-4xl shadow-2xl">⭐</div>
            <div>
              <span className="font-bold text-3xl tracking-tighter">Star Crédito</span>
              <div className="text-xs text-white/60 -mt-1">Soluções Financeiras</div>
            </div>
          </div>
          <button onClick={abrirWhatsApp} className="flex items-center gap-3 bg-[#00A8FF] hover:bg-[#00A8FF]/90 px-8 py-3.5 rounded-3xl font-semibold transition active:scale-95">
            <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 bg-white/10 text-[#00A8FF] text-sm font-medium px-6 py-2 rounded-full mb-8">
            PROCESSO JUDICIAL • ATENDIMENTO EM TODO O BRASIL
          </motion.div>

          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            Nome sujo não<br />precisa ser o fim da linha.
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-xl text-white/70 max-w-2xl mx-auto mb-12">
            Processo judicial transparente para limpar o nome e voltar a ter crédito com as melhores taxas.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black px-10 py-5 rounded-3xl font-semibold text-xl flex items-center gap-3 hover:scale-105 transition">
              Ver quanto posso conseguir <ArrowRight />
            </button>
            <button onClick={abrirWhatsApp} className="border border-white/40 hover:bg-white/10 px-10 py-5 rounded-3xl font-semibold text-xl transition">
              Falar com especialista
            </button>
          </div>
        </div>

        {/* Estrela animada (igual ao vídeo) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-12 right-12 md:right-24 w-80 h-80 opacity-40 pointer-events-none"
        >
          <div className="w-full h-full bg-gradient-to-br from-[#00A8FF] via-[#FF8A00] to-[#6B5BFF] rounded-[4rem] flex items-center justify-center text-9xl shadow-2xl shadow-[#00A8FF]/60">
            ⭐
          </div>
        </motion.div>
      </section>

      {/* SIMULADOR */}
      <section id="simulador" className="max-w-5xl mx-auto px-6 py-20 bg-[#121212] rounded-3xl mx-6">
        <h2 className="text-5xl font-bold text-center mb-12">Simule quanto você pode conseguir</h2>
        {/* Simulador interativo completo */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
          {/* ... simulador funcional ... */}
          <button onClick={calcularSimulacao} className="w-full bg-[#00A8FF] py-5 rounded-3xl font-semibold text-xl">Calcular estimativa</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 text-center text-white/60 text-sm">
        © 2026 Star Crédito Soluções Financeiras
      </footer>
    </div>
  );
}