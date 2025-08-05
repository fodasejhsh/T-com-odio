"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, Crown, Heart, Camera, Zap, MapPin, Users, MessageCircle } from "lucide-react"

interface TacticsGuideProps {
  onTacticsStarted: () => void
}

export default function TacticsGuide({ onTacticsStarted }: TacticsGuideProps) {
  const [completedTactics, setCompletedTactics] = useState<string[]>([])

  const toggleTactic = (tacticId: string) => {
    setCompletedTactics((prev) =>
      prev.includes(tacticId) ? prev.filter((id) => id !== tacticId) : [...prev, tacticId],
    )
    onTacticsStarted()
  }

  const mainTactics = [
    {
      id: "mimada",
      title: "1. Tática: Mimada & Desejada",
      icon: Crown,
      description: "Marketing pessoal direto: insinuação de que você é mimada, desejada, mantida",
      color: "pink",
      steps: [
        {
          action: "Comprar buquê gigante",
          execution: "Vá na Florence ou floricultura cara, compre buquê de R$300+",
          post: 'Poste segurando com legenda: "Lucky me 🤏🏻💕" ou "Ele sabe como me agradar ✨"',
          why: "Sinaliza que você recebe mimos caros regularmente",
        },
        {
          action: "Comprar item Chanel/Dior",
          execution: "Compre batom, gloss ou perfume pequeno. Peça várias sacolas separadas",
          post: 'Foto com sacola: "Thanks bby 🥹" ou "Chanel me or bye 💋"',
          why: "Cria narrativa de que homens te dão presentes de grife",
        },
        {
          action: "Alugar suite de luxo",
          execution: "Alugue 1 diária em hotel 5 estrelas só para conteúdo",
          post: 'Stories no quarto: "Surprises like this >>>" ou "Spoiled today 💸"',
          why: "Mostra que você está acostumada com luxo",
        },
      ],
    },
    {
      id: "aparencia",
      title: "2. Tática: Aparência = Valor",
      icon: Zap,
      description: "Reforço contínuo com estética cara para justificar seu lifestyle",
      color: "purple",
      steps: [
        {
          action: "Documentar procedimentos",
          execution: "Filme/fotografe ida ao dermatologista, harmonização, salão",
          post: "Stories getting ready + resultado final",
          why: "Mostra investimento constante em si mesma",
        },
        {
          action: "Poses estratégicas",
          execution: "Fotos de costas no espelho, sentada na cama de hotel, lingerie elegante",
          post: 'Legenda: "Investir em mim nunca foi gasto 💸"',
          why: "Valoriza corpo e transmite sensualidade cara",
        },
        {
          action: "Academia de luxo",
          execution: "Malhe em academia cara, use conjunto esportivo de grife",
          post: "Selfie no espelho com look impecável",
          why: "Mostra que você se cuida em lugares caros",
        },
      ],
    },
    {
      id: "localizacao",
      title: "3. Tática: Localização = Status",
      icon: MapPin,
      description: "Onde você aparece importa mais do que com quem",
      color: "rose",
      steps: [
        {
          action: "Restaurantes caros",
          execution: "Vá em restaurantes top da cidade, mesmo que sozinha",
          post: 'Foto da mesa/ambiente + legenda: "Surpresas assim me fazem sorrir 😚"',
          why: "Cria impressão de que alguém te levou para jantar caro",
        },
        {
          action: "Airbnb de luxo",
          execution: "Alugue casa/apartamento caro por 1 dia só para fotos",
          post: 'Stories na piscina/varanda: "This week\'s view ✨"',
          why: "Aparenta que você tem acesso a propriedades de luxo",
        },
        {
          action: "Rooftops e lounges",
          execution: "Frequente bares de cobertura, lounges de hotel",
          post: 'Foto com taça de champagne: "Um mimo depois de uma semana intensa"',
          why: "Associa sua imagem a ambientes exclusivos",
        },
      ],
    },
    {
      id: "storytelling",
      title: "4. Tática: Storytelling de Princesa",
      icon: Heart,
      description: "Narrativa da mulher mimada que só aceita o melhor",
      color: "yellow",
      steps: [
        {
          action: 'Nunca dizer "não tenho"',
          execution: 'Toda novidade = "ganhei", "me convidaram", "surpresa"',
          post: "Sempre insinue que recebeu de alguém",
          why: "Mantém narrativa de mulher mantida",
        },
        {
          action: "Reels com música de princesa",
          execution: "Use Lana Del Rey, Slayyyter, Doja Cat soft",
          post: "Transição de casual para luxury babe",
          why: "Reforça estética de princesa moderna",
        },
        {
          action: "Stories com indiretas",
          execution: "Frases soltas criando curiosidade",
          post: '"Ele disse que eu tenho gosto de problema..." sem contexto',
          why: "Gera interesse e especulação",
        },
      ],
    },
    {
      id: "homens-escada",
      title: "5. Tática: Usar Homens como Escada",
      icon: Users,
      description: "Aceite convites que elevem seu padrão, mas nunca mostre o homem",
      color: "blue",
      steps: [
        {
          action: "Aceitar convites estratégicos",
          execution: "Viagens, restaurantes caros, spas, eventos de elite",
          post: "Mostre apenas o resultado: presente, local, experiência",
          why: "Homens bancam seu lifestyle sem protagonizar",
        },
        {
          action: "Fotos estratégicas",
          execution: "Mão masculina entregando taça, presente, chave do carro",
          post: "Nunca mostre o rosto, apenas detalhes caros (relógio, anel)",
          why: "Insinua presença masculina rica sem comprometer mistério",
        },
        {
          action: "Networking em eventos",
          execution: "Use homens para acessar festas de elite, vernissages, lançamentos",
          post: "Fotos no evento, você sempre protagonista",
          why: "Expande círculo social e oportunidades",
        },
      ],
    },
    {
      id: "feed-calculado",
      title: "6. Tática: Feed Calculado (Imã de Desejo)",
      icon: Camera,
      description: "Organização estratégica do conteúdo para máximo impacto",
      color: "green",
      steps: [
        {
          action: "Rotação de conteúdo",
          execution: "1 post corpo/espelho → 1 post local caro → 1 post piscina/lingerie → 1 post inspiração Pinterest",
          post: "Carrosséis com qualidade de paparazzi particular",
          why: "Mantém interesse e sugere lifestyle diversificado",
        },
        {
          action: "Legendas calculadas",
          execution: "Sexy, elegante, distante, fria - nunca emocional demais",
          post: '"Off to brunch 💋", "Last night..." com mistério',
          why: "Sugere desejo e exclusividade sem parecer disponível",
        },
        {
          action: "Timing estratégico",
          execution: "Poste quando seu público-alvo está online (noite, fins de semana)",
          post: "Stories durante o dia, feed à noite",
          why: "Maximiza visualizações e engajamento",
        },
      ],
    },
    {
      id: "escassez-misterio",
      title: "7. Tática: Escassez e Mistério",
      icon: MessageCircle,
      description: "Crie curiosidade e desejo através da ausência estratégica",
      color: "indigo",
      steps: [
        {
          action: "Sumiço estratégico",
          execution: "2-3 dias sem postar, volte com foto em local luxuoso",
          post: '"Back to paradise ✨" ou "Missed me?"',
          why: "Ausência gera curiosidade e valoriza sua presença",
        },
        {
          action: "Não responder tudo",
          execution: "Seja seletiva com interações, não responda todos os DMs/comentários",
          post: "Responda apenas interações de valor ou interessantes",
          why: "Cria percepção de exclusividade e alto valor",
        },
        {
          action: "Frases soltas misteriosas",
          execution: "Stories com frases que geram curiosidade",
          post: '"Mal cheguei e já me mimaram 🤫", "Tem alguém aqui que sabe me tratar..."',
          why: "Público cria narrativas sobre sua vida",
        },
      ],
    },
    {
      id: "intelecto-curado",
      title: "8. Tática: Intelecto Curado",
      icon: Target,
      description: "Luxury babe estudiosa - beleza + inteligência + luxo",
      color: "teal",
      steps: [
        {
          action: "Leitura fake luxuosa",
          execution: "Coffee table books, livros de moda/arte, autoajuda famosa",
          post: 'Foto com livro + taça de vinho: "A quiet luxury evening 🍷📖"',
          why: 'Quebra estereótipo da "só gostosa", adiciona profundidade',
        },
        {
          action: "Estudo fake produtivo",
          execution: "Notebook com cursos caros, material de biomedicina + café chique",
          post: '"Always learning, always evolving ✨"',
          why: "Atrai homens ricos que valorizam inteligência",
        },
        {
          action: "Conteúdo profissional sexy",
          execution: "Jaleco + maquiagem perfeita, laptop + look elegante",
          post: '"Beauty is science 💉" ou "Making systems, breaking hearts"',
          why: "Justifica lifestyle caro através da competência",
        },
      ],
    },
  ]

  const weeklyChecklist = [
    'Postar 1 foto "spoiled" (presente/mimo fake)',
    "Documentar 1 procedimento estético",
    "Foto em local caro (restaurante/hotel)",
    "Stories getting ready com produtos de luxo",
    "Sumir 2 dias, voltar com conteúdo luxuoso",
    "Postar 1 conteúdo intelectual (estudo/leitura)",
    "Foto corpo/lingerie em cenário sofisticado",
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-rose-600" />
            Táticas de Construção de Imagem
          </CardTitle>
          <p className="text-gray-600">
            Estratégias comprovadas para ser percebida como uma mulher cara, mimada e desejável.
            <span className="font-bold text-rose-600">
              {" "}
              LEMBRE-SE: Não atraímos o que somos, atraímos o que aparentamos ser!
            </span>
          </p>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white p-4 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-2">🎯 META PRINCIPAL</h3>
            <p className="text-sm">
              FINGIR ATÉ SE TORNAR REAL - Venda a imagem que você quer ter na sua vida! Isso vai atrair viagens,
              oportunidades GRANDES, homens ricos e provedores.
            </p>
          </div>

          <Tabs defaultValue="tactics" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tactics">Táticas Principais</TabsTrigger>
              <TabsTrigger value="checklist">Checklist Semanal</TabsTrigger>
            </TabsList>

            <TabsContent value="tactics" className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {mainTactics.map((tactic) => {
                  const Icon = tactic.icon
                  const isCompleted = completedTactics.includes(tactic.id)

                  return (
                    <Card
                      key={tactic.id}
                      className={`border-2 ${isCompleted ? "border-green-200 bg-green-50" : "border-gray-200"}`}
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Icon className={`w-6 h-6 text-${tactic.color}-600`} />
                            <div>
                              <CardTitle className="text-lg">{tactic.title}</CardTitle>
                              <p className="text-sm text-gray-600">{tactic.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox checked={isCompleted} onCheckedChange={() => toggleTactic(tactic.id)} />
                            {isCompleted && (
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                ✓ Ativa
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {tactic.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-medium text-gray-900 mb-2">📋 {step.action}</h4>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <span className="font-medium text-blue-800">Como fazer:</span>
                                  <p className="text-gray-700">{step.execution}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-purple-800">Como postar:</span>
                                  <p className="text-gray-700">{step.post}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-green-800">Por que funciona:</span>
                                  <p className="text-gray-700">{step.why}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>

            <TabsContent value="checklist" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>📅 Checklist Semanal de Táticas</CardTitle>
                  <p className="text-gray-600">Execute essas ações toda semana para manter a narrativa de luxo ativa</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {weeklyChecklist.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Checkbox />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-2">💡 Dicas Importantes:</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Nunca poste tudo no mesmo dia - espalhe ao longo da semana</li>
                      <li>• Varie os horários de postagem para parecer natural</li>
                      <li>• Sempre mantenha a narrativa: você é mimada e desejada</li>
                      <li>• Se não tem dinheiro para algo caro, improvise com criatividade</li>
                      <li>• Documente tudo - uma foto pode render vários posts</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>🎭 Exemplos Práticos de Execução</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-medium text-pink-800 mb-2">💐 Exemplo: Buquê de Flores</h4>
                      <div className="text-sm text-pink-700 space-y-1">
                        <p>
                          <strong>Compre:</strong> Buquê de R$300 na Florence
                        </p>
                        <p>
                          <strong>Foto:</strong> Você segurando com sorriso discreto
                        </p>
                        <p>
                          <strong>Legenda:</strong> "Lucky me 🤏🏻💕" ou "Ele sabe como me agradar ✨"
                        </p>
                        <p>
                          <strong>Stories:</strong> Close das flores + música romântica
                        </p>
                        <p>
                          <strong>Resultado:</strong> Narrativa de que alguém te mimou
                        </p>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">👜 Exemplo: Sacola Chanel</h4>
                      <div className="text-sm text-purple-700 space-y-1">
                        <p>
                          <strong>Compre:</strong> Batom ou gloss pequeno na Chanel
                        </p>
                        <p>
                          <strong>Peça:</strong> Várias sacolas separadas (finja que são presentes diferentes)
                        </p>
                        <p>
                          <strong>Foto:</strong> Sacola na cama ou mesa elegante
                        </p>
                        <p>
                          <strong>Legenda:</strong> "Thanks bby 🥹" ou "Chanel me or bye 💋"
                        </p>
                        <p>
                          <strong>Resultado:</strong> Aparenta receber presentes de grife regularmente
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">🏨 Exemplo: Hotel de Luxo</h4>
                      <div className="text-sm text-blue-700 space-y-1">
                        <p>
                          <strong>Alugue:</strong> 1 diária em hotel 5 estrelas
                        </p>
                        <p>
                          <strong>Aproveite:</strong> Tire 20+ fotos em ângulos diferentes
                        </p>
                        <p>
                          <strong>Conteúdo:</strong> Stories getting ready + foto na cama + vista da janela
                        </p>
                        <p>
                          <strong>Legenda:</strong> "This week\'s view ✨" ou "Surprises like this &gt;&gt;&gt;"
                        </p>
                        <p>
                          <strong>Resultado:</strong> 1 diária = conteúdo para 1 mês
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
