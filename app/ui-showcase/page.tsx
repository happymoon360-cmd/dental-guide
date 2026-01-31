'use client';

import { Header } from '@/components/layout/header';
import { Container } from '@/components/layout/container';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function UIShowcasePage() {
  const [variant, setVariant] = useState<'apple' | 'material' | 'brutal' | 'glass'>('apple');

  const variants = [
    {
      id: 'apple',
      name: '🍎 Apple Style',
      description: 'Premium, soft shadows, rounded corners, understated elegance',
      colors: '#007AFF, #F5F5F7, #FFFFFF',
    },
    {
      id: 'material',
      name: '🎨 Material Design',
      description: 'Bold colors, floating labels, card-based, playful interactive',
      colors: '#6200EE, #FFE082, #FFFFFF',
    },
    {
      id: 'brutal',
      name: '⚡ Neo-Brutalism',
      description: 'High contrast, thick borders, bold typography, raw aesthetics',
      colors: '#000000, #FFFFFF, #FFD600',
    },
    {
      id: 'glass',
      name: '💎 Glassmorphism',
      description: 'Frosted glass, blur effects, depth, modern elegance',
      colors: 'rgba(255,255,255,0.2), #A78BFA, #FFFFFF',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-8 sm:py-12">
        <Container>
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Header */}
            <div className="space-y-2 text-center sm:text-left">
              <h1 className="display-lg text-gray-900">UI Design Options</h1>
              <p className="body-lg text-gray-600">
                Four distinct design philosophies. Choose the personality that fits your vision.
              </p>
            </div>

            {/* Variant Selector */}
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVariant(v.id as any)}
                  className={`
                    px-6 py-4 rounded-xl text-sm font-semibold transition-all border-2
                    ${
                      variant === v.id
                        ? 'scale-105 shadow-xl'
                        : 'hover:scale-102'
                    }
                  `}
                  style={{
                    backgroundColor: variant === v.id ? v.colors.split(', ')[0] : 'white',
                    borderColor: variant === v.id ? v.colors.split(', ')[0] : '#e5e7eb',
                    color: variant === v.id ? 'white' : '#374151',
                  }}
                >
                  {v.name}
                </button>
              ))}
            </div>

            {/* Description */}
            <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <p className="text-gray-700 font-medium">
                {variants.find((v) => v.id === variant)?.description}
              </p>
            </div>

            {/* Full Page Preview */}
            <div className={`rounded-2xl border-2 shadow-2xl overflow-hidden ${
              variant === 'apple' && 'bg-white border-gray-200'
            } ${
              variant === 'material' && 'bg-white border-purple-200'
            } ${
              variant === 'brutal' && 'bg-white border-4 border-black'
            } ${
              variant === 'glass' && 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
            }`}>
              <div className="p-8 sm:p-12">
                <div className="max-w-3xl mx-auto">
                  {variant === 'apple' && <AppleFullPage />}
                  {variant === 'material' && <MaterialFullPage />}
                  {variant === 'brutal' && <BrutalFullPage />}
                  {variant === 'glass' && <GlassFullPage />}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}

