'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ThankYou() {
    const [founderData, setFounderData] = useState<any>(null)

    useEffect(() => {
        // Retrieve founder data from localStorage
        const data = localStorage.getItem('founderData')
        if (data) {
            setFounderData(JSON.parse(data))
        }
    }, [])

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Header */}
            <div className="section-container py-8">
                <Link href="/" className="inline-block">
                    <div className="relative w-14 h-14 md:w-16 md:h-16 cursor-pointer hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/logoiservice.png"
                            alt="Iservice"
                            fill
                            sizes="(max-width: 768px) 56px, 64px"
                            className="object-contain"
                        />
                    </div>
                </Link>
            </div>

            {/* Main Content */}
            <div className="section-container">
                <div className="max-w-4xl mx-auto">
                    {/* Success Message */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-8 shadow-2xl animate-bounce">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <div className="mb-6">
                            <div className="inline-block bg-green-100 text-green-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
                                ✓ Cadastro Confirmado
                            </div>
                        </div>

                        <h1 className="heading-lg mb-6 px-4">
                            Bem-vindo ao time de{' '}
                            <span className="relative inline-block">
                                <span className="text-primary">Prestadores Fundadores!</span>
                                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                                    <path d="M0 4 Q 150 8, 300 4" stroke="#29ceef" strokeWidth="2" fill="none" opacity="0.3"/>
                                </svg>
                            </span>
                        </h1>

                        {founderData && (
                            <p className="text-2xl text-gray-700 max-w-2xl mx-auto">
                                Olá, <strong className="text-primary text-3xl">{founderData.name.split(' ')[0]}</strong>! 
                                <br />
                                <span className="text-xl">Seu pré-credenciamento foi recebido com sucesso.</span>
                            </p>
                        )}
                    </div>

                    {/* Video Section - DESTAQUE ESPECIAL */}
                    <div className="relative mb-16">
                        {/* Badge especial acima do vídeo */}
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                Mensagem Especial do Fundador
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-primary/20">
                            <div className="aspect-video bg-gradient-to-br from-primary/20 via-sky-50 to-gray-100 flex items-center justify-center relative group">
                                {/* Video Placeholder com animação */}
                                <div className="text-center p-8">
                                    <div className="relative inline-block">
                                        <div className="w-28 h-28 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl transform group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                                            <svg className="w-14 h-14 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse"></div>
                                    </div>
                                    <p className="text-xl text-gray-800 font-bold mb-2">
                                        🎥 Mensagem do Fundador Paulo Ricardo
                                    </p>
                                    <p className="text-sm text-gray-600 bg-white/80 inline-block px-4 py-2 rounded-full">
                                        Clique para assistir (em breve)
                                    </p>
                                </div>
                            </div>

                            {/* Video Script as Text - TOM INSTITUCIONAL/PARCEIRO */}
                            <div className="p-10 bg-gradient-to-br from-gray-50 to-white">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-lg ring-4 ring-primary/10">
                                            <span className="text-white font-bold text-xl">PR</span>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-4">
                                            <h3 className="font-bold text-xl text-gray-900">Paulo Ricardo</h3>
                                            <p className="text-primary font-semibold">Fundador do Iservice</p>
                                        </div>
                                        <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-primary">
                                            <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                                                <p className="text-gray-600 italic">
                                                    &ldquo;Olá, eu sou o Paulo Ricardo, fundador do Iservice. Se você chegou até aqui,
                                                    você faz parte do <strong className="text-gray-900">seleto grupo de profissionais</strong> que entendeu que a prestação
                                                    de serviços no Brasil mudou.
                                                </p>
                                                <p className="text-gray-600 italic">
                                                    Estamos desenvolvendo uma <strong className="text-primary">tecnologia robusta</strong> para garantir que
                                                    seu trabalho seja valorizado e seguro. Seu pré-credenciamento foi recebido.
                                                </p>
                                                <p className="text-gray-600 italic">
                                                    Agora, fique atento ao seu WhatsApp, pois nossa equipe enviará os próximos
                                                    passos e o seu acesso à nossa comunidade.
                                                </p>
                                                <p className="font-bold text-xl text-primary not-italic border-t-2 border-primary/20 pt-4 mt-4">
                                                    Vamos construir o futuro do trabalho juntos.&rdquo;
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Next Steps - REFINADO */}
                    <div className="bg-gradient-to-br from-white to-sky-50 rounded-3xl shadow-2xl p-10 mb-12 border-2 border-primary/10">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                📋 Próximos Passos
                            </h2>
                            <p className="text-gray-600">Fique atento! Veja o que acontecerá agora</p>
                        </div>
                        
                        <div className="space-y-6 max-w-3xl mx-auto">
                            <div className="relative flex items-start gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        1
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        Aguarde nosso contato
                                    </h3>
                                    <p className="text-gray-600">
                                        Em até <strong className="text-primary">48 horas</strong> você receberá uma mensagem no WhatsApp{' '}
                                        {founderData && (
                                            <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold mt-2">
                                                📱 {founderData.whatsapp}
                                            </span>
                                        )}
                                    </p>
                                </div>
                                {/* Connection line */}
                                <div className="absolute left-[27px] top-[70px] w-0.5 h-6 bg-gradient-to-b from-primary to-transparent"></div>
                            </div>

                            <div className="relative flex items-start gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        2
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                        </svg>
                                        Acesse a comunidade fundadora
                                    </h3>
                                    <p className="text-gray-600">
                                        Você receberá o <strong className="text-primary">link exclusivo</strong> para entrar no grupo de WhatsApp com outros prestadores fundadores
                                    </p>
                                </div>
                                {/* Connection line */}
                                <div className="absolute left-[27px] top-[70px] w-0.5 h-6 bg-gradient-to-b from-primary to-transparent"></div>
                            </div>

                            <div className="relative flex items-start gap-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        3
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2 flex items-center gap-2">
                                        <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        Complete seu perfil
                                    </h3>
                                    <p className="text-gray-600">
                                        Enviaremos <strong className="text-green-600">instruções detalhadas</strong> para finalizar seu cadastro e começar a receber clientes
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Alert Box */}
                        <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200">
                            <div className="flex items-start gap-4">
                                <svg className="w-8 h-8 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">⚠️ Importante: Fique atento ao seu WhatsApp!</h4>
                                    <p className="text-sm text-gray-700">
                                        Não perca nenhuma mensagem nossa. Adicione nosso número aos seus contatos e ative as notificações para garantir que não perderá nenhum passo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA to return */}
                    <div className="text-center">
                        <Link
                            href="/"
                            className="inline-block px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-all duration-300"
                        >
                            Voltar para a página inicial
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="section-container text-center text-gray-500 text-sm">
                <p>© 2026 Iservice. Todos os direitos reservados.</p>
            </div>
        </main>
    )
}
