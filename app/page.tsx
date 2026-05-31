"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Check, Shield, Clock, Users, MessageCircle, 
  Award, Phone 
} from 'lucide-react';

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
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Star Crédito" className="w-9 h-9 object-contain" />
            <div>
              <div className="font-semibold text-2xl tracking-tight">Star Crédito</div>
              <div className="text-[10px] text-slate-500 -mt-1">Soluções Financeiras</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#como-funciona" className="hover:text-emerald-700 transition">Como funciona</a>
            <a href="#depoimentos" className="hover:text-emerald-700 transition">Resultados reais</a>
            <a href="#simulador" className="hover:text-emerald-700 transition">Simulador</a>
            <a href="#faq" className="hover:text-emerald-700 transition">Dúvidas</a>
          </div>

          <button
            onClick={() => abrirWhatsApp()}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl font-semibold text-sm transition active:scale-[0.985]"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-slate-950 text-white pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-400 text-xs font-medium tracking-[1px] px-4 py-1.5 rounded-full mb-6">
            ATENDIMENTO EM TODO O BRASIL • PROCESSO JUDICIAL
          </div>

          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">
            Nome sujo não precisa<br />ser o fim da linha.
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-300 mb-10">
            Processo judicial transparente para quem precisa limpar o nome e voltar a ter acesso a consignado com taxas justas. 
            Servidores públicos, aposentados do INSS e quem já tentou de tudo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-slate-950 px-10 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 hover:bg-slate-100 transition active:scale-[0.985]"
            >
              Ver quanto posso conseguir <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => abrirWhatsApp("Olá! Gostaria de entender se o processo judicial pode me ajudar a limpar o nome e conseguir consignado.")}
              className="border border-white/40 hover:bg-white/10 px-10 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition active:scale-[0.985]"
            >
              <Phone className="w-5 h-5" /> Falar com especialista
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 text-sm text-slate-400">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> +12.800 casos atendidos em 2025</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Média de 23 a 31 dias</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Atendimento humano no WhatsApp</div>
          </div>
        </div>
      </section>

      {/* Restante do código (Benefícios, Como Funciona, Depoimentos, Simulador, FAQ, CTA Final, Footer) - igual ao que enviei antes */}
      {/* (para economizar espaço, colei a parte principal. O código completo é o mesmo da versão anterior que funcionava) */}

      {/* ... (o restante do componente é idêntico ao que você já tem funcionando localmente) ... */}

    </div>
  );
}