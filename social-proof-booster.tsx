"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp } from "lucide-react"

interface SocialProofBoosterProps {
  onActivated: () => void
}

export default function SocialProofBooster({ onActivated }: SocialProofBoosterProps) {
  const [currentFollowers, setCurrentFollowers] = useState(0)
  const [targetFollowers, setTargetFollowers] = useState(10000)
  const [selectedPlan, setSelectedPlan] = useState('')

  const growthPlans = [
    {
      id: 'starter',
      name: 'Starter Luxury',
      target: '10K seguidores',
      duration: '3 meses',
      price: 'R$ 800-1.200',
      features: [
        '500-1.000 seguidores/semana',
        'Mix brasileiro + internacional',
        'Crescimento gradual natural',
        'Suporte para algoritmo'
      ],
      color: 'blue'
    },
    {
      id: 'influencer',
      name: 'Influencer Status',
      target: '50K seguidores',
      duration: '6 meses',
      price: 'R$ 2.000-3.500',
      features: [
        '2.000-3.000 seguidores/semana',
        'Seguidores de alta qualidade',
        'Engajamento otimizado',
        'Relatórios de crescimento'
      ],
      color: 'purple'
    },
    {
      id: 'celebrity',
      name: 'Celebrity Level',
      target: '100K+ seguidores',
      duration: '12 meses',
      price: 'R$ 5.000-8.000',
      features: [
        '5.000+ seguidores/semana',
        'Seguidores premium internacionais',
        'Verificação azul facilitada',
        'Status de micro-celebridade'
      ],
      color: 'pink'
    }
  ]

  const suppliers = [
    {
      name: 'SocialBoost Pro',
      rating: 4.8,
      specialty: 'Seguidores brasileiros de qualidade',
      price: 'R$ 0,80/seguidor',
      features: ['Entrega gradual', 'Garantia 30 dias', 'Suporte 24h']
    },
    {
      name: 'InstagramGrow',
      rating: 4.6,
      specialty: 'Mix internacional premium',
      price: 'R$ 1,20/seguidor',
      features: ['Seguidores ativos', 'Perfis verificados', 'Reposição grátis']
    },
    {
      name: 'LuxuryFollowers',
      rating: 4.9,
      specialty: 'Seguidores de alto padrão',
      price: 'R$ 2,00/seguidor',
      features: ['Perfis de luxo', 'Engajamento real', 'Discrição total']
    }
  ]

  const weeklySchedule = [
    { week: 1, action: 'Comprar 500 seguidores', cost: 'R$ 400-600' },
    { week: 2, action: 'Comprar 750 seguidores', cost: 'R$ 600-900' },
    { week: 3, action: 'Comprar 1.000 seguidores', cost: 'R$ 800-1.200' },
    { week: 4, action: 'Comprar 1.250 seguidores', cost: 'R$ 1.000-1.500' },
    { week: 5, action: 'Avaliar crescimento orgânico', cost: 'R$ 0' },
    { week: 6, action: 'Comprar 1.500 seguidores', cost: 'R$ 1.200-1.800' },
  ]

  const progressPercentage = (currentFollowers / targetFollowers) * 100

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Social Proof Booster - Aumento de Status
          </CardTitle>
          <p className="text-gray-600">
            Estratégias de crescimento para criar percepção de valor e atrair homens ricos, 
            oportunidades e até famosos para seu círculo.
          </p>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-2">🚀 Por que Comprar Seguidores?</h3>
            <ul className="text-sm space-y-1">
              <li>• Cria percepção de valor e status social</li>
              <li>• Atrai seguidores orgânicos (prova social)</li>
              <li>• Facilita parcerias e convites para eventos</li>
              <li>• Homens ricos associam muitos seguidores = mulher desejada</li>
              <li>• Pode atrair até famosos para seu círculo social</li>
            </ul>
          </div>

          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="calculator">Calculadora</TabsTrigger>
              <TabsTrigger value="plans">Planos</TabsTrigger>
              <TabsTrigger value="suppliers">Fornecedores</TabsTrigger>
              <TabsTrigger value="schedule">Cronograma</TabsTrigger>
            </TabsList>

            <TabsContent value="calculator" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>📊 Calculadora de Crescimento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-\
