import React from 'react';
import { Sun, Moon, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-green-800 text-white py-20 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">CICLU DF</h1>
        <p className="text-xl md:text-2xl mb-8">Centro de Iluminação Cristã Luz Universal do Distrito Federal</p>
        <p className="text-lg md:text-xl mb-8">Cultivando a Doutrina do Daime em sua forma tradicional e original, conforme estabelecida pelo Mestre Raimundo Irineu Serra até 1971</p>
        
        {/* Pai, Mãe, Filho Section */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="flex items-center space-x-1 text-yellow-300">
            <Sun className="h-6 w-6" />
            <span className="text-lg">Pai</span>
          </div>
          <div className="flex items-center space-x-1 text-blue-200">
            <Moon className="h-6 w-6" />
            <span className="text-lg">Mãe</span>
          </div>
          <div className="flex items-center space-x-1 text-white">
            <Star className="h-6 w-6" />
            <span className="text-lg">Filho</span>
          </div>
        </div>

        <a href="#contact" className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">Saiba Mais</a>
      </div>
    </section>
  );
};

export default Hero;


