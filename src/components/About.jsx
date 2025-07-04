import React from 'react';
import { Heart, Users, Star, Sun } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Amor e Fraternidade",
      description: "O reconhecimento pela paternidade única de Deus e a fraternidade universal dos homens"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Comunidade",
      description: "Uma irmandade unida pelos valores cristãos e pela busca espiritual"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Tradição",
      description: "Fidelidade à Doutrina do Daime conforme estabelecida pelo Mestre Irineu"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Luz Universal",
      description: "Promovendo a evolução espiritual e o autoconhecimento"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 ciclu-text-gradient">
              Sobre o CICLU DF
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              O Centro de Iluminação Cristã Luz Universal do Distrito Federal é uma instituição guiada pela fidelidade aos ensinos originais da Doutrina do Daime e que congrega uma irmandade cristã que busca a verdade na vida espiritual para alcançar a salvação eterna.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Nossa Essência
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos um farol de luz e sabedoria, reconhecidos pela fidelidade à Doutrina do Daime em sua essência tradicional e original, conforme o legado do nosso Mestre Império Juramidã.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos um centro de referência para a evolução e o autoconhecimento, promovendo a transformação individual e coletiva através da compreensão dos hinos, da obediência ao decreto de serviço e aos ensinamentos cristãos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vivemos um ambiente de paz, alegria, harmonia e amizade, acolhendo a todos que se identificam com nossos princípios.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl ciclu-shadow ciclu-hover-lift text-center"
                >
                  <div className="text-primary mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold mb-2 text-card-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* History Section */}
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Nossa História
            </h3>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A Doutrina do Daime foi estabelecida pelo Mestre Raimundo Irineu Serra, que recebeu os ensinamentos através de uma profunda revelação mariana. Guiado por essa manifestação divina ao longo de toda a sua vida, o Mestre dedicou-se a instituir e disseminar a sabedoria e as orientações que formam a base de nossa prática espiritual.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O CICLU DF tem como missão seguir fielmente esses preceitos e ensinamentos originais. Não reconhecemos qualquer outra prática ou revelação que não aquela estabelecida até o dia 06 de julho do ano de 1971. Nosso centro oferece um espaço seguro e acolhedor para a prática autêntica da Doutrina, promovendo o autoaperfeiçoamento e o crescimento espiritual de todos os irmãos que buscam a verdade e a luz em suas vidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


