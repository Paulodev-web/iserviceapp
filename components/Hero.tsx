'use client'

import Image from 'next/image'

export default function Hero() {
  const scrollToForm = () => {
    document.getElementById('founders-pack')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-white min-h-screen flex items-center py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - Lado Esquerdo */}
          <div className="space-y-8">
            <div className="relative w-20 h-20 md:w-24 md:h-24 mb-8">
              <Image
                src="/logoiservice.png"
                alt="Iservice"
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-contain"
                priority
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Transforme sua prestação de serviços em um negócio de <span className="text-primary">sucesso</span> com o iService.
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              O iService conecta você a clientes qualificados, organiza sua agenda automaticamente e garante que você receba por cada trabalho, sem dor de cabeça.
            </p>

            <div className="pt-6 space-y-4">
              <button
                onClick={scrollToForm}
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                Quero garantir minha vaga
              </button>
              
              {/* Elementos de Confiança */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pt-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Cadastro gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Segurança garantida</span>
                </div>
              </div>
            </div>
          </div>

          {/* Diagrama de Operação - Lado Direito */}
          <div className="flex flex-col items-center space-y-6 relative">
            {/* Card 1 */}
            <div className="bg-white rounded-xl border-2 border-primary/20 p-6 shadow-lg w-full max-w-sm relative z-10 hover:shadow-xl transition-all duration-300 hover:border-primary/40">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      <circle cx="12" cy="8" r="1" fill="currentColor" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12h2a2 2 0 012 2v2a2 2 0 01-2 2h-2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold text-sm">Você é encontrado por clientes da sua região</p>
                  <div className="w-8 h-1 bg-primary/30 rounded mt-2"></div>
                </div>
              </div>
            </div>

            {/* Seta conectora 1 */}
            <div className="flex flex-col items-center relative z-0">
              <div className="w-0.5 h-6 bg-gradient-to-b from-primary to-primary/60"></div>
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z" clipRule="evenodd" transform="rotate(180 10 10)" />
              </svg>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl border-2 border-primary/20 p-6 shadow-lg w-full max-w-sm relative z-10 hover:shadow-xl transition-all duration-300 hover:border-primary/40">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      <circle cx="9" cy="11" r="1" fill="currentColor" />
                      <circle cx="15" cy="11" r="1" fill="currentColor" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 15h6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold text-sm">O agendamento é feito direto no app</p>
                  <div className="w-8 h-1 bg-primary/30 rounded mt-2"></div>
                </div>
              </div>
            </div>

            {/* Seta conectora 2 */}
            <div className="flex flex-col items-center relative z-0">
              <div className="w-0.5 h-6 bg-gradient-to-b from-primary to-primary/60"></div>
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L11 6.414V16a1 1 0 11-2 0V6.414L7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3z" clipRule="evenodd" transform="rotate(180 10 10)" />
              </svg>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl border-2 border-primary/20 p-6 shadow-lg w-full max-w-sm relative z-10 hover:shadow-xl transition-all duration-300 hover:border-primary/40">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" fill="none" />
                      <circle cx="18" cy="8" r="2" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold text-sm">Pagamento garantido após o serviço</p>
                  <div className="w-8 h-1 bg-primary/30 rounded mt-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
