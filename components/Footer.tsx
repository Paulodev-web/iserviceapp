import Image from 'next/image'
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-300">
      {/* Main Footer */}
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="relative w-16 h-16 md:w-20 md:h-20 transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/logoiservice.png" 
                alt="Iservice" 
                fill
                sizes="(max-width: 768px) 64px, 80px"
                className="object-contain"
              />
            </div>
            <p className="text-base leading-relaxed text-gray-400">
              Conectando <strong className="text-white">prestadores de serviço</strong> a clientes de qualidade, 
              com segurança e profissionalismo.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FiInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-gray-800 hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <FiLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Links Rápidos
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Início
                </a>
              </li>
              <li>
                <a href="#founders-pack" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Seja Fundador
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Diferenciais
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Legal
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/termos-de-uso" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/politica-de-privacidade" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/lgpd" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  LGPD
                </a>
              </li>
              <li>
                <a href="/contrato-de-prestacao" className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300"></span>
                  Contrato de Prestação
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6 relative inline-block">
              Contato
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="group flex items-start gap-3 hover:bg-gray-800 p-3 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gray-800 group-hover:bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <FiMail className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">Email</div>
                  <a href="mailto:contato@iservice.com.br" className="text-gray-300 hover:text-primary transition-colors font-medium">
                    contato@iservice.com.br
                  </a>
                </div>
              </li>
              <li className="group flex items-start gap-3 hover:bg-gray-800 p-3 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gray-800 group-hover:bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <FiPhone className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">Telefone</div>
                  <span className="text-gray-300 font-medium">(11) 99999-9999</span>
                </div>
              </li>
              <li className="group flex items-start gap-3 hover:bg-gray-800 p-3 rounded-lg transition-all duration-300">
                <div className="w-10 h-10 bg-gray-800 group-hover:bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <FiMapPin className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">Localização</div>
                  <span className="text-gray-300 font-medium">São Paulo, SP</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="section-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 font-medium">
              © {currentYear} <span className="text-white font-bold">Iservice</span>. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Desenvolvido com tecnologia de ponta para prestadores de serviço
            </p>
          </div>
        </div>
      </div>

      {/* LGPD Compliance Badge */}
      <div className="bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 border-t border-gray-800">
        <div className="section-container py-5">
          <div className="flex items-center justify-center gap-3 text-sm">
            <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300 font-medium">Plataforma 100% em conformidade com a LGPD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
