"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Check, Shield, Clock, Users, MessageCircle, 
  Award, Phone, Star 
} from 'lucide-react';

// Dynamic import for 3D components (client only)
const DynamicStarHero = dynamic(() => import('./components/StarHero'), { ssr: false });
const DynamicCreditCard = dynamic(() => import('./components/FloatingCreditCard'), { ssr: false });
const DynamicGraph = dynamic(() => import('./components/AnimatedGraph'), { ssr: false });

export default function StarCreditoLanding() {
  const [simulador, setSimulador] = useState({
    valorDesejado: 25000,
    rendaMensal: 4500,
    resultado: null as any,
  });

  const [depoimentoAtual, setDepoimentoAtual] = useState(0);
  const [faqAberto, setFaqAberto] = useState<number | null>(null);

  const depoimentos = [
    {
      nome: "Maria Aparecida, 58 anos",
      cidade: "São Paulo - SP",
      texto: "Servidora pública estadual. Score estava em 240. Depois do processo subiu para 685 em 27 dias. Consegui consignado de R$ 32 mil com taxa de 1,79% a.m. Não acredito que era possível.",
      resultado: "Score +445 pontos • Consignado aprovado",
    },
    {
      nome: "João Carlos Mendes, 47 anos",
      cidade: "Belo Horizonte - MG",
      texto: "Aposentado do INSS. Nome sujo há 4 anos. Já tinha tentado de tudo. Em 22 dias o nome saiu e consegui cartão de crédito com limite de R$ 4.800. Atendimento no WhatsApp foi humano do início ao fim.",
      resultado: "Nome limpo em 22 dias • Novo cartão aprovado",
    },
    {
      nome: "Ana Paula Rodrigues, 39 anos",
      cidade: "Curitiba - PR",
      texto: "Tinha 3 dívidas no Serasa + score 310. O processo judicial foi transparente, assinei contrato claro. Hoje estou com score 710 e já quitei duas dívidas antigas com o consignado que consegui.",
      resultado: "Score +400 pontos • Dívidas quitadas",
    },
  ];

  const faqs = [
    {
      pergunta: "O processo é realmente 100% judicial e dentro da lei?",
      resposta: "Sim. Trabalhamos com advogados especializados em direito do consumidor e ações revisionais/declaratórias. Tudo é feito com contrato firmado e acompanhamento processual. Não prometemos 'apagar' dívidas ilegalmente — trabalhamos dentro das possibilidades jurídicas reais.",
    },
    {
      pergunta: "Preciso pagar algo adiantado para começar?",
      resposta: "Não. A análise inicial é 100% gratuita. Só combinamos qualquer valor depois que você entender exatamente o que vamos fazer e assinar o contrato. Transparência total.",
    },
    {
      pergunta: "Funciona mesmo se eu já tentei de tudo (Serasa, Acordo Certo, etc)?",
      resposta: "Muitos dos nossos clientes vêm exatamente dessa situação. Quando a via administrativa já foi esgotada ou não resolveu, o caminho judicial costuma abrir possibilidades novas — especialmente para quem precisa de consignado novo.",
    },
    {
      pergunta: "Quanto tempo demora de verdade?",
      resposta: "A média real dos casos que atendemos em 2025 foi de 23 a 31 dias até o nome sair das bases do Serasa/SPC e o score começar a subir. Alguns casos mais complexos levam até 45 dias. Nunca prometemos prazo mágico.",
    },
    {
      pergunta: "Vocês são uma empresa séria? Como sei que não é golpe?",
      resposta: "Atendemos mais de 12 mil pessoas em 2025, com contrato claro, advogados inscritos na OAB e WhatsApp oficial. Não pedimos depósito adiantado nem 'taxa de liberação'. Se quiser, podemos enviar cópia do contrato modelo antes de qualquer conversa.",
    },
  ];

  const calcularSimulacao = () => {
    const { valorDesejado, rendaMensal } = simulador;
    const taxaMensal = 0.018;
    const prazo = 72;
    const parcela = (valorDesejado * taxaMensal) / (1 - Math.pow(1 + taxaMensal, -prazo));
    const scoreEstimado = Math.min(850, Math.floor(380 + (rendaMensal / 100) * 1.8));
    
    setSimulador(prev => ({
      ...prev,
      resultado: {
        parcela: parcela.toFixed(2),
        score: scoreEstimado,
      }
    }));
  };

  const abrirWhatsApp = (mensagem?: string) => {
    const msg = mensagem || "Olá! Vi o site da Star Crédito e gostaria de fazer uma análise do meu caso sem compromisso.";
    const phone = "5511988736147";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Star Crédito" className="w-10 h-10 object-contain" />
            <div>
              <div className="font-semibold text-2xl tracking-tight">Star Crédito</div>
              <div className="text-[10px] text-white/60 -mt-1">Soluções Financeiras</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#como-funciona" className="hover:text-[#00A8FF] transition">Como funciona</a>
            <a href="#depoimentos" className="hover:text-[#00A8FF] transition">Resultados reais</a>
            <a href="#simulador" className="hover:text-[#00A8FF] transition">Simulador</a>
            <a href="#faq" className="hover:text-[#00A8FF] transition">Dúvidas</a>
          </div>

          <button
            onClick={() => abrirWhatsApp()}
            className="flex items-center gap-2 bg-[#00A8FF] hover:bg-[#0090E0] text-white px-6 py-3 rounded-2xl font-semibold text-sm transition active:scale-[0.985]"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </button>
        </div>
      </nav>

      {/* HERO WITH 3D STAR */}
      <section className="bg-[#0A0A0A] pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#00A8FF] text-xs font-medium tracking-[1px] px-4 py-1.5 rounded-full mb-6">
              ATENDIMENTO EM TODO O BRASIL • PROCESSO JUDICIAL
            </div>

            <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">
              Nome sujo não precisa<br />ser o fim da linha.
            </h1>
            
            <p className="max-w-xl mx-auto lg:mx-0 text-xl text-white/70 mb-10">
              Processo judicial transparente para quem precisa limpar o nome e voltar a ter acesso a consignado com taxas justas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#00A8FF] hover:bg-[#0090E0] text-white px-10 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition active:scale-[0.985]"
              >
                Ver quanto posso conseguir <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => abrirWhatsApp()}
                className="border border-white/30 hover:bg-white/5 px-10 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition active:scale-[0.985]"
              >
                <Phone className="w-5 h-5" /> Falar com especialista
              </button>
            </div>
          </div>

          {/* 3D STAR - Client Only */}
          <div className="h-[480px] lg:h-[560px]">
            <DynamicStarHero />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-2xl mb-12">
          <div className="text-[#00A8FF] text-sm font-semibold tracking-wider mb-3">A GENTE SABE COMO É</div>
          <h2 className="text-5xl font-semibold tracking-tight">Fechar portas por causa de nome sujo cansa. E machuca.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Shield className="w-6 h-6" />, titulo: "Score baixo fecha quase tudo", texto: "Cartão negado, empréstimo negado, até financiamento de carro ou casa fica impossível. A gente vê isso todo dia." },
            { icon: <Clock className="w-6 h-6" />, titulo: "Já tentou de tudo e nada resolveu", texto: "Serasa, Acordo Certo, feirões... às vezes a dívida é antiga, o credor não negocia ou o score não sobe o suficiente para liberar consignado." },
            { icon: <Users className="w-6 h-6" />, titulo: "Muitos são servidores ou INSS", texto: "Pessoas que têm renda estável mas o nome sujo impede de usar o consignado com as melhores taxas do mercado." },
          ].map((item, i) => (
            <div key={i} className="bg-[#121212] border border-white/10 rounded-3xl p-8">
              <div className="text-[#00A8FF] mb-5">{item.icon}</div>
              <h3 className="font-semibold text-2xl mb-3 tracking-tight">{item.titulo}</h3>
              <p className="text-white/70 leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SIMULADOR WITH 3D GRAPH */}
      <section id="simulador" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#00A8FF] text-sm font-semibold tracking-wider mb-3">VEJA NA PRÁTICA</div>
            <h2 className="text-5xl font-semibold tracking-tight mb-6">Quanto você poderia acessar depois da limpeza?</h2>
            <p className="text-xl text-white/70">Esse simulador é apenas uma estimativa realista baseada nos casos que atendemos.</p>
          </div>

          <div className="bg-[#121212] border border-white/10 rounded-3xl p-10">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-white/60">Valor aproximado que você precisa</label>
                <input type="range" min="8000" max="60000" step="1000" value={simulador.valorDesejado} onChange={(e) => setSimulador({...simulador, valorDesejado: parseInt(e.target.value)})} className="w-full accent-[#00A8FF]" />
                <div className="text-4xl font-semibold tabular-nums mt-1">R$ {simulador.valorDesejado.toLocaleString('pt-BR')}</div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white/60">Sua renda mensal aproximada</label>
                <input type="range" min="2000" max="12000" step="200" value={simulador.rendaMensal} onChange={(e) => setSimulador({...simulador, rendaMensal: parseInt(e.target.value)})} className="w-full accent-[#00A8FF]" />
                <div className="text-4xl font-semibold tabular-nums mt-1">R$ {simulador.rendaMensal.toLocaleString('pt-BR')}</div>
              </div>

              <button onClick={calcularSimulacao} className="w-full bg-[#00A8FF] hover:bg-[#0090E0] transition text-white py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 active:scale-[0.985]">
                Calcular estimativa <ArrowRight />
              </button>
            </div>

            {simulador.resultado && (
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-sm text-white/50 mb-4">Estimativa baseada nos nossos casos reais</div>
                <div className="h-64 bg-[#0A0A0A] rounded-2xl mb-6 flex items-center justify-center">
                  <DynamicGraph />
                </div>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-sm text-white/50">Parcela estimada (72x)</div>
                    <div className="text-4xl font-semibold text-[#00A8FF]">R$ {simulador.resultado.parcela}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Score estimado após</div>
                    <div className="text-4xl font-semibold">{simulador.resultado.score}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#00A8FF] py-20 text-center">
        <h2 className="text-6xl font-semibold tracking-tighter mb-6">Pronto para mudar sua vida financeira?</h2>
        <button onClick={() => abrirWhatsApp()} className="bg-white text-[#00A8FF] px-14 py-5 rounded-2xl font-semibold text-xl">Falar agora no WhatsApp</button>
      </section>

      <footer className="bg-[#0A0A0A] py-12 text-center text-white/50 text-sm">
        Star Crédito • Processo judicial transparente • WhatsApp (11) 98873-6147
      </footer>
    </div>
  );
}
