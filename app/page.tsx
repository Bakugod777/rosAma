'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, RotateCcw, Sparkles } from 'lucide-react'
import { YellowFlower } from '@/components/yellow-flower'
import { ritualCards, type RitualAnswers } from '@/lib/ritual'

type Stage = 'welcome' | 'questions' | 'blooming' | 'final'

export default function Page() {
  const [stage, setStage] = useState<Stage>('welcome')
  const [name, setName] = useState('')
  const [card, setCard] = useState(0)
  const [response, setResponse] = useState('')
  const [answers, setAnswers] = useState<RitualAnswers>({})
  const [entered, setEntered] = useState(false)

  const current = ritualCards[card]
  const trimmedName = name.trim()
  const trimmedResponse = response.trim()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setEntered(true))
    return () => window.cancelAnimationFrame(frame)
  }, [stage, card])

  useEffect(() => {
    if (stage !== 'blooming') return
    const timer = window.setTimeout(() => setStage('final'), 2200)
    return () => window.clearTimeout(timer)
  }, [stage])

  const start = () => {
    if (!trimmedName) return
    setEntered(false)
    setStage('questions')
  }

  const next = () => {
    if (!trimmedResponse) return

    const nextAnswers = { ...answers, [current.id]: trimmedResponse }
    setAnswers(nextAnswers)

    if (card === ritualCards.length - 1) {
      setEntered(false)
      setStage('blooming')
      return
    }

    setEntered(false)
    setCard((value) => value + 1)
    setResponse('')
  }

  const restart = () => {
    setStage('welcome')
    setName('')
    setCard(0)
    setResponse('')
    setAnswers({})
    setEntered(false)
  }

  if (stage === 'blooming') {
    return (
      <main className="blooming-page" aria-live="polite">
        <div className="blooming-orb" aria-hidden="true" />
        <p className="blooming-kicker">para {trimmedName}</p>
        <h1 className="blooming-title">
          Algo está
          <em> floreciendo</em>
        </h1>
        <p className="blooming-copy">Tus respuestas se están volviendo pétalos.</p>
        <div className="blooming-progress" aria-hidden="true">
          <span />
        </div>
      </main>
    )
  }

  if (stage === 'final') {
    return (
      <main className={`final-page ${entered ? 'is-entered' : ''}`}>
        <div className="final-stars" aria-hidden="true">
          ✦ · ✧ · ✦
        </div>
        <p className="final-kicker">una flor para {trimmedName}</p>
        <YellowFlower />
        <section className="final-message">
          <p className="message-label">
            <Sparkles size={14} aria-hidden="true" /> lo que quería decirte
          </p>
          <h1>
            A pesar de que no puedo entregártelas hoy,
            <br />
            <em>un día te daré un gran ramo</em>
          </h1>
          <p className="message-body">de esas que puedan llenar un poco tu corazón.</p>
          <div className="message-line" aria-hidden="true" />
          <ul className="petal-memories" aria-label="Tus respuestas convertidas en pétalos">
            {ritualCards.map((item) => (
              <li key={item.id}>
                <span>{item.petalLabel}</span>
                <p>{answers[item.id]}</p>
              </li>
            ))}
          </ul>
          <p className="message-signoff">Con cariño, para que nunca te falte un lugar donde florecer.</p>
        </section>
        <button type="button" className="restart-button" onClick={restart}>
          <RotateCcw size={15} aria-hidden="true" /> volver a empezar
        </button>
      </main>
    )
  }

  return (
    <main className="game-page">
      <div className="game-noise" aria-hidden="true" />
      <div className="botanical-plane" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/spring-botanical.png" alt="" />
      </div>

      {stage === 'welcome' ? (
        <div className={`welcome-screen ${entered ? 'is-entered' : ''}`}>
          <header className="ritual-mark">
            <span>01</span>
            <span>flor amarilla / un pequeño ritual</span>
          </header>

          <div className="welcome-copy">
            <p className="brand-mark">Flores Amarillas</p>
            <p className="eyebrow">para un corazón que merece luz</p>
            <h1>
              Hay cosas que
              <br />
              <em>florecen</em> despacio.
            </h1>
            <p className="welcome-description">
              Tres preguntas, una pausa y una flor que espera nacer al final. Guarda este momento
              para ti.
            </p>
          </div>

          <div className="name-row">
            <label className="sr-only" htmlFor="ritual-name">
              Escribe tu nombre
            </label>
            <input
              id="ritual-name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') start()
              }}
              placeholder="escribe tu nombre"
              autoComplete="given-name"
              autoFocus
              maxLength={40}
            />
            <button type="button" onClick={start} disabled={!trimmedName} aria-label="Comenzar">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>

          <p className="welcome-note">
            <span aria-hidden="true" /> tardarás menos de un minuto
          </p>
        </div>
      ) : (
        <div className={`question-screen ${entered ? 'is-entered' : ''}`}>
          <header className="ritual-mark">
            <span>flor amarilla</span>
            <span>para {trimmedName}</span>
          </header>

          <div className="question-layout">
            <aside className="question-aside">
              <p className="eyebrow">tu pausa de hoy</p>
              <h1>
                Cuéntame
                <br />
                <em>algo bonito.</em>
              </h1>
              <p>Las respuestas no tienen que ser perfectas. Solo tienen que ser tuyas.</p>
              <div
                className="progress-dots"
                aria-label={`Pregunta ${card + 1} de ${ritualCards.length}`}
              >
                {ritualCards.map((item, index) => (
                  <span
                    key={item.id}
                    className={index < card ? 'done' : index === card ? 'active' : ''}
                  />
                ))}
              </div>
            </aside>

            <section className="question-card" key={current.id}>
              <div className="card-heading">
                <span>
                  pregunta {card + 1} / {ritualCards.length}
                </span>
                <span>con calma</span>
              </div>
              <h2>{current.question}</h2>
              <div className="response-area">
                <label className="sr-only" htmlFor="ritual-answer">
                  Tu respuesta
                </label>
                <textarea
                  id="ritual-answer"
                  value={response}
                  onChange={(event) => setResponse(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey && trimmedResponse) {
                      event.preventDefault()
                      next()
                    }
                  }}
                  placeholder="Escribe aquí lo que sientes..."
                  autoFocus
                  rows={4}
                  maxLength={280}
                />
                <div className="response-meta">
                  <span className="response-hint">
                    No hay respuestas correctas. Escribe lo primero que llegue a tu corazón.
                  </span>
                  <span className="response-count">{response.length}/280</span>
                </div>
              </div>

              {trimmedResponse ? (
                <>
                  <div className="answer-reveal">
                    <span aria-hidden="true">✦</span>
                    {current.result}
                  </div>
                  <button type="button" className="next-button" onClick={next}>
                    {card === ritualCards.length - 1 ? 'ver cómo florece' : 'siguiente'}
                    <ArrowRight size={17} aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </section>
          </div>

          <footer className="question-footer">
            <span>una respuesta a la vez</span>
            <span aria-hidden="true">● ● ●</span>
          </footer>
        </div>
      )}
    </main>
  )
}