// ========== APPLE STYLE ==========
function AppleFullPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold text-gray-900">Script Generator</h2>
        <p className="text-lg text-gray-600">Create personalized negotiation scripts</p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-apple border border-gray-100 p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Script Settings</h3>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Procedure</label>
            <div className="relative">
              <select className="w-full h-12 pl-4 pr-10 bg-gray-50 border-0 rounded-2xl text-gray-900 appearance-none focus:ring-2 focus:ring-blue-500">
                <option>Root Canal</option>
                <option>Filling</option>
                <option>Exam/Cleaning</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">▼</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Payment Method</label>
            <div className="relative">
              <select className="w-full h-12 pl-4 pr-10 bg-gray-50 border-0 rounded-2xl text-gray-900 appearance-none">
                <option>Cash</option>
                <option>Card</option>
                <option>Installments</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">▼</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-semibold shadow-lg transition-transform active:scale-98">
          Generate Scripts
        </button>

        {/* Output Preview */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Preview</h4>
          <div className="bg-gray-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              {"Hello. Root Canal I'd like to request a consultation. I'm in significant pain..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========== MATERIAL DESIGN ==========
function MaterialFullPage() {
  return (
    <div className="space-y-6">
      {/* Header with Gradient */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-2">Script Generator</h2>
        <p className="text-lg text-purple-100">Create personalized scripts</p>
      </div>

      {/* Elevated Cards */}
      <div className="bg-white rounded-2xl p-6 shadow-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Configure Options</h3>

        {/* Material Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Procedure</label>
            <select className="w-full h-12 pl-4 pr-10 border-2 border-purple-200 rounded-xl appearance-none text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-200">
              <option>Root Canal</option>
              <option>Filling</option>
              <option>Exam/Cleaning</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-600">▼</span>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
            <select className="w-full h-12 pl-4 pr-10 border-2 border-purple-200 rounded-xl appearance-none text-gray-900 focus:border-purple-500">
              <option>Cash</option>
              <option>Card</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-600">▼</span>
          </div>
        </div>

        {/* FAB Button */}
        <button className="relative w-64 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 mx-auto transition-transform hover:scale-105 active:scale-95">
          <span className="text-2xl">✨</span>
          Generate
        </button>

        {/* Material Output */}
        <div className="mt-6 p-6 bg-yellow-50 rounded-xl border-l-4 border-yellow-500">
          <p className="text-gray-800 font-medium">Preview:</p>
          <p className="text-gray-700 mt-2 italic">{"I'd like to request a consultation..."}</p>
        </div>
      </div>
    </div>
  );
}

// ========== NEO-BRUTALISM ==========
function BrutalFullPage() {
  return (
    <div className="space-y-8">
      {/* Brutal Header */}
      <div className="bg-black text-white p-6">
        <h2 className="text-5xl font-bold tracking-tight">SCRIPT GENERATOR</h2>
        <p className="text-lg text-yellow-300 mt-1">NO NEGOTIATION. NO COMPROMISE.</p>
      </div>

      {/* Brutal Form */}
      <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-2xl font-bold uppercase tracking-tight mb-8">INPUT PARAMETERS</h3>

        {/* Brutal Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wide text-gray-900 mb-2">PROCEDURE</label>
            <select className="w-full h-12 px-4 bg-white border-4 border-black font-mono text-sm text-black uppercase appearance-none focus:outline-none focus:ring-4 focus:ring-yellow-400">
              <option>ROOT CANAL</option>
              <option>FILLING</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wide text-gray-900 mb-2">PAYMENT</label>
            <select className="w-full h-12 px-4 bg-white border-4 border-black font-mono text-sm text-black uppercase appearance-none focus:outline-none">
              <option>CASH</option>
              <option>CARD</option>
            </select>
          </div>
        </div>

        {/* Brutal Button */}
        <button className="w-full h-16 bg-black hover:bg-yellow-400 text-white hover:text-black border-4 border-black font-mono text-lg font-bold uppercase tracking-widest transition-colors">
          Generate Now &rarr;
        </button>

        {/* Brutal Output */}
        <div className="mt-8 border-4 border-black bg-yellow-400 p-6">
          <p className="font-mono text-sm text-black">OUTPUT:&gt;</p>
          <p className="font-mono text-black mt-2">{"I'd like to request a consultation..."}</p>
        </div>
      </div>

      {/* Brutal Decorative Elements */}
      <div className="flex gap-2">
        <div className="w-16 h-16 bg-black"></div>
        <div className="w-16 h-16 bg-yellow-400"></div>
        <div className="w-16 h-16 border-4 border-black"></div>
      </div>
    </div>
  );
}

// ========== GLASSMORPHISM ==========
function GlassFullPage() {
  return (
    <div className="space-y-8">
      {/* Glass Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl"></div>
        <div className="relative bg-white/30 backdrop-blur-xl border border-white/50 rounded-3xl p-8 text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Script Generator
          </h2>
          <p className="text-lg text-gray-700 mt-2">Create personalized scripts with elegance</p>
        </div>
      </div>

      {/* Glass Card */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-pink-400/10 blur-2xl"></div>
        <div className="relative bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Configuration</h3>

          {/* Glass Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Procedure</label>
              <div className="relative">
                <select className="w-full h-12 pl-4 pr-10 bg-white/50 backdrop-blur border-2 border-white/80 rounded-xl appearance-none text-gray-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-200">
                  <option>Root Canal</option>
                  <option>Filling</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500">▼</span>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment</label>
              <div className="relative">
                <select className="w-full h-12 pl-4 pr-10 bg-white/50 backdrop-blur border-2 border-white/80 rounded-xl appearance-none text-gray-900">
                  <option>Cash</option>
                  <option>Card</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">▼</span>
              </div>
            </div>
          </div>

          {/* Gradient Button */}
          <button className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl text-lg font-semibold shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]">
            Generate Scripts ✨
          </button>

          {/* Glass Output */}
          <div className="mt-8 p-6 bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-2xl border border-white/50">
            <p className="text-gray-800 font-medium">Preview:</p>
            <div className="mt-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50">
              <p className="text-gray-700">
                {"Hello. Root Canal I'd like to request a consultation..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="flex justify-center gap-4">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400/40 to-purple-400/40 backdrop-blur-md border border-white/50 flex items-center justify-center">
          <span className="text-4xl">💎</span>
        </div>
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-400/40 to-purple-400/40 backdrop-blur-md border border-white/50 flex items-center justify-center">
          <span className="text-4xl">✨</span>
        </div>
      </div>
    </div>
  );
}
