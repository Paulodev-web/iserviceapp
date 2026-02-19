import { FiShield, FiCalendar, FiLock, FiTrendingUp } from 'react-icons/fi'

export default function Differentials() {
  const pillars = [
    {
      icon: FiShield,
      title: 'Selo de Autoridade iService',
      description: 'Destaque-se na multidão. Nossa verificação rigorosa separa os amadores dos profissionais de elite, elevando seu valor de mercado imediatamente.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradientFrom: 'from-primary/60',
      gradientTo: 'to-primary'
    },
    {
      icon: FiCalendar,
      title: 'Ecossistema de Gestão',
      description: 'Elimine a desordem do WhatsApp. Centralize agenda, contatos e histórico em uma interface intuitiva desenhada para a sua produtividade.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradientFrom: 'from-primary/60',
      gradientTo: 'to-primary'
    },
    {
      icon: FiLock,
      title: 'Garantia de Recebimento',
      description: 'Segurança financeira absoluta. O pagamento é processado no agendamento, garantindo que você seja remunerado com pontualidade por cada hora trabalhada.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      gradientFrom: 'from-green-400',
      gradientTo: 'to-green-600',
      isHighlighted: true
    },
    {
      icon: FiTrendingUp,
      title: 'Trilhas de Especialização',
      description: 'Suba de nível. Tenha acesso exclusivo a parceiros técnicos e cursos de atualização para aumentar sua expertise e, consequentemente, seus preços.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradientFrom: 'from-purple-400',
      gradientTo: 'to-purple-600'
    }
  ]

  return (
    <section className="relative bg-white section-container overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
            Seus Diferenciais
          </div>
          
          <h2 className="heading-lg mb-6">
            Os 4 Pilares do <span className="text-primary">Seu Sucesso</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma plataforma completa para <strong className="text-gray-900">profissionalizar e escalar</strong> seu negócio de serviços
          </p>
        </div>

        {/* Connecting Progress Bar */}
        <div className="relative max-w-7xl mx-auto mb-8">
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-full"></div>
          <div className="hidden lg:block absolute top-16 left-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full animate-pulse shadow-md"
               style={{ width: '100%', animation: 'progress-flow 4s ease-in-out infinite' }}></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-primary transform hover:-translate-y-2 hover:scale-105 ${pillar.isHighlighted ? 'ring-2 ring-green-200' : ''}`}
            >
              {/* Special Badge for Security */}
              {pillar.isHighlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  MAIS SEGURO
                </div>
              )}

              {/* Number badge with mono font */}
              <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <span className="text-white font-bold text-lg font-mono">{index + 1}</span>
              </div>

              {/* Icon with gradient background */}
              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.gradientFrom} ${pillar.gradientTo} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-lg`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                {pillar.description}
              </p>

              {/* Enhanced hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl shadow-md"></div>
              
              {/* Additional glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary/5 to-primary-dark/5"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Enhanced */}
        <div className="mt-20 text-center max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary/5 via-sky-50 to-primary/10 rounded-3xl p-10 border border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-primary/30 to-primary/20 rounded-full"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Tudo isso em <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">uma única plataforma</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Deixe de lado planilhas, cadernos e mensagens perdidas. Centralize tudo no iService e foque no que realmente importa: <strong className="text-gray-900">aumentar seus resultados.</strong>
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-green-100">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-gray-700">Sem mensalidade no 1º mês</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-primary/20">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-gray-700">Suporte dedicado</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-gray-700">ROI comprovado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
