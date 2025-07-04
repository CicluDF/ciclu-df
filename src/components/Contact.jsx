import React from 'react';
import { MapPin, Phone, Mail, Clock, Users, Calendar } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localização e Contato",
      content: "Rota do Cavalo, Sobradinho/DF",
      link: "https://g.co/kgs/zTYcrZR",
      linkText: "Ver no Google Maps",
      phone: "(61) 99966-4491",
      email: "cicludf@gmail.com"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horários de Funcionamento",
      content: "Concentrações: dias 15 e 30 de cada mês",
      subtitle: "Hinários oficiais conforme calendário",
      extra: "Outras atividades conforme divulgação interna"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Como Participar",
      content: "Para conhecer nossa irmandade e participar de nossos trabalhos, é necessário passar por um processo de apresentação e entrevista. Respeitamos a tradição e mantemos um ambiente acolhedor para todos que buscam a luz da Doutrina.",
      requirements: [
        "Participação em reunião prévia",
        "Preenchimento de ficha de visitante",
        "Compromisso com as normas da casa",
        "Respeito à tradição doutrinária"
      ]
    }
  ];

  const activities = [
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Concentrações",
      description: "Momentos sagrados de silêncio e introspecção"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Trabalhos Espirituais",
      description: "Cerimônias tradicionais da Doutrina do Daime"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Mutirões",
      description: "Atividades comunitárias de manutenção e confraternização"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 ciclu-text-gradient">
              Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Venha conhecer nossa comunidade e participar de nossa jornada espiritual. 
              Todos são bem-vindos em nosso espaço sagrado.
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl ciclu-shadow ciclu-hover-lift text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">
                    {info.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-card-foreground mb-3">
                  {info.title}
                </h3>
                <p className="text-muted-foreground mb-2">
                  {info.content}
                </p>
                {info.subtitle && (
                  <p className="text-sm text-muted-foreground">
                    {info.subtitle}
                  </p>
                )}
                {info.extra && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {info.extra}
                  </p>
                )}
                {info.link && (
                  <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm mt-2 block">
                    {info.linkText}
                  </a>
                )}
                {info.phone && (
                  <p className="text-muted-foreground text-sm mt-2">
                    Telefone: {info.phone}
                  </p>
                )}
                {info.email && (
                  <p className="text-muted-foreground text-sm mt-2">
                    E-mail: {info.email}
                  </p>
                )}
                {info.requirements && (
                  <ul className="text-left text-muted-foreground text-sm mt-4 space-y-1 list-disc list-inside">
                    {info.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Activities Section */}
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Nossas Atividades
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 p-3 rounded-lg inline-flex items-center justify-center mb-4">
                    <div className="text-primary">
                      {activity.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    {activity.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-card rounded-2xl p-8 md:p-12 ciclu-shadow">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Junte-se à Nossa Irmandade
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Se você sente o chamado para cultivar a Doutrina do Daime em sua forma tradicional, 
              venha conhecer nossa comunidade. Estamos aqui para acolhê-lo com amor e fraternidade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div 
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 ciclu-hover-lift inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                cicludf@gmail.com
              </div>
              <div 
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                (61) 99966-4491
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                "Venha com fé, venha com amor, venha com o coração aberto para receber a luz do Daime"
              </p>
              <p className="text-xs text-muted-foreground mt-2 italic">
                - Ensinamento da Doutrina
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


