import { useState, useCallback } from 'react'
import ProgressBar from './components/ProgressBar'
import Header from './components/Header'
import DadosCliente from './components/DadosCliente'
import IdentidadeVisual from './components/IdentidadeVisual'
import Produtos from './components/Produtos'
import PrazoEntrega from './components/PrazoEntrega'
import Aprovacao from './components/Aprovacao'

const FORMSPREE = 'https://formspree.io/f/mredlken'

export default function App() {
  const [filled, setFilled] = useState(0)
  const [total, setTotal] = useState(1)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = useCallback(() => {
    const all = document.querySelectorAll('input, select, textarea')
    let count = 0
    all.forEach(el => {
      if (el.tagName === 'SELECT') {
        if (el.selectedIndex > 0) count++
      } else if (el.value && el.value.trim() !== '') {
        count++
      }
    })
    setTotal(all.length)
    setFilled(count)
  }, [])

  const pct = total > 0 ? Math.round((filled / total) * 100) : 0

  const handleClear = () => {
    if (window.confirm('Limpar todos os campos?')) {
      document.querySelectorAll('input, textarea').forEach(el => el.value = '')
      document.querySelectorAll('select').forEach(el => el.selectedIndex = 0)
      setFilled(0)
      setStatus('idle')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const data = new FormData(e.target)
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-[#f5f2ef]">
        <div className="bg-white rounded-2xl border border-borda p-12 max-w-md w-full text-center">
          <div className="text-5xl mb-4">🎀</div>
          <h2 className="font-serif text-3xl text-verde mb-2">Recebido!</h2>
          <p className="text-sm text-cinza mb-8 leading-relaxed">
            Formulário enviado com sucesso!<br/>
            A Agnyh vai entrar em contato em breve com o orçamento.
          </p>
          <button
            onClick={handleClear}
            className="px-6 py-2.5 rounded-full bg-verde text-white text-xs tracking-widest uppercase hover:bg-verde-m transition-colors"
          >
            Enviar novo briefing
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <ProgressBar pct={pct} />

      <div className="max-w-3xl mx-auto px-4 pt-6 pb-16">

        {/* BOTÕES */}
        <div className="no-print flex justify-end gap-3 mb-5">
          <button
            type="button"
            onClick={handleClear}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-borda
                       bg-white text-verde text-xs tracking-widest uppercase
                       hover:bg-verde-p transition-colors"
          >
            🗑 Limpar tudo
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-borda
                       bg-white text-verde text-xs tracking-widest uppercase
                       hover:bg-verde-p transition-colors"
          >
            🖨 Salvar PDF
          </button>
        </div>

        <Header />

        <form onSubmit={handleSubmit}>
          <DadosCliente onChange={handleChange} />
          <IdentidadeVisual onChange={handleChange} />
          <Produtos onChange={handleChange} />
          <PrazoEntrega onChange={handleChange} />
          <Aprovacao />

          {/* SUBMIT */}
          <div className="mt-6 text-center">
            {status === 'error' && (
              <p className="text-sm text-red-500 mb-3">
                Erro ao enviar. Tente novamente ou salve como PDF.
              </p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-10 py-3.5 rounded-full bg-verde text-white text-xs tracking-widest
                         uppercase hover:bg-verde-m transition-colors disabled:opacity-50
                         disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Enviando...' : '🎀 Enviar briefing'}
            </button>
            <p className="text-[11px] text-cinza mt-3 tracking-wide">
              As respostas chegam direto no e-mail da Baza Personalizados
            </p>
          </div>
        </form>

        <footer className="text-center mt-8 font-serif text-xs text-cinza italic">
          🎀 Baza Personalizados · by Agnyh Batazuos · Franca, SP · @baza.personalizados
        </footer>
      </div>
    </>
  )
}
