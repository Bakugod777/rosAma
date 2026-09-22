export type RitualCard = {
  id: string
  question: string
  result: string
  petalLabel: string
}

export const ritualCards: RitualCard[] = [
  {
    id: 'deseo',
    question: '¿Qué pequeño deseo guardas en tu corazón?',
    result: 'Ese deseo es el primer pétalo de tu flor.',
    petalLabel: 'tu deseo',
  },
  {
    id: 'sonrisa',
    question: '¿Qué cosa pequeña te hizo sonreír recientemente?',
    result: 'Ese momento es el segundo pétalo, el que brilla más fuerte.',
    petalLabel: 'tu sonrisa',
  },
  {
    id: 'recuerdo',
    question: '¿Qué recuerdo bonito te gustaría guardar para siempre?',
    result: 'Ese recuerdo es el tercer pétalo, el que guarda tu corazón.',
    petalLabel: 'tu recuerdo',
  },
]

export type RitualAnswers = Record<string, string>
