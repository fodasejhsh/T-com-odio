"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Star, Upload } from "lucide-react"
import Image from "next/image"

export default function InspirationGallery() {
  const [selectedCategory, setSelectedCategory] = useState("luxury-venues")

  const inspirationCategories = {
    "luxury-venues": {
      title: "🏨 Cenários de Luxo",
      description: "Locais que transmitem status e sofisticação",
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2723-oyuBanXdKOXh5f5ZXXtUCmqmpUYyZO.jpeg",
          title: "Wine Cellar Luxury",
          description:
            "Adega de vinhos sofisticada - iluminação perfeita, vestido com brilho, pose confiante segurando taça",
          tips: [
            "Iluminação quente valoriza a pele",
            "Vestido com brilho/paetês para fotos noturnas",
            "Pose lateral mostra silhueta",
            "Cenário caro justifica lifestyle",
          ],
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2722-ZM9f0Ftp2QnkpXM0c6JxWlRxYjVaIo.jpeg",
          title: "Upscale Lounge",
          description:
            "Lounge de hotel de luxo - ambiente moderno, vestido branco elegante, bolsa de grife, postura impecável",
          tips: [
            "Vestido branco = elegância atemporal",
            "Bolsa sempre visível na foto",
            "Postura ereta transmite confiança",
            "Ambiente moderno = mulher atual",
          ],
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2721-U5BVwEREaSIgYjobHCDWF76SGnGVza.jpeg",
          title: "Luxury Venue Stairs",
          description:
            "Escadaria iluminada de local caro - arquitetura sofisticada, bolsa YSL, salto alto, vestido justo preto",
          tips: [
            "Escadas criam dinamismo na foto",
            "Preto = elegância e sensualidade",
            "Salto alto alonga as pernas",
            "Arquitetura cara no fundo",
          ],
        },
      ],
    },
    "spoiled-content": {
      title: "💝 Conteúdo Spoiled",
      description: "Como mostrar que você é mimada e desejada",
      images: [
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2681-pcMA9eGE2M1g3vY4gGXmaiEu1VbHaj.jpeg",
          title: "Luxury Flowers Display",
          description: "Buquês luxuosos com legenda 'Lucky me 😊' - estratégia perfeita de marketing pessoal",
          tips: [
            "Buquês grandes e caros",
            "Legenda sempre insinuando presente",
            "Variedade de flores = vários 'presentes'",
            "Cenário limpo e elegante",
          ],
        },
        {
          src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2678-Nwt3caueJupxQyg2XrLFvJuP9KtBFi.jpeg",
          title: "Chanel Shopping Bag",
          description: "Sacola Chanel com legenda 'chanel me or bye 😘' - narrativa de presentes de grife",
          tips: [
            "Sacolas de grife sempre fotogênicas",
            "Legenda reforça padrão alto",
            "Cenário neutro destaca a marca",
            "Crie narrativa de recebimento",
          ],
        },
      ],
    },
    "poses-angles": {
      title: "📸 Poses e Ângulos",
      description: "Como se posicionar para fotos impactantes",
      examples: [
        {
          title: "Pose Lateral Sensual",
          description: "Corpo de lado, mão no quadril, olhar por cima do ombro",
          when: "Para valorizar cintura e bumbum",
        },
        {
          title: "Espelho Estratégico",
          description: "De costas no espelho, mostrando silhueta",
          when: "Para destacar curvas sem ser vulgar",
        },
        {
          title: "Sentada Elegante",
          description: "Pernas cruzadas, postura ereta, mãos posicionadas",
          when: "Em restaurantes e lounges",
        },
        {
          title: "Close Facial",
          description: "Rosto em primeiro plano, maquiagem impecável",
          when: "Para mostrar procedimentos estéticos",
        },
      ],
    },
    "styling-tips": {
      title: "👗 Dicas de Styling",
      description: "Como se vestir para parecer cara",
      tips: [
        {
          category: "Cores que Enriquecem",
          items: ["Branco total", "Preto elegante", "Nude/bege", "Tons terrosos", "Vermelho vinho"],
        },
        {
          category: "Tecidos de Luxo",
          items: ["Seda", "Cetim", "Couro", "Malha canelada", "Tule"],
        },
        {
          category: "Cortes Estratégicos",
          items: ["Vestidos tubinho", "Corsets", "Bodys justos", "Decotes calculados", "Comprimentos midi"],
        },
        {
          category: "Acessórios Obrigatórios",
          items: ["Bolsa de grife", "Joias delicadas", "Salto alto", "Óculos statement", "Relógio elegante"],
        },
      ],
    },
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-6 h-6 text-pink-600" />
            Galeria de Inspiração - Padrão Internacional
          </CardTitle>
          <p className="text-gray-600">
            Referências visuais do padrão "Luxury Babe" que você deve alcançar. Estude cada detalhe e replique em suas
            fotos.
          </p>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="luxury-venues">Cenários</TabsTrigger>
              <TabsTrigger value="spoiled-content">Spoiled</TabsTrigger>
              <TabsTrigger value="poses-angles">Poses</TabsTrigger>
              <TabsTrigger value="styling-tips">Styling</TabsTrigger>
            </TabsList>

            <TabsContent value="luxury-venues" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {inspirationCategories["luxury-venues"].images.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          width={400}
                          height={400}
                          className="w-full h-64 md:h-full object-cover rounded-lg"
                        />
                        <Badge className="absolute top-2 left-2 bg-pink-600 text-white">Referência</Badge>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{image.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-pink-800">💡 Por que funciona:</h4>
                          <ul className="space-y-1">
                            {image.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-pink-500 mt-1">•</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="spoiled-content" className="space-y-6">
              <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-pink-800 mb-2">🎯 ESTRATÉGIA SPOILED</h3>
                <p className="text-pink-700 text-sm">
                  Mesmo que você tenha comprado tudo, a narrativa é sempre: "alguém te deu". Compre flores caras,
                  produtos de grife e poste como presentes recebidos.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {inspirationCategories["spoiled-content"].images.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          width={400}
                          height={400}
                          className="w-full h-64 md:h-full object-cover rounded-lg"
                        />
                        <Badge className="absolute top-2 left-2 bg-purple-600 text-white">Spoiled</Badge>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{image.description}</p>
                        <div className="space-y-2">
                          <h4 className="font-medium text-purple-800">💡 Como replicar:</h4>
                          <ul className="space-y-1">
                            {image.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="text-sm text-gray-700 flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>🛍️ Lista de Compras Estratégicas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-medium text-pink-800 mb-2">💐 Flores & Presentes</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Buquê Florence (R$300+)</li>
                        <li>• Rosas vermelhas grandes</li>
                        <li>• Arranjos sofisticados</li>
                        <li>• Caixas de presente elegantes</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">👜 Itens de Grife</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Batom/gloss Chanel pequeno</li>
                        <li>• Perfume Dior travel size</li>
                        <li>• Óculos de sol de marca</li>
                        <li>• Acessórios YSL/Gucci</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="poses-angles" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {inspirationCategories["poses-angles"].examples.map((pose, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2">{pose.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{pose.description}</p>
                      <Badge variant="outline" className="text-xs">
                        {pose.when}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>📐 Ângulos que Valorizam</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">📱 Para Cintura</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Câmera na altura da cintura</li>
                        <li>• Mão no quadril</li>
                        <li>• Corpo ligeiramente de lado</li>
                        <li>• Postura ereta</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">🍑 Para Bumbum</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Câmera ligeiramente abaixo</li>
                        <li>• Pose de costas no espelho</li>
                        <li>• Perna ligeiramente flexionada</li>
                        <li>• Olhar por cima do ombro</li>
                      </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-medium text-pink-800 mb-2">👄 Para Rosto</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Câmera ligeiramente acima</li>
                        <li>• Queixo levemente para baixo</li>
                        <li>• Iluminação frontal suave</li>
                        <li>• Expressão relaxada</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="styling-tips" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inspirationCategories["styling-tips"].tips.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>💡 Regras de Ouro do Styling</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-medium text-yellow-800 mb-2">✨ O que SEMPRE funciona:</h4>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Peças que marcam a cintura</li>
                        <li>• Tecidos que não amassam</li>
                        <li>• Cores sólidas e neutras</li>
                        <li>• Acessórios statement (1 por vez)</li>
                        <li>• Sapatos que alongam as pernas</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="font-medium text-red-800 mb-2">❌ O que NUNCA usar:</h4>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Roupas com bolinhas ou manchadas</li>
                        <li>• Chinelos ou calçados baratos</li>
                        <li>• Estampas muito chamativas</li>
                        <li>• Roupas muito largas ou apertadas</li>
                        <li>• Acessórios em excesso</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-blue-600" />
                Adicione Suas Próprias Inspirações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload de Referências</h3>
                <p className="text-gray-500 mb-4">
                  Adicione fotos de inspiração que encontrar no Pinterest, Instagram ou outras fontes
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <Upload className="w-4 h-4 mr-2" />
                  Adicionar Imagens
                </Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
