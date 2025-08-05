"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Crown, Zap, Target, Heart, Star } from "lucide-react"

interface AppearanceGuideProps {
  onGoalsSet: () => void
}

export default function AppearanceGuide({ onGoalsSet }: AppearanceGuideProps) {
  const [completedGoals, setCompletedGoals] = useState<string[]>([])
  const [selectedProcedures, setSelectedProcedures] = useState<string[]>([])

  const toggleGoal = (goalId: string) => {
    setCompletedGoals((prev) => (prev.includes(goalId) ? prev.filter((id) => id !== goalId) : [...prev, goalId]))
    onGoalsSet()
  }

  const toggleProcedure = (procedureId: string) => {
    setSelectedProcedures((prev) =>
      prev.includes(procedureId) ? prev.filter((id) => id !== procedureId) : [...prev, procedureId],
    )
  }

  const faceGoals = [
    {
      id: "russian-lips",
      title: "Russian Lips",
      description: "Lábios volumosos, projetados e simétricos",
      price: "R$ 800-1.500",
      priority: "Alta",
      result: "Lábios de boneca sensual, fotogênicos",
    },
    {
      id: "botox-preventivo",
      title: "Botox Preventivo",
      description: "Elimina linhas de expressão",
      price: "R$ 600-1.200",
      priority: "Alta",
      result: "Pele lisa sem rugas",
    },
    {
      id: "skinboosters",
      title: "Skinboosters/PDRN",
      description: "Pele luminosa sem textura visível",
      price: "R$ 400-800",
      priority: "Média",
      result: "Pele de porcelana",
    },
    {
      id: "foxy-eyes",
      title: "Foxy Eyes",
      description: "Olhos alongados e sensuais",
      price: "R$ 1.000-2.000",
      priority: "Alta",
      result: "Olhar magnético e sedutor",
    },
    {
      id: "brow-lamination",
      title: "Brow Lamination",
      description: "Sobrancelhas arqueadas e penteadas",
      price: "R$ 80-150",
      priority: "Baixa",
      result: "Sobrancelhas de modelo",
    },
    {
      id: "harmonizacao",
      title: "Harmonização Facial",
      description: "Rosto afinado e proporcional",
      price: "R$ 1.500-3.000",
      priority: "Média",
      result: "Rosto de influencer",
    },
  ]

  const bodyGoals = [
    {
      id: "silicone",
      title: "Silicone nos Seios",
      description: "Peitos grandes proporcionais",
      price: "R$ 8.000-15.000",
      priority: "Alta",
      result: "Shape de boneca sexy",
    },
    {
      id: "lipo-enzimatica",
      title: "Lipo Enzimática",
      description: "Cintura fina e definida",
      price: "R$ 300-600/sessão",
      priority: "Alta",
      result: "Cintura de ampulheta",
    },
    {
      id: "lpf-treino",
      title: "LPF + Treino Glúteo",
      description: "Bumbum redondo e empinado",
      price: "R$ 200-400/mês",
      priority: "Alta",
      result: "Bumbum de influencer",
    },
    {
      id: "tight-lacing",
      title: "Tight Lacing",
      description: "Corset diário para cintura",
      price: "R$ 150-300",
      priority: "Média",
      result: "Cintura cada vez menor",
    },
    {
      id: "microagulhamento",
      title: "Microagulhamento Corporal",
      description: "Pele uniforme sem manchas",
      price: "R$ 200-400/sessão",
      priority: "Média",
      result: "Pele perfeita",
    },
  ]

  const hairGoals = [
    {
      id: "mega-hair",
      title: "Mega Hair",
      description: "Cabelo longo e volumoso",
      price: "R$ 800-2.000",
      priority: "Alta",
      result: "Cabelo de capa de revista",
    },
    {
      id: "bumped-ends",
      title: "Corte Bumped Ends",
      description: "Pontas viradas para dentro",
      price: "R$ 100-300",
      priority: "Baixa",
      result: "Acabamento profissional",
    },
    {
      id: "tratamento-brilho",
      title: "Tratamento de Brilho",
      description: "Cabelo espelhado",
      price: "R$ 200-500",
      priority: "Média",
      result: "Brilho intenso",
    },
  ]

  const styleGoals = [
    {
      category: "Altheisure de Luxo",
      items: [
        "Conjuntos esportivos de marca (Adidas, Nike premium)",
        "Leggings de grife que valorizam bumbum",
        "Tops com corte perfeito",
        "Tênis caros (Golden Goose, Balenciaga)",
        "Jaquetas bomber de luxo",
      ],
    },
    {
      category: "Ninfeta Europeia",
      items: [
        "Minissaias de tecidos nobres",
        "Vestidos baby doll em seda/cetim",
        "Sobretudos com mini dress transparente",
        "Botas de salto alto",
        "Cores neutras (bege, branco, preto)",
      ],
    },
    {
      category: "Acessórios de Status",
      items: [
        "Bolsas de grife (Chanel, Dior, Prada)",
        "Joias ou semi-jóias elegantes",
        "Relógio statement",
        "Óculos de sol de marca",
        "Perfumes de luxo (Chanel, Baccarat Rouge 540)",
      ],
    },
  ]

  const totalGoals = faceGoals.length + bodyGoals.length + hairGoals.length
  const completedCount = completedGoals.length
  const progressPercentage = (completedCount / totalGoals) * 100

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            Guia de Transformação Física Completa
          </CardTitle>
          <p className="text-gray-600">
            Aparência-alvo: Mulher que parece saída de um editorial caro da Europa, com sensualidade de ninfeta
            milionária.
          </p>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 OBJETIVO FINAL</h3>
            <p className="text-sm mb-2">Ter cara de GRINGA E RICA - padrão internacional de "Luxury Babe"</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-sm">Progresso da Transformação:</span>
              <div className="flex-1 bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <span className="text-sm font-bold">
                {completedCount}/{totalGoals}
              </span>
            </div>
          </div>

          <Tabs defaultValue="face" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="face">Rosto</TabsTrigger>
              <TabsTrigger value="body">Corpo</TabsTrigger>
              <TabsTrigger value="hair">Cabelo</TabsTrigger>
              <TabsTrigger value="style">Estilo</TabsTrigger>
            </TabsList>

            <TabsContent value="face" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="w-5 h-5 text-yellow-500" />
                    1️⃣ Rosto - Perfeição Fotogênica
                  </CardTitle>
                  <p className="text-gray-600">Objetivo: Estilo modelo do Instagram</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {faceGoals.map((goal) => (
                      <div
                        key={goal.id}
                        className={`p-4 border-2 rounded-lg ${
                          completedGoals.includes(goal.id) ? "border-green-200 bg-green-50" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{goal.title}</h4>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                goal.priority === "Alta"
                                  ? "destructive"
                                  : goal.priority === "Média"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {goal.priority}
                            </Badge>
                            <Checkbox
                              checked={completedGoals.includes(goal.id)}
                              onCheckedChange={() => toggleGoal(goal.id)}
                            />
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{goal.description}</p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-green-600 font-medium">{goal.price}</span>
                          <span className="text-purple-600">{goal.result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="body" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-pink-500" />
                    2️⃣ Corpo - Proporção de Boneca Sexy
                  </CardTitle>
                  <p className="text-gray-600">Objetivo: Slim Thick (magra com curvas)</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {bodyGoals.map((goal) => (
                      <div
                        key={goal.id}
                        className={`p-4 border-2 rounded-lg ${
                          completedGoals.includes(goal.id) ? "border-green-200 bg-green-50" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{goal.title}</h4>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                goal.priority === "Alta"
                                  ? "destructive"
                                  : goal.priority === "Média"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {goal.priority}
                            </Badge>
                            <Checkbox
                              checked={completedGoals.includes(goal.id)}
                              onCheckedChange={() => toggleGoal(goal.id)}
                            />
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{goal.description}</p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-green-600 font-medium">{goal.price}</span>
                          <span className="text-purple-600">{goal.result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="hair" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500" />
                    3️⃣ Cabelo - Capa de Revista
                  </CardTitle>
                  <p className="text-gray-600">Objetivo: Sempre impecável com brilho espelhado</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {hairGoals.map((goal) => (
                      <div
                        key={goal.id}
                        className={`p-4 border-2 rounded-lg ${
                          completedGoals.includes(goal.id) ? "border-green-200 bg-green-50" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{goal.title}</h4>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                goal.priority === "Alta"
                                  ? "destructive"
                                  : goal.priority === "Média"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {goal.priority}
                            </Badge>
                            <Checkbox
                              checked={completedGoals.includes(goal.id)}
                              onCheckedChange={() => toggleGoal(goal.id)}
                            />
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{goal.description}</p>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-green-600 font-medium">{goal.price}</span>
                          <span className="text-purple-600">{goal.result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="style" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-rose-500" />
                    4️⃣ Estilo - Altheisure + Ninfeta Europeia
                  </CardTitle>
                  <p className="text-gray-600">Objetivo: Sempre parecer cara e bem vestida</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {styleGoals.map((category, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3">{category.category}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {category.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-2">
                              <Checkbox />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mt-6">
                    <h4 className="font-medium text-pink-800 mb-2">💄 Marketing da Aparência</h4>
                    <p className="text-sm text-pink-700 mb-2">Como usar sua beleza para reforçar a imagem de luxo:</p>
                    <ul className="text-sm text-pink-700 space-y-1">
                      <li>1. Stories Getting Ready → maquiagem, perfume, bolsa de grife</li>
                      <li>2. Reels de transformação → casual para "luxury babe"</li>
                      <li>3. Detalhes caros → close no sapato, bolsa, perfume</li>
                      <li>4. Lifestyle proposital → academias caras, cafés de luxo</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-center mt-6">
            <Button onClick={() => onGoalsSet()} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <Target className="w-4 h-4 mr-2" />
              Salvar Plano de Transformação
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
