export default function MarketVision() {
    return (
        <section className="relative bg-white/30 section-container overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">

                {/* Content */}
                <div className="space-y-8">
                    <div className="inline-block">
                        <div className="bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-orange-200">
                            ESTÁGIO DE DESENVOLVIMENTO: CREDENCIAMENTO
                        </div>
                    </div>
                    
                    <h2 className="heading-lg text-gray-900 px-4">
                        O próximo grande marketplace de serviços do Brasil{' '}
                        <span className="relative inline-block">
                            <span className="text-primary">está sendo construído aqui.</span>
                            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                                <path d="M0 4 Q 150 8, 300 4" stroke="#29ceef" strokeWidth="2" fill="none" opacity="0.3"/>
                            </svg>
                        </span>
                    </h2>

                    <div className="pt-6">
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-4">
                            Mais do que conectar pessoas, estamos desenvolvendo a <strong className="text-gray-900">infraestrutura técnica que faltava</strong> para o profissional autônomo. 
                            No iService, a qualidade é a métrica principal, garantindo um mercado <strong className="text-primary">justo, seguro e altamente eficiente.</strong>
                        </p>
                    </div>

                    {/* Ecosystem Pillars */}
                    <div className="grid md:grid-cols-3 gap-8 pt-8 max-w-5xl mx-auto">
                        {/* Card 1: Chancela de Qualidade */}
                        <div className="relative group">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="text-lg font-bold text-gray-900 mb-3">Chancela de Qualidade</div>
                                <div className="text-sm text-gray-600 leading-relaxed">Não somos um mural de anúncios. Ser um prestador iService é um selo de competência técnica e profissionalismo no mercado.</div>
                            </div>
                        </div>
                        
                        {/* Card 2: Gestão Digital */}
                        <div className="relative group">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6m-6 4h6" />
                                    </svg>
                                </div>
                                <div className="text-lg font-bold text-gray-900 mb-3">Gestão Digital</div>
                                <div className="text-sm text-gray-600 leading-relaxed">Transformamos seu celular em um escritório completo. Agenda automática, controle de fluxo e organização total do seu negócio.</div>
                            </div>
                        </div>
                        
                        {/* Card 3: Segurança Transacional */}
                        <div className="relative group">
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        <circle cx="12" cy="11" r="2" fill="currentColor" />
                                    </svg>
                                </div>
                                <div className="text-lg font-bold text-gray-900 mb-3">Segurança Transacional</div>
                                <div className="text-sm text-gray-600 leading-relaxed">Fim do risco de calotes. O iService garante que cada serviço agendado seja um pagamento honrado e seguro na sua conta.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative geometric elements */}
                <div className="relative pt-12">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-3 h-3 bg-primary rounded-full -mt-1.5"></div>
                </div>
            </div>
        </section>
    )
}
