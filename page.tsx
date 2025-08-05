"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Crown, Sparkles, Camera, Instagram, Target, Diamond, Brain, Users, TrendingUp } from "lucide-react"
import ImageAnalyzer from "@/components/image-analyzer"
import InstagramBuilder from "@/components/instagram-builder"
import TacticsGuide from "@/components/tactics-guide"
import AppearanceGuide from "@/components/appearance-guide"
import InspirationGallery from "@/components/inspiration-gallery"
import SocialProofBooster from "@/components/social-proof-booster"

export default function MuseFactory() {
  const [activeModule, setActiveModule] = useState("dashboard")
  const [userProgress, setUserProgress] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("muse-factory-progress")
      return saved
        ? JSON.parse(saved)
        : {
            profileCreated: false,
            firstAnalysis: false,
            tacticsStarted: false,
            appearanceGoals: false,
            socialProofActive: false,
          }
    }
    return {
      profileCreated: false,
      firstAnalysis: false,
      tacticsStarted: false,
      appearanceGoals: false,
      socialProofActive: false,
    }
  })

  useEffect(() => {
    localStorage.setItem("muse-factory-progress", JSON.stringify(userProgress))
  }, [userProgress])

  const updateProgress = (key: string, value: boolean) => {
    setUserProgress((prev) => ({ ...prev, [key]: value }))
  }

  const completedTasks = Object.values(userProgress).filter(Boolean).length
  const progressPercentage = (completedTasks / 5) * 100

  const modules = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: Crown,
      description: "Visão geral do seu progresso",
    },
    {
      id: "analyzer",
      title: "Análise de Imagem IA",
      icon: Brain,
      description: "Análise brutal e honesta das suas fotos",
    },
    {
      id: "instagram",
      title: "Criação do Instagram",
      icon: Instagram,
      description: "Monte seu perfil de luxo do zero",
    },
    {
      id: "tactics",
      title: "Táticas de Imagem",
      icon: Target,
      description: "Estratégias para ser mimada e desejada",
    },
    {
      id: "appearance",
      title: "Guia de Aparência",
      icon: Sparkles,
      description: "Transformação física completa",
    },
    {
      id: "inspiration",
      title: "Galeria de Inspiração",
      icon: Camera,
      description: "Referências visuais de luxo",
    },
    {
      id: "social-proof",
      title: "Social Proof Booster",
      icon: TrendingUp,
      description: "Estratégias de crescimento e status",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-yellow-300" />
            <h1 className="text-3xl font-bold">MUSE FACTORY</h1>
            <Badge variant="secondary" className="bg-yellow-300 text-black">
              Luxury Babe Builder
            </Badge>
          </div>
          <p className="text-pink-100 text-lg">
            Construção estratégica de imagem, estética e marketing sensual para mulheres que desejam ser desejadas,
            mantidas e idolatradas.
          </p>

          {/* Progress Bar */}
          <div className="mt-6 bg-white/20 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progresso da Transformação</span>
              <span className="text-sm">{completedTasks}/5 módulos</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Diamond className="w-5 h-5 text-pink-600" />
                  Módulos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {modules.map((module) => {
                  const Icon = module.icon
                  return (
                    <Button
                      key={module.id}
                      variant={activeModule === module.id ? "default" : "ghost"}
                      className={`w-full justify-start gap-2 ${
                        activeModule === module.id
                          ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white"
                          : "hover:bg-pink-50"
                      }`}
                      onClick={() => setActiveModule(module.id)}
                    >
                      <Icon className="w-4 h-4" />
                      <div className="text-left">
                        <div className="font-medium text-sm">{module.title}</div>
                        <div className="text-xs opacity-70">{module.description}</div>
                      </div>
                    </Button>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeModule === "dashboard" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Crown className="w-6 h-6 text-yellow-500" />
                      Bem-vinda ao MUSE FACTORY
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">🎯 OBJETIVO</h3>
                        <p className="text-sm">
                          Criar uma imagem de luxo, sensualidade e poder feminino que atrai homens ricos, viagens,
                          presentes e oportunidades.
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-2">💎 RESULTADO</h3>
                        <p className="text-sm">
                          Ser percebida como uma mulher cara, mimada e desejável no padrão "Luxury Babe" internacional.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                      <h4 className="font-bold text-yellow-800 mb-2">⚡ LEMBRE-SE:</h4>
                      <p className="text-yellow-700 font-medium">
                        "NÃO ATRAÍMOS O QUE SOMOS, ATRAÍMOS O QUE APARENTAMOS SER"
                      </p>
                      <p className="text-yellow-600 text-sm mt-1">
                        FINJA ATÉ SE TORNAR REAL - Meta: fingir até conseguir!
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { icon: Instagram, label: "Perfil Criado", key: "profileCreated" },
                        { icon: Brain, label: "Primeira Análise", key: "firstAnalysis" },
                        { icon: Target, label: "Táticas Ativas", key: "tacticsStarted" },
                        { icon: Users, label: "Social Proof", key: "socialProofActive" },
                      ].map((item) => (
                        <div
                          key={item.key}
                          className={`p-3 rounded-lg border-2 ${
                            userProgress[item.key] ? "border-green-200 bg-green-50" : "border-gray-200 bg-gray-50"
                          }`}
                        >
                          <item.icon
                            className={`w-6 h-6 mb-2 ${userProgress[item.key] ? "text-green-600" : "text-gray-400"}`}
                          />
                          <p className="text-sm font-medium">{item.label}</p>
                          {userProgress[item.key] && (
                            <Badge variant="secondary" className="mt-1 bg-green-100 text-green-800">
                              ✓ Completo
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setActiveModule("analyzer")}
                  >
                    <CardContent className="p-4 text-center">
                      <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h3 className="font-bold">Analisar Foto</h3>
                      <p className="text-sm text-gray-600">Análise brutal com IA</p>
                    </CardContent>
                  </Card>

                  <Card
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setActiveModule("instagram")}
                  >
                    <CardContent className="p-4 text-center">
                      <Instagram className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                      <h3 className="font-bold">Criar Instagram</h3>
                      <p className="text-sm text-gray-600">Perfil de luxo completo</p>
                    </CardContent>
                  </Card>

                  <Card
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setActiveModule("tactics")}
                  >
                    <CardContent className="p-4 text-center">
                      <Target className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                      <h3 className="font-bold">Ver Táticas</h3>
                      <p className="text-sm text-gray-600">Estratégias de imagem</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeModule === "analyzer" && (
              <ImageAnalyzer onAnalysisComplete={() => updateProgress("firstAnalysis", true)} />
            )}

            {activeModule === "instagram" && (
              <InstagramBuilder onProfileCreated={() => updateProgress("profileCreated", true)} />
            )}

            {activeModule === "tactics" && (
              <TacticsGuide onTacticsStarted={() => updateProgress("tacticsStarted", true)} />
            )}

            {activeModule === "appearance" && (
              <AppearanceGuide onGoalsSet={() => updateProgress("appearanceGoals", true)} />
            )}

            {activeModule === "inspiration" && <InspirationGallery />}

            {activeModule === "social-proof" && (
              <SocialProofBooster onActivated={() => updateProgress("socialProofActive", true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
