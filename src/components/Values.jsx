import React from 'react';
import {
  Shield,
  Heart,
  Clock,
  Users,
  BookOpen,
  Handshake,
  Award,
  Lock,
  Music
} from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Fidelidade Doutrinária",
      description: "Compromisso inabalável com a Doutrina do Daime em sua forma tradicional e original, conforme estabelecido pelo Mestre Raimundo Irineu Serra até 1971."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Amor e Fraternidade",
      description: "A prática do amor a Deus sobre todas as coisas e ao próximo como a si mesmo, pelo reconhecimento da paternidade única de Deus e da Fraternidade Universal entre os homens."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Disciplina e Ordem",
      description: "A observância rigorosa das normas e o respeito às hierarquias. A não mistura do Daime com qualquer outra substância alteradora da consciência."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Humildade e Respeito",
      description: "A valorização da humildade como virtude essencial e o respeito às diferenças individuais, evitando fanatismos e preconceitos."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Busca do Autoconhecimento",
      description: "O incentivo constante ao estudo, à meditação e à introspecção para o aperfeiçoamento da personalidade e ao autoconhecimento."
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Harmonia e União",
      description: "A promoção de um ambiente de paz, alegria, sinceridade e amizade, onde a irmandade se fortalece pela cooperação mútua."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Integridade e Probidade",
      description: "A conduta completa e prova em todas as esferas, mantendo a honra e a dignidade da Doutrina tanto no Centro quanto na sociedade."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Descrição e Zelo",
      description: "A descrição ao falar sobre a Doutrina e o zelo pela imagem e pelos assuntos internos do Centro, garantindo a proteção de nossos trabalhos."
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Gratidão e Louvor",
      description: "O reconhecimento e a celebração das exceções divinas, expressos através do canto, da alegria e da reverência ao Divino."
    }
  ];

  return (
    <section id="valores" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 ciclu-text-gradient">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Os valores que norteiam as ações e a conduta do CICLU DF são a base de nossa 
              irmandade e refletem os ensinamentos do Mestre Raimundo Irineu Serra.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl ciclu-shadow ciclu-hover-lift group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <div className="text-primary group-hover:text-white transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Values Statement */}
          <div className="bg-card rounded-2xl p-8 md:p-12 ciclu-shadow">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Nossa Bússola Espiritual
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Esses valores são a bússola que guia o CICLU DF em sua jornada espiritual e administrativa, 
                assegurando que a essência da Doutrina do Daime seja cultivada e transmitida às futuras gerações 
                com fidelidade, amor e dedicação.
              </p>
              
              <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">1971</div>
                  <p className="text-sm text-muted-foreground">
                    Ano limite dos ensinamentos originais do Mestre Irineu
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-secondary mb-2">9</div>
                  <p className="text-sm text-muted-foreground">
                    Valores fundamentais que guiam nossa conduta
                  </p>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">∞</div>
                  <p className="text-sm text-muted-foreground">
                    Compromisso eterno com a tradição e os ensinamentos
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

export default Values;


