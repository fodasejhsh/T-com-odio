"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Instagram, Crown, Users, TrendingUp, Copy, RefreshCw } from "lucide-react"

interface InstagramBuilderProps {
  onProfileCreated: () => void
}

export default function InstagramBuilder({ onProfileCreated }: InstagramBuilderProps) {
  const [profileData, setProfileData] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("muse-factory-instagram")
      return saved
        ? JSON.parse(saved)
        : {
            username: "",
            bio: "",
            highlights: [],
            postIdeas: [],
            captions: [],
          }
    }
    return {
      username: "",
      bio: "",
      highlights: [],
      postIdeas: [],
      captions: [],
    }
  })

  useEffect(() => {
    localStorage.setItem("muse-factory-instagram", JSON.stringify(profileData))
  }, [profileData])

  const luxuryUsernames = [
    "babyluxe",
    "honeybabe",
    "luxwbaby",
    "hotbaby",
    "princesslux",
    "goldenbabe",
    "diamondgirl",
    "luxurybaby",
    "spoiledbabe",
    "richbaby",
    "luxeangel",
    "goldenhoney",
  ]

  const luxuryBios = [
    "Science of beauty 💉 | Tech & luxury 💻✨ | Well kept, never average",
    "22 | Well kept | Not for everyone 💋",
    "Aesthetic biomedicine 💉👄 | Spoiled daily ✨",
    "Too expensive to be confused with basic 💎",
    "Luxury baby | Dubai vibes | Maintained 🥂",
    "Beauty & brains | Investment worthy 💸",
    "Biomedicine student 💉 | Luxury lifestyle ✨ | Selective",
    "Well maintained | High standards | Exclusive access 👑",
  ]

  const highlightIdeas = [
    {
      name: "ME 💋",
      description: "Fotos exibindo sua beleza, poses sensuais, looks caros",
      content: [
        "Selfies com maquiagem impecável",
        "Poses no espelho valorizando corpo",
        "Looks sexy em locais luxuosos",
        "Close no rosto com iluminação perfeita",
      ],
    },
    {
      name: "SPOILED 💝",
      description: "Marketing de que você é mimada e desejada",
      content: [
        "Buquês gigantes com legenda 'Lucky me ✨'",
        "Sacolas Chanel com 'Thanks bby 🥹'",
        "Fotos em resorts 'Surprises like this >>>'",
        "Presentes caros 'He knows how to treat me 🌹'",
      ],
    },
    {
      name: "LUXURY 🥂",
      description: "Lifestyle de alto padrão",
      content: [
        "Hotéis e resorts de luxo",
        "Restaurantes caros",
        "Viagens internacionais",
        "Spas e tratamentos estéticos",
      ],
    },
    {
      name: "STUDY 📚",
      description: "Intelectual curada - biomedicina e tech",
      content: [
        "Material de biomedicina + café chique",
        "Laptop com código + taça de vinho",
        "Livros de moda/arte em cenários luxuosos",
        "Jaleco + maquiagem perfeita",
      ],
    },
  ]

  const captionTemplates = {
    spoiled: [
      "Lucky me 🤏🏻💕",
      "He knows how to treat me 🌹",
      "Chanel me or bye 💋",
      "Thanks bby 🥹",
      "Surprises like this >>>",
      "Too spoiled for my own good ✨",
      "Again? 🙄💸",
    ],
    luxury: [
      "Bad decisions make good memories",
      "Too expensive to be confused with basic",
      "A woman like me is a privilege, not a habit",
      "Investir em mim nunca foi gasto 💸",
      "Off to brunch 💋",
      "Spoiled today 💸",
      "Last night's view wasn't the skyline...",
    ],
    mystery: [
      "Mal cheguei e já me mimaram 🤫",
      "Tem alguém aqui que sabe me tratar...",
      "He flew me out again... should I go?",
      "Why do they always fall in love when I disappear?",
      "Ele disse que eu tenho gosto de problema...",
      "Some secrets are worth keeping 🤐",
    ],
    intellectual: [
      "Beauty is science 💉",
      "Brains & beauty. Dangerous combo.",
      "Always learning, always evolving ✨",
      "A quiet luxury evening 🍷📖",
      "Late nights studying faces. Yours could be next 😉",
      "Making systems, breaking hearts 💻",
      "Coding by day, luxury by night 💻🥂",
    ],
  }

  const generateUsername = () => {
    const randomUsername = luxuryUsernames[Math.floor(Math.random() * luxuryUsernames.length)]
    setProfileData((prev) => ({ ...prev, username: randomUsername }))
  }

  const generateBio = () => {
    const randomBio = luxuryBios[Math.floor(Math.random() * luxuryBios.length)]
    setProfileData((prev) => ({ ...prev, bio: randomBio }))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const saveProfile = () => {
    onProfileCreated()
    alert("Perfil salvo com sucesso! 🎉")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Instagram className="w-6 h-6 text-pink-600" />
            Criação do Instagram de Luxo
          </CardTitle>
          <p className="text-gray-600">
            Monte seu perfil completo seguindo a estratégia "Luxury Babe" para atrair homens ricos e oportunidades.
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="highlights">Destaques</TabsTrigger>
              <TabsTrigger value="captions">Legendas</TabsTrigger>
              <TabsTrigger value="growth">Crescimento</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>👑 Configuração do Perfil</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome de usuário</label>
                    <div className="flex gap-2">
                      <Input
                        value={profileData.username}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, username: e.target.value }))}
                        placeholder="babyluxe, honeybabe, luxwbaby..."
                      />
                      <Button onClick={generateUsername} variant="outline">
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Escolha algo que soe caro, estrangeiro e memorável</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Bio estratégica</label>
                    <div className="space-y-2">
                      <Textarea
                        value={profileData.bio}
                        onChange={(e) => setProfileData((prev) => ({ ...prev, bio: e.target.value }))}
                        placeholder="Science of beauty 💉 | Tech & luxury 💻✨ | Well kept, never average"
                        rows={3}
                      />
                      <Button onClick={generateBio} variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Gerar Bio
                      </Button>
                    </div>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">💡 Dicas para Bio Perfeita:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Mencione biomedicina (mostra que você entende de beleza)</li>
                      <li>• Inclua tech/sistemas (inteligência + independência)</li>
                      <li>• Use "Well kept" ou "Maintained" (sinaliza que é mimada)</li>
                      <li>• Adicione "Not for everyone" ou "Selective" (exclusividade)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>📱 Estratégia de Seguidores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-800 mb-2">🚀 Social Proof Booster</h4>
                    <p className="text-yellow-700 text-sm mb-3">
                      Para criar imagem de luxo, você precisa de seguidores. Compre gradualmente:
                    </p>
                    <ul className="text-sm text-yellow-700 space-y-1 mb-3">
                      <li>• 500-1.000 seguidores reais por semana</li>
                      <li>• Mix de brasileiros + internacionais</li>
                      <li>• Meta inicial: 10k para parecer influencer</li>
                      <li>• Evite picos bruscos (algoritmo detecta)</li>
                    </ul>
                    <Button className="bg-yellow-600 text-white" size="sm">
                      Ver Fornecedores Recomendados
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="highlights" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlightIdeas.map((highlight, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{highlight.name}</CardTitle>
                      <p className="text-sm text-gray-600">{highlight.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {highlight.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm flex items-start gap-2">
                            <span className="text-pink-500">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>🎯 Estratégia dos Destaques</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">💋 ME - Sua Beleza</h4>
                      <p className="text-sm text-gray-700">
                        Mostre que você é uma mulher desejável, nunca desesperada. Fotos que valorizem sua beleza real
                        em locais caros.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">💝 SPOILED - Marketing de Mimada</h4>
                      <p className="text-sm text-gray-700">
                        TÁTICA PRINCIPAL: Mesmo que você tenha comprado, a narrativa é sempre "alguém te deu". Compre
                        flores caras e poste como presente recebido.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="captions" className="space-y-6">
              {Object.entries(captionTemplates).map(([category, captions]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="capitalize">
                      {category === "spoiled" && "💝 Legendas Spoiled"}
                      {category === "luxury" && "💎 Legendas Luxury"}
                      {category === "mystery" && "🤫 Legendas Misteriosas"}
                      {category === "intellectual" && "📚 Legendas Intelectuais"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {captions.map((caption, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                          <span className="text-sm">{caption}</span>
                          <Button size="sm" variant="ghost" onClick={() => copyToClipboard(caption)}>
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card>
                <CardHeader>
                  <CardTitle>🎭 Como Usar as Legendas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-pink-50 p-3 rounded-lg">
                      <h4 className="font-medium text-pink-800">💝 Spoiled</h4>
                      <p className="text-sm text-pink-700">
                        Use quando postar presentes, flores, viagens. Sempre insinue que recebeu de alguém.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <h4 className="font-medium text-purple-800">💎 Luxury</h4>
                      <p className="text-sm text-purple-700">
                        Para fotos em locais caros, looks impecáveis, momentos de glamour.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-medium text-gray-800">🤫 Mystery</h4>
                      <p className="text-sm text-gray-700">
                        Crie curiosidade e escassez. Use quando quiser gerar interesse.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="growth" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Social Proof Booster
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-medium text-green-800 mb-2">📈 Por que Comprar Seguidores?</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Cria percepção de valor e status</li>
                      <li>• Atrai seguidores orgânicos (prova social)</li>
                      <li>• Facilita parcerias e convites</li>
                      <li>• Homens ricos associam muitos seguidores = mulher desejada</li>
                      <li>• Pode atrair até famosos para seu círculo</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <h4 className="font-bold text-blue-800">Meta Inicial</h4>
                      <p className="text-2xl font-bold text-blue-600">10K</p>
                      <p className="text-sm text-blue-700">Seguidores para status</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <h4 className="font-bold text-purple-800">Meta Intermediária</h4>
                      <p className="text-2xl font-bold text-purple-600">50K</p>
                      <p className="text-sm text-purple-700">Influencer reconhecida</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg text-center">
                      <h4 className="font-bold text-pink-800">Meta Final</h4>
                      <p className="text-2xl font-bold text-pink-600">100K+</p>
                      <p className="text-sm text-pink-700">Status de celebridade</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-800 mb-2">⚠️ Estratégia Gradual</h4>
                    <div className="space-y-2 text-sm text-yellow-700">
                      <p>
                        <strong>Semana 1-2:</strong> 500-1000 seguidores
                      </p>
                      <p>
                        <strong>Semana 3-4:</strong> +1000 seguidores
                      </p>
                      <p>
                        <strong>Mês 2:</strong> +2000 seguidores
                      </p>
                      <p>
                        <strong>Mês 3:</strong> +3000 seguidores
                      </p>
                      <p className="font-medium">Total em 3 meses: ~10K seguidores</p>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                    <Users className="w-4 h-4 mr-2" />
                    Ver Fornecedores Confiáveis
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end mt-6">
            <Button onClick={saveProfile} className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
              <Crown className="w-4 h-4 mr-2" />
              Salvar Perfil Completo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
