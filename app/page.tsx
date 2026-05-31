"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Check, Shield, Clock, Users, MessageCircle, 
  Award, Phone, Star 
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
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Star Crédito" className="w-9 h-9 object-contain" />
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

      {/* HERO */}
      <section className="bg-[#0A0A0A] text-white pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-[#00A8FF] text-xs font-medium tracking-[1px] px-4 py-1.5 rounded-full mb-6">
            ATENDIMENTO EM TODO O BRASIL • PROCESSO JUDICIAL
          </div>

          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-6">
            Nome sujo não precisa<br />ser o fim da linha.
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-white/70 mb-10">
            Processo judicial transparente para quem precisa limpar o nome e voltar a ter acesso a consignado com taxas justas. 
            Servidores públicos, aposentados do INSS e quem já tentou de tudo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#00A8FF] hover:bg-[#0090E0] text-white px-10 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition active:scale-[0.985]"
            >
              Ver quanto posso conseguir <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => abrirWhatsApp("Olá! Gostaria de entender se o processo judicial pode me ajudar a limpar o nome e conseguir consignado.")}
              className="border border-white/30 hover:bg-white/5 px-10 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition active:scale-[0.985]"
            >
              <Phone className="w-5 h-5" /> Falar com especialista
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 text-sm text-white/50">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00A8FF]" /> +12.800 casos atendidos em 2025</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00A8FF]" /> Média de 23 a 31 dias</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#00A8FF]" /> Atendimento humano no WhatsApp</div>
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

      {/* SOLUTION */}
      <section className="bg-[#0A0A0A] py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
            <div>
              <div className="text-[#00A8FF] text-sm font-semibold tracking-wider mb-3">O QUE FAZEMOS DE DIFERENTE</div>
              <h2 className="text-5xl font-semibold tracking-tight leading-none mb-6">Processo judicial de verdade, com contrato e transparência.</h2>
              <p className="text-xl text-white/70">Não somos mais um “limba nome” que promete mágica. Somos uma equipe de advogados que trabalha com ações judiciais cabíveis para quem precisa voltar a ter crédito — especialmente consignado.</p>
            </div>
            <div className="space-y-6">
              {[
                "Análise real do seu caso (não é só CPF)",
                "Contrato claro antes de qualquer passo",
                "Foco em liberar consignado com taxas justas",
                "Acompanhamento até o nome sair + score subir",
                "Atendimento humano no WhatsApp (não robô)",
              ].map((texto, i) => (
                <div key={i} className="flex gap-4 text-lg">
                  <div className="mt-1.5 text-[#00A8FF]"><Check className="w-5 h-5" /></div>
                  <div className="text-white/80">{texto}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="text-[#00A8FF] text-sm font-semibold tracking-wider mb-3">PROCESSO SIMPLES E TRANSPARENTE</div>
          <h2 className="text-5xl font-semibold tracking-tight">Como funciona na prática</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { num: "01", titulo: "Conversa no WhatsApp", desc: "Você conta sua situação. Sem formulário gigante. A gente já entende se faz sentido ou não." },
            { num: "02", titulo: "Análise gratuita", desc: "Avaliamos seu caso, dívidas e possibilidades reais. Sem custo e sem compromisso." },
            { num: "03", titulo: "Contrato + processo", desc: "Se for viável, assinamos contrato claro. Protocolamos a ação judicial com advogados especializados." },
            { num: "04", titulo: "Nome limpo + crédito", desc: "Em média 23 a 31 dias o nome sai das bases. Score começa a subir e você já pode buscar consignado melhor." },
          ].map((passo, i) => (
            <div key={i} className="bg-[#121212] border border-white/10 rounded-3xl p-8 relative">
              <div className="text-[#00A8FF] text-6xl font-semibold tracking-tighter mb-8 opacity-90">{passo.num}</div>
              <h3 className="font-semibold text-2xl mb-4 tracking-tight">{passo.titulo}</h3>
              <p className="text-white/70 leading-relaxed">{passo.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="bg-[#121212] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <div className="text-[#00A8FF] text-sm font-semibold tracking-wider mb-3">RESULTADOS REAIS</div>
              <h2 className="text-5xl font-semibold tracking-tight">Quem já passou por aqui</h2>
            </div>
          </div>
          <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-10">
            <div className="flex gap-2 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#00A8FF] fill-[#00A8FF]" />)}
            </div>
            <p className="text-2xl leading-tight tracking-tight mb-6">“{depoimentos[depoimentoAtual].texto}”</p>
            <div>
              <div className="font-semibold text-xl">{depoimentos[depoimentoAtual].nome}</div>
              <div className="text-white/60">{depoimentos[depoimentoAtual].cidade}</div>
              <div className="text-[#00A8FF] text-sm font-medium mt-3">{depoimentos[depoimentoAtual].resultado}</div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMULADOR */}
      <section id="simulador" className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#00A8FF] text-sm font-semibold tracking-wider mb-3">VEJA NA PRÁTICA</div>
            <h2 className="text-5xl font-semibold tracking-tight mb-6">Quanto você poderia acessar depois da limpeza?</h2>
            <p className="text-xl text-white/70">Esse simulador é apenas uma estimativa realista baseada nos casos que atendemos. O valor exato depende da sua análise individual.</p>
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
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-white/50">Parcela estimada (72x)</div>
                    <div className="text-4xl font-semibold text-[#00A8FF]">R$ {simulador.resultado.parcela}</div>
                  </div>
                  <div>
                    <div className="text-sm text-white/50">Score estimado após</div>
                    <div className="text-4xl font-semibold">{simulador.resultado.score}</div>
                  </div>
                </div>
                <button onClick={() => abrirWhatsApp(`Olá! Simulei no site e preciso de aproximadamente R$ ${simulador.valorDesejado}. Gostaria de fazer a análise do meu caso.`)} className="mt-6 w-full border border-[#00A8FF] text-[#00A8FF] hover:bg-white/5 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3">
                  Quero falar com alguém sobre meu caso <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <div className="text-[#00A8FF] text-sm font-semibold tracking-wider mb-3">PERGUNTAS QUE TODO MUNDO FAZ</div>
          <h2 className="text-5xl font-semibold tracking-tight">Dúvidas honestas, respostas honestas</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#121212] border border-white/10 rounded-3xl overflow-hidden">
              <button onClick={() => setFaqAberto(faqAberto === index ? null : index)} className="w-full flex justify-between items-center px-8 py-6 text-left font-medium text-lg hover:bg-white/5 transition">
                {faq.pergunta}
                <span className="text-2xl text-white/40">{faqAberto === index ? '−' : '+'}</span>
              </button>
              {faqAberto === index && (
                <div className="px-8 pb-8 text-white/70 leading-relaxed">
                  {faq.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#00A8FF] text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-semibold tracking-tighter mb-6">Pronto para entender se o seu caso tem solução?</h2>
          <p className="text-2xl text-white/90 mb-10">Análise gratuita. Sem pressão. Sem boleto surpresa.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => abrirWhatsApp()}
              className="bg-white text-[#00A8FF] px-14 py-5 rounded-2xl font-semibold text-xl flex items-center justify-center gap-3 hover:bg-white/90 active:scale-[0.985] transition"
            >
              <MessageCircle className="w-6 h-6" /> Falar agora no WhatsApp
            </button>
            <button 
              onClick={() => document.getElementById('simulador')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/60 hover:bg-white/10 px-14 py-5 rounded-2xl font-semibold text-xl flex items-center justify-center gap-3 active:scale-[0.985] transition"
            >
              Fazer o simulador primeiro
            </button>
          </div>
          <p className="mt-6 text-white/70 text-sm">Atendimento de segunda a sábado • Resposta normalmente em menos de 1 hora</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A0A0A] text-white/50 py-16 text-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-y-10">
          <div>
            <div className="flex items-center gap-3 text-white mb-4">
              <img src="/logo.png" alt="Star Crédito" className="w-8 h-8 object-contain" />
              <span className="font-semibold text-xl tracking-tight">Star Crédito</span>
            </div>
            <p className="max-w-xs text-white/60">Soluções financeiras com processo judicial transparente para quem precisa voltar a ter crédito.</p>
          </div>
          <div className="text-right text-xs md:text-sm space-y-1">
            <div>Processo acompanhado por advogados • Contrato claro</div>
            <div>Atendimento humano • Sem robô</div>
            <div className="pt-4 text-[#00A8FF]">WhatsApp: (11) 98873-6147</div>
          </div>
        </div>
        <div className="text-center text-[10px] mt-16 text-white/40">© 2026 Star Crédito Soluções Financeiras • Este site é uma demonstração. Não substitui análise jurídica individual.</div>
      </footer>
    </div>
  );
}
