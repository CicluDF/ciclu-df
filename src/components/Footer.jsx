import React from 'react';
import { Heart, Star, Sun, Moon } from 'lucide-react';
import logo from '../assets/logo_ciclu_df_geometric_suggestion.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={logo} 
                  alt="CICLU DF Logo" 
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold">CICLU DF</h3>
                  <p className="text-sm text-white/80">Centro de Iluminação Cristã</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Cultivando a Doutrina do Daime em sua forma tradicional e original, 
                conforme estabelecida pelo Mestre Raimundo Irineu Serra.
              </p>
              
              {/* Three Noble Sources */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-yellow-300">
                  <Sun className="h-5 w-5" />
                  <span className="text-sm">Pai</span>
                </div>
                <div className="flex items-center space-x-1 text-blue-200">
                  <Moon className="h-5 w-5" />
                  <span className="text-sm">Mãe</span>
                </div>
                <div className="flex items-center space-x-1 text-white">
                  <Star className="h-5 w-5" />
                  <span className="text-sm">Filho</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-6">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#inicio" className="text-white/80 hover:text-white transition-colors duration-200">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-white/80 hover:text-white transition-colors duration-200">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#missao" className="text-white/80 hover:text-white transition-colors duration-200">
                    Missão e Visão
                  </a>
                </li>
                <li>
                  <a href="#valores" className="text-white/80 hover:text-white transition-colors duration-200">
                    Nossos Valores
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-white/80 hover:text-white transition-colors duration-200">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-6">Localização</h4>
              <div className="space-y-3 text-white/80">
                <p className="text-sm leading-relaxed">
                  BR-330 KM 3.5<br />
                  FAZENDA SALVIA GLEBA 81<br />
                  NÚCLEO RURAL DOS PAMPAS<br />
                  LOTES 123 e 124<br />
                  SOBRADINHO, DF<br />
                  CEP 73.000-000
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8">
            {/* Values Banner */}
            <div className="text-center mb-8">
              <p className="text-white/90 text-sm leading-relaxed max-w-4xl mx-auto">
                "Fidelidade Doutrinária • Amor e Caridade • Disciplina e Ordem • Humildade e Respeito • 
                Busca do Autoconhecimento • Harmonia e União • Integridade e Probidade • Discrição e Zelo • Gratidão e Louvor"
              </p>
            </div>

            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-white/70">
                © {currentYear} CICLU DF - Centro de Iluminação Cristã Luz Universal do Distrito Federal. 
                Todos os direitos reservados.
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <span>Feito com</span>
                <Heart className="h-4 w-4 text-red-400" />
                <span>para nossa irmandade</span>
              </div>
            </div>

            {/* Spiritual Quote */}
            <div className="text-center mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 italic text-sm">
                "Vou seguindo, vou seguindo, Vamos ver se nós acerta.<br />
                O caminho de Jesus Cristo, Aonde andou com seus profetas"
              </p>
              <p className="text-white/60 text-xs mt-2">
                - Hino da Doutrina do Daime
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

