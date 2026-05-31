"use client";

import React, { useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Check, Shield, Clock, Users, MessageCircle, 
  Award, Phone, Star 
} from 'lucide-react';
import * as THREE from 'three';

// 3D Rotating Star Component (High Impact)
function RotatingStar({ scale = 1 }) {
  const meshRef = React.useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={meshRef} scale={scale}>
      {/* Main Star - Icosahedron for premium look */}
      <mesh>
        <icosahedronGeometry args={[1.8]} />
        <meshPhongMaterial 
          color="#00A8FF" 
          emissive="#003366" 
          shininess={100}
          specular="#ffffff"
        />
      </mesh>
      
      {/* Inner glow layer */}
      <mesh scale={0.92}>
        <icosahedronGeometry args={[1.8]} />
        <meshPhongMaterial 
          color="#FF8A00" 
          emissive="#662200" 
          shininess={80}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Accent edges */}
      <mesh scale={1.05}>
        <icosahedronGeometry args={[1.8]} />
        <meshPhongMaterial 
          color="#6B5BFF" 
          emissive="#2a1a66" 
          shininess={60}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
}

// 3D Floating Credit Card
function FloatingCreditCard() {
  const groupRef = React.useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Card body */}
      <mesh>
        <boxGeometry args={[3.2, 2, 0.15]} />
        <meshPhongMaterial color="#1a1a2e" shininess={80} />
      </mesh>
      
      {/* Card chip */}
      <mesh position={[-0.8, 0.3, 0.1]}>
        <boxGeometry args={[0.6, 0.5, 0.08]} />
        <meshPhongMaterial color="#FFD700" shininess={100} />
      </mesh>

      {/* Card magnetic stripe */}
      <mesh position={[0, 0.7, 0.08]}>
        <boxGeometry args={[2.8, 0.25, 0.05]} />
        <meshPhongMaterial color="#333" />
      </mesh>

      {/* Card number lines */}
      <mesh position={[0, -0.2, 0.08]}>
        <boxGeometry args={[2.2, 0.08, 0.03]} />
        <meshPhongMaterial color="#00A8FF" />
      </mesh>
    </group>
  );
}

// 3D Animated Financial Graph
function AnimatedFinancialGraph() {
  const pointsRef = React.useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          child.position.y = Math.sin(state.clock.elapsedTime * 2 + i) * 0.3 + (i * 0.1);
        }
      });
    }
  });

  return (
    <group ref={pointsRef}>
      {/* Base line */}
      <mesh position={[0, -1.5, 0]}>
        <boxGeometry args={[6, 0.08, 0.08]} />
        <meshPhongMaterial color="#00A8FF" />
      </mesh>
      
      {/* Animated bars */}
      {[ -2, -1, 0, 1, 2 ].map((x, i) => (
        <mesh key={i} position={[x, -0.8 + (i * 0.25), 0]}>
          <boxGeometry args={[0.4, 1.2 + (i * 0.3), 0.4]} />
          <meshPhongMaterial 
            color={i % 2 === 0 ? "#00A8FF" : "#FF8A00"} 
            emissive={i % 2 === 0 ? "#003366" : "#662200"}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function StarCreditoLanding() {
  const [simulador, setSimulador] = useState({
    valorDesejado: 25000,
    rendaMensal: 4500,
    resultado: null as any,
  });

  const [depoimentoAtual, setDepoimentoAtual] = useState(0);
  const [faqAberto, setFaqAberto] = useState<number | null>(null);

  const depoimentos = [ /* ... same as before ... */ ];

  const faqs = [ /* ... same as before ... */ ];

  const calcularSimulacao = () => { /* ... same calculation ... */ };

  const abrirWhatsApp = (mensagem?: string) => { /* ... same ... */ };

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

          <button onClick={() => abrirWhatsApp()} className="flex items-center gap-2 bg-[#00A8FF] hover:bg-[#0090E0] text-white px-6 py-3 rounded-2xl font-semibold text-sm transition active:scale-[0.985]">
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </button>
        </div>
      </nav>

      {/* HERO WITH 3D STAR - HIGH IMPACT */}
      <section className="bg-[#0A0A0A] pt-12 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
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

            {/* Right - 3D Star (High Visual Impact) */}
            <div className="h-[420px] lg:h-[520px] relative">
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }} style={{ background: 'transparent' }}>
                <ambientLight intensity={0.6} />
                <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
                <pointLight position={[-10, -5, -5]} intensity={0.8} color="#00A8FF" />
                <Suspense fallback={null}>
                  <RotatingStar scale={1.1} />
                </Suspense>
                <Stars radius={80} depth={40} count={120} factor={3} saturation={0} fade speed={1} />
              </Canvas>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections with improved visuals and 3D elements... */}
      {/* (Full code continues with 3D Credit Card and 3D Graph in simulator) */}
    </div>
  );
}
