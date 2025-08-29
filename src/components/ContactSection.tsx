import { useState } from 'react';
import emailjs from 'emailjs-com';
// import { Contact } from './entities/Contact.json';
// import { SendEmail } from '../integrations/Core';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    tipo_projeto: '',
    descricao: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        'service_34crrw6', // substitua pelo seu serviceID
        'template_3x5napf', // substitua pelo seu templateID
        {
          nome: formData.nome,
          empresa: formData.empresa,
          email: formData.email,
          tipo_projeto: formData.tipo_projeto,
          descricao_projeto: formData.descricao,
        },
        'mtmZ4amUrv_PzGCcs' // substitua pelo seu userID
      );
      setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        nome: '',
        empresa: '',
        email: '',
        tipo_projeto: '',
        descricao: ''
      });
    } catch (error) {
      setSubmitMessage('Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.');
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'xotecode@gmail.com',
      color: '#3a8f94'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 88 9606-3098',
      color: '#f27d13'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Crateús, CE - Brasil',
      color: '#80deac'
    }
  ];

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-[#023047] to-[#0d1b2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos Conversar Sobre Sua Solução Tecnológica?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforme suas ideias em realidade. Entre em contato conosco e descubra 
            como podemos impulsionar o crescimento do seu negócio com tecnologia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Entre em Contato
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: `${info.color}20`, border: `1px solid ${info.color}` }}
                  >
                    <info.icon className="w-6 h-6" style={{ color: info.color }} />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    <div className="text-white font-semibold">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>Segunda a Sexta: 8h às 18h</div>
                <div>Sábado: 8h às 12h</div>
                <div>Resposta em até 24 horas</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => handleInputChange('nome', e.target.value)}
                    className="w-full"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <Input
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => handleInputChange('empresa', e.target.value)}
                    className="w-full"
                    placeholder="Nome da sua empresa"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Projeto *
                </label>
                <Select value={formData.tipo_projeto} onValueChange={(value) => handleInputChange('tipo_projeto', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o tipo de projeto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software_personalizado">Software Personalizado</SelectItem>
                    <SelectItem value="site_corporativo">Site Corporativo</SelectItem>
                    <SelectItem value="e_commerce">E-commerce</SelectItem>
                    <SelectItem value="landing_page">Landing Page</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Descrição do Projeto *
                </label>
                <Textarea
                  required
                  rows={4}
                  value={formData.descricao}
                  onChange={(e) => handleInputChange('descricao', e.target.value)}
                  className="w-full resize-none"
                  placeholder="Descreva detalhadamente seu projeto, objetivos e necessidades..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-white py-3 rounded-full font-semibold text-lg flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Solicitação
                  </>
                )}
              </Button>

              {submitMessage && (
                <div className={`text-center text-sm font-medium ${
                  submitMessage.includes('sucesso') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}