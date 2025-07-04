import React from 'react';
import { Target, Eye, Compass } from 'lucide-react';

const Mission = () => {
  return (
    <section id="missao" className="py-20 ciclu-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Missão e Visão
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Nossos propósitos fundamentais que guiam cada passo de nossa jornada espiritual
            </p>
          </div>

          {/* Mission, Vision, and Purpose Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center ciclu-hover-lift">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Missão</h3>
              <p className="text-white/90 leading-relaxed">
                Cultivar a Doutrina do Daime em sua forma TRADICIONAL e ORIGINAL, 
                conforme estabelecida até 1971 pelo Mestre Raimundo Irineu Serra, 
                buscando o aperfeiçoamento ético, moral e espiritual do ser humano.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center ciclu-hover-lift">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Visão</h3>
              <p className="text-white/90 leading-relaxed">
                Ser um farol de luz e sabedoria, reconhecida pela fidelidade à Doutrina 
                do Daime em sua essência tradicional, permitindo a transformação 
                individual e coletiva através do aperfeiçoamento de nossos valores,
                hábitos e consciência.
              </p>
            </div>

            {/* Purpose */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center ciclu-hover-lift">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Compass className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Propósito</h3>
              <p className="text-white/90 leading-relaxed">
                Estabelecer diariamente um ambiente de paz, alegria, harmonia e amizade, 
                acolhendo a todos que se identificam com os princípios cristãos e espirituais e buscam seguir a vida espírita (que é o reino da verdade).
              </p>
            </div>
          </div>

          {/* Detailed Mission Statement */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Nosso Compromisso
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-white/90 leading-relaxed mb-6 text-center">
                Através da prática ritualística e do estudo dos hinos, o CICLU DF busca
                o aperfeiçoamento ético, moral e espiritual do ser humano, pautado nos
                princípios de amor a Deus e ao próximo e na ética cristã.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Prática Espiritual
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    Mantemos viva a tradição através do cumprimento do calendário litúrgico, do estudo e execução dos hinos e das práticas cerimoniais que conectam os membros com o divino e permitem o aperfeiçoamento espiritual.
                  </p>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-3">
                    Ensinamentos Cristãos
                  </h4>
                  <p className="text-white/80 leading-relaxed">
                    Estamos fundamentados nas veredas da sagrada Doutrina e pela prática cristã, promovendo amor, humildade e respeito como pilares de nossa comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;


