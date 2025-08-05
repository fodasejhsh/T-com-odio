"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, Brain, Star, AlertTriangle, CheckCircle, XCircle, Camera, Zap, Target } from "lucide-react"
import Image from "next/image"

interface AnalysisResult {
  impactoImediato: {
    nota: number
    primeiraImpressao: string
    gerariConvites: boolean
  }
  checklistLuxo: {
    [key: string]: boolean
  }
  aparencia: {
    rosto: string
    pele: string
    labios: string
    olhos: string
    cabelo: string
    corpo: string
    procedimentosRecomendados: string[]
  }
  diagnosticoBrutal: {
    pontosFortes: string[]
    pontosFracos: string[]
    comparacaoReferencias: string
    reacaoHomemRico: string
  }
  planoMelhoria: {
    passoAPasso: string[]
    elementosObrigatorios: string[]
    ajustesAparencia: string[]
    sugestaoLegenda: string
  }
  sinaisPobreza: {
    detectados: string[]
    comoCorrigir: string[]
  }
}

interface ImageAnalyzerProps {
  onAnalysisComplete: () => void
}

export default function ImageAnalyzer({ onAnalysisComplete }: ImageAnalyzerProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        setAnalysis(null)
        setError(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = async () => {
    if (!selectedImage) return

    setIsAnalyzing(true)
    setError(null)

    try {
      const response = await fetch("/api/analyze-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: selectedImage,
          prompt: `Você é um consultor de imagem e marketing pessoal especializado no nicho "Luxury Babe / Puta de Luxo do Instagram".
Sua função é analisar a foto enviada de forma brutalmente honesta, sem suavizar críticas, ajudando a usuária a criar e manter uma imagem irresistível para homens ricos e provedores.

COMPARE a imagem enviada com as referências visuais de influencers de luxo como Lulu Bunni, Kylie Jenner, modelos de Dubai, Miami, influencers de alto padrão. Avalie se a usuária está no mesmo nível ou não — explique exatamente onde está abaixo e como chegar lá.

Sua análise deve ter 6 partes obrigatórias:

1️⃣ **Impacto Imediato**
- Nota de 0 a 10 sobre impacto visual geral.
- Primeira impressão que a foto passa para um homem rico (mulher cara e exclusiva ou garota comum).
- Se esta imagem geraria convites para eventos de luxo, viagens, presentes ou não.

2️⃣ **Checklist Visual de Luxo**
Marque true ou false para cada item:
- Bolsa de grife (Chanel, Dior, LV, Gucci)
- Sacola ou caixa de marca de luxo
- Sapato Louboutin
- Perfume de luxo visível
- Buquê de flores luxuoso
- Joias ou relógio de grife
- Carro importado ou cenário automotivo de luxo
- Hotel, resort ou cenário de viagem cara
- Pele impecável
- Lábios volumosos
- Cabelo volumoso e bem arrumado
- Maquiagem "Instagram Glam"
- Corpo proporcional
- Cenário arrumado e sofisticado
- Boa iluminação
- Pose confiante e sexy
- Expressão facial magnética

3️⃣ **Aparência e Estética**
- Formato do rosto e harmonia facial
- Qualidade da pele
- Avaliação dos lábios (volume, formato, simetria)
- Avaliação dos olhos e sobrancelhas (incluindo foxy eyes)
- Cabelo (volume, corte, brilho, estilo)
- Corpo (cintura, quadris, postura, glúteos, coxas)
- Roupa e acessórios: se transmitem ou não luxo
- Procedimentos estéticos recomendados para elevar padrão (ex: preenchimento labial, botox preventivo, skinbooster, silicone, mega hair, lipo enzimática, treino específico)

4️⃣ **⚠️ Sinais que Empobrecem a Imagem (Anti‑Pobreza Visual)**
Verifique e liste se houver:
- Casa sem reboco, parede descascada ou infiltração
- Bagunça no fundo (roupas jogadas, cama desarrumada)
- Móveis velhos, eletrodomésticos antigos, ventilador velho
- Cozinha ou banheiro simples aparecendo
- Quintal/laje com aparência de favela
- Fios elétricos expostos
- Roupas amassadas, com bolinhas ou manchadas
- Unhas mal feitas, cabelo mal cuidado
- Maquiagem mal aplicada ou borrada
- Pele mal tratada visível sem maquiagem
- Objetos domésticos pobres aparecendo (baldes, botijão de gás, sacolas plásticas, lixo)

Para cada item detectado:
- Explique por que isso derruba a imagem de luxo
- Sugira como corrigir ou substituir na próxima foto

5️⃣ **Diagnóstico Brutal**
- Pontos fortes que reforçam a imagem de luxo
- Pontos fracos que derrubam a imagem
- Comparação com as referências: onde supera, onde perde
- Como um homem provedor reagiria a esta foto (detalhado e sem filtros)

6️⃣ **Plano de Melhoria Estratégico**
- Passo a passo para refazer a foto elevando o nível de luxo
- Elementos de cena obrigatórios para a próxima foto (ex: sacolas Chanel, buquê gigante, champanhe, joias)
- Ajustes de aparência necessários para alinhar 100% ao padrão internacional de "Luxury Babe"
- Sugestão de legenda e contexto para reforçar narrativa de luxo

⚠️ Regras:
- Não suavizar críticas
- Sempre justificar cada nota
- Falar como consultor experiente e exigente
- Manter o foco na meta: criar uma imagem irresistível para homens ricos e provedores, capaz de gerar convites, presentes e oportunidades
- Avaliar tanto aparência quanto cenário

Responda em formato JSON estruturado com as seções: impactoImediato, checklistLuxo, aparencia, sinaisPobreza, diagnosticoBrutal, planoMelhoria.`,
        }),
      })

      if (!response.ok) {
        throw new Error("Erro na análise da imagem")
      }

      const result = await response.json()
      setAnalysis(result)
      onAnalysisComplete()

      // Save analysis to localStorage
      const savedAnalyses = JSON.parse(localStorage.getItem("muse-factory-analyses") || "[]")
      savedAnalyses.push({
        id: Date.now(),
        image: selectedImage,
        analysis: result,
        date: new Date().toISOString(),
      })
      localStorage.setItem("muse-factory-analyses", JSON.stringify(savedAnalyses))
    } catch (error) {
      console.error("Erro na análise:", error)
      setError("Ocorreu um erro ao analisar a imagem. Tente novamente.")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const inspirationImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2723-oyuBanXdKOXh5f5ZXXtUCmqmpUYyZO.jpeg",
      description:
        "Luxury wine cellar setting - perfeita iluminação, cenário sofisticado, vestido com brilho, pose confiante",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2722-ZM9f0Ftp2QnkpXM0c6JxWlRxYjVaIo.jpeg",
      description: "Upscale lounge - ambiente luxuoso, vestido branco elegante, bolsa de grife, postura impecável",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2721-U5BVwEREaSIgYjobHCDWF76SGnGVza.jpeg",
      description:
        "Luxury venue stairs - arquitetura cara, iluminação profissional, bolsa YSL, salto alto, vestido justo",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-600" />
            Análise de Imagem com IA - Consultor Brutal de Luxo
          </CardTitle>
          <p className="text-gray-600">
            Análise brutalmente honesta seguindo padrões internacionais de "Luxury Babe". Compare-se com Kylie Jenner,
            Lulu Bunni e influencers de Dubai/Miami.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Upload Section */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />

            {selectedImage ? (
              <div className="space-y-4">
                <div className="relative w-full max-w-md mx-auto">
                  <Image
                    src={selectedImage || "/placeholder.svg"}
                    alt="Imagem selecionada"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
                <div className="flex gap-2 justify-center">
                  <Button onClick={() => fileInputRef.current?.click()} variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Trocar Imagem
                  </Button>
                  <Button
                    onClick={analyzeImage}
                    disabled={isAnalyzing}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  >
                    {isAnalyzing ? (
                      <>
                        <Zap className="w-4 h-4 mr-2 animate-spin" />
                        Analisando...
                      </>
                    ) : (
                      <>
                        <Brain className="w-4 h-4 mr-2" />
                        Analisar com IA
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <Camera className="w-16 h-16 text-gray-400 mx-auto" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Upload sua foto</h3>
                  <p className="text-gray-500">Receba análise brutal e honesta para elevar seu nível</p>
                </div>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Selecionar Imagem
                </Button>
              </div>
            )}
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <p className="text-red-800 font-medium">Erro na Análise</p>
              </div>
              <p className="text-red-700 mt-1">{error}</p>
            </div>
          )}

          {/* Analysis Results */}
          {analysis && (
            <div className="space-y-6">
              {/* Impacto Imediato */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    1️⃣ Impacto Imediato
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div
                        className={`text-3xl font-bold ${
                          analysis.impactoImediato.nota >= 8
                            ? "text-green-600"
                            : analysis.impactoImediato.nota >= 6
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      >
                        {analysis.impactoImediato.nota}/10
                      </div>
                      <p className="text-sm text-gray-600">Nota Geral</p>
                    </div>
                    <div className="text-center">
                      <Badge variant={analysis.impactoImediato.gerariConvites ? "default" : "destructive"}>
                        {analysis.impactoImediato.gerariConvites ? "✓ Geraria Convites" : "✗ Não Geraria Convites"}
                      </Badge>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-sm">{analysis.impactoImediato.primeiraImpressao}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Checklist de Luxo */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    2️⃣ Checklist Visual de Luxo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {Object.entries(analysis.checklistLuxo).map(([item, present]) => (
                      <div key={item} className="flex items-center gap-2">
                        {present ? (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-500" />
                        )}
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sinais de Pobreza */}
              {analysis.sinaisPobreza.detectados.length > 0 && (
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <AlertTriangle className="w-5 h-5" />
                      ⚠️ Sinais que Empobrecem a Imagem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-red-800 mb-2">Detectados:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {analysis.sinaisPobreza.detectados.map((item, index) => (
                            <li key={index} className="text-red-700 text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">Como Corrigir:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {analysis.sinaisPobreza.comoCorrigir.map((item, index) => (
                            <li key={index} className="text-green-700 text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Diagnóstico Brutal */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-500" />
                    5️⃣ Diagnóstico Brutal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-800 mb-2">✅ Pontos Fortes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {analysis.diagnosticoBrutal.pontosFortes.map((item, index) => (
                        <li key={index} className="text-green-700 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">❌ Pontos Fracos:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {analysis.diagnosticoBrutal.pontosFracos.map((item, index) => (
                        <li key={index} className="text-red-700 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">🔥 Reação de um Homem Rico:</h4>
                    <p className="text-gray-700 text-sm">{analysis.diagnosticoBrutal.reacaoHomemRico}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Plano de Melhoria */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-500" />
                    6️⃣ Plano Estratégico de Melhoria
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">📋 Passo a Passo:</h4>
                    <ol className="list-decimal list-inside space-y-1">
                      {analysis.planoMelhoria.passoAPasso.map((step, index) => (
                        <li key={index} className="text-sm">
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">💎 Elementos Obrigatórios:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {analysis.planoMelhoria.elementosObrigatorios.map((item, index) => (
                        <li key={index} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">💬 Sugestão de Legenda:</h4>
                    <p className="text-pink-800 italic">"{analysis.planoMelhoria.sugestaoLegenda}"</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Inspiration Gallery */}
      <Card>
        <CardHeader>
          <CardTitle>🌟 Referências de Luxo - Inspire-se</CardTitle>
          <p className="text-gray-600">Exemplos do padrão internacional que você deve alcançar</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {inspirationImages.map((img, index) => (
              <div key={index} className="space-y-2">
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={`Inspiração ${index + 1}`}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-48"
                />
                <p className="text-xs text-gray-600">{img.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
