'use client'

import { useState } from 'react'
import { FiUser, FiMessageCircle, FiBriefcase, FiMapPin, FiCheck } from 'react-icons/fi'

export default function FoundersPack() {
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        specialty: '',
        city: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Store form data in localStorage for the thank you page
        localStorage.setItem('founderData', JSON.stringify(formData))
        console.log('Form submitted:', formData)

        // Redirect to thank you page
        window.location.href = '/obrigado'
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section
            id="founders-pack"
            className="relative bg-gradient-to-br from-sky-50 via-white to-gray-50 section-container overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 px-4">
                {/* Header Compacto */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Torne-se um{' '}
                        <span className="text-primary">Prestador Fundador</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Garanta sua posição prioritária e benefícios exclusivos de lançamento
                    </p>
                </div>

                {/* Layout Lado a Lado */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Coluna Esquerda - Benefícios */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Vantagens de Fundador</h3>
                            
                            {/* Lista Limpa de Benefícios */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                                        <FiCheck className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-semibold">Isenção Total: 1 mês grátis no lançamento</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                                        <FiCheck className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-semibold">Onboarding VIP: Treinamento exclusivo de vendas</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                                        <FiCheck className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-semibold">Comunidade: Acesso ao grupo fechado de fundadores</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                                        <FiCheck className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-semibold">👕 Camiseta Oficial: Ao atingir a primeira meta</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna Direita - Formulário */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Nome */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                                    Nome Completo
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiUser className="text-gray-400 w-5 h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="João Silva"
                                    />
                                </div>
                            </div>

                            {/* WhatsApp */}
                            <div className="space-y-2">
                                <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700">
                                    WhatsApp
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiMessageCircle className="text-gray-400 w-5 h-5" />
                                    </div>
                                    <input
                                        type="tel"
                                        id="whatsapp"
                                        name="whatsapp"
                                        required
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="(11) 99999-9999"
                                    />
                                </div>
                            </div>

                            {/* Cidade */}
                            <div className="space-y-2">
                                <label htmlFor="city" className="block text-sm font-semibold text-gray-700">
                                    Cidade/UF
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiMapPin className="text-gray-400 w-5 h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        required
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="São Paulo/SP"
                                    />
                                </div>
                            </div>

                            {/* Especialidade */}
                            <div className="space-y-2">
                                <label htmlFor="specialty" className="block text-sm font-semibold text-gray-700">
                                    Especialidade
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiBriefcase className="text-gray-400 w-5 h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        id="specialty"
                                        name="specialty"
                                        required
                                        value={formData.specialty}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="Ex: Eletricista, Encanador, Designer"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                            >
                                Finalizar Credenciamento
                            </button>

                            <p className="text-xs text-center text-gray-500 mt-4">
                                Vagas limitadas para a primeira fase.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
