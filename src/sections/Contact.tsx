import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Appointment {
  date: string;
  time: string;
  name: string;
}

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookedAppointments, setBookedAppointments] = useState<Appointment[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  // Horários disponíveis
  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Carregar consultas marcadas do localStorage
  useEffect(() => {
    const saved = localStorage.getItem('upconcept_appointments');
    if (saved) {
      setBookedAppointments(JSON.parse(saved));
    }
  }, []);

  // Salvar consultas no localStorage
  const saveAppointment = (appointment: Appointment) => {
    const updated = [...bookedAppointments, appointment];
    setBookedAppointments(updated);
    localStorage.setItem('upconcept_appointments', JSON.stringify(updated));
  };

  // Verificar se um horário está disponível
  const isTimeAvailable = (date: Date, time: string) => {
    const dateStr = date.toISOString().split('T')[0];
    return !bookedAppointments.some(
      (apt) => apt.date === dateStr && apt.time === time
    );
  };

  // Gerar dias do calendário
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days: (number | null)[] = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  // Navegar entre meses
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Selecionar data
  const handleDateSelect = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selected >= today) {
      setSelectedDate(selected);
      setSelectedTime('');
    }
  };

  // Confirmar marcação
  const handleBookingConfirm = () => {
    if (selectedDate && selectedTime) {
      const dateStr = selectedDate.toISOString().split('T')[0];
      saveAppointment({
        date: dateStr,
        time: selectedTime,
        name: formData.name || 'Paciente',
      });
      setShowBookingModal(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      saveAppointment({
        date: selectedDate.toISOString().split('T')[0],
        time: selectedTime,
        name: formData.name,
      });
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setSelectedDate(null);
      setSelectedTime('');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Morada',
      content: 'Lugar dos 4 Caminhos, Loja 1, C.C. E.LECLERC, 3080-510 Figueira da Foz',
      link: 'https://maps.google.com/?q=Lugar+dos+4+Caminhos+Loja+1+C.C.+E.LECLERC+Figueira+da+Foz',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+351 233 109 109',
      link: 'tel:+351233109109',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'upclinic16@gmail.com',
      link: 'mailto:upclinic16@gmail.com',
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Segunda a Sábado: 9h00 - 20h00 | Domingos e Feriados: 10h00 - 19h00',
      link: null,
    },
  ];

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <section 
      id="contactos" 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 inline-block px-4 py-2 bg-up-light-bg text-up-teal rounded-full text-sm font-semibold mb-4">
            Contactos
          </span>
          <h2 className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-100 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entre em{' '}
            <span className="text-gradient">contacto</span>
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-6 transition-all duration-700 delay-200 text-lg text-gray-600">
            Estamos aqui para ajudar. Entre em contacto connosco para marcar 
            uma consulta ou esclarecer as suas dúvidas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-on-scroll opacity-0 -translate-x-6 transition-all duration-700 delay-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informações de Contacto
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-up-light-bg rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-up-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 hover:text-up-teal transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.788726872714!2d-8.860447684624!3d40.148388979397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2237c6c0f1f4b1%3A0x8e5a5c5c5c5c5c5c!2sE.Leclerc%20Figueira%20da%20Foz!5e0!3m2!1spt-PT!2spt!4v1600000000000!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Up Concept Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll opacity-0 translate-x-6 transition-all duration-700 delay-400">
            <div className="bg-up-cream rounded-2xl sm:rounded-3xl p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Marcar Consulta
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Consulta Marcada!
                  </h4>
                  <p className="text-gray-600">
                    {selectedDate && selectedTime && (
                      <>
                        Data: {selectedDate.toLocaleDateString('pt-PT')} às {selectedTime}<br />
                      </>
                    )}
                    Entraremos em contacto para confirmar.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="O seu nome"
                        className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-up-teal focus:ring-up-teal"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="o.seu@email.com"
                        className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-up-teal focus:ring-up-teal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+351 9XX XXX XXX"
                        className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-up-teal focus:ring-up-teal"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-up-teal focus:ring-up-teal bg-white"
                      >
                        <option value="">Selecione um serviço</option>
                        <optgroup label="Medicina Dentária">
                          <option value="dentista">Medicina Dentária Geral</option>
                          <option value="estetica">Estética Dental</option>
                          <option value="implante">Implantologia</option>
                          <option value="ortodontia">Ortodontia</option>
                          <option value="endodontia">Endodontia</option>
                          <option value="cirurgia">Cirurgia Oral</option>
                        </optgroup>
                        <optgroup label="Medicina e Bem-Estar">
                          <option value="geral">Medicina Geral</option>
                          <option value="analises">Análises Clínicas</option>
                          <option value="fala">Terapia da Fala</option>
                          <option value="fisioterapia">Fisioterapia</option>
                          <option value="nutricao">Nutrição</option>
                          <option value="pilates">Pilates</option>
                          <option value="pt">Personal Training</option>
                          <option value="palmilhas">Palmilhas Personalizadas</option>
                        </optgroup>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  {/* Seleção de Data e Hora */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Data e Hora da Consulta *
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowBookingModal(true)}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-left hover:border-up-teal transition-colors flex items-center justify-between gap-2"
                    >
                      <span className={selectedDate && selectedTime ? 'text-gray-900' : 'text-gray-400'}>
                        {selectedDate && selectedTime 
                          ? `${selectedDate.toLocaleDateString('pt-PT')} às ${selectedTime}`
                          : 'Clique para selecionar data e hora'
                        }
                      </span>
                      <Calendar className="w-5 h-5 text-up-teal flex-shrink-0" />
                    </button>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Deixe uma mensagem ou observação..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-up-teal focus:ring-up-teal resize-none text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!selectedDate || !selectedTime}
                    className="w-full bg-up-teal text-white hover:bg-up-teal-dark rounded-xl py-3 sm:py-4 text-sm sm:text-base font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Confirmar Marcação
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Ao enviar, concorda com o tratamento dos seus dados para efeitos de contacto.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Dialog open={showBookingModal} onOpenChange={setShowBookingModal}>
        <DialogContent className="max-w-[95vw] sm:max-w-md max-h-[90vh] overflow-y-auto p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl font-bold text-gray-900 flex items-center justify-between">
              Selecionar Data e Hora
              <button 
                onClick={() => setShowBookingModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Calendar */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4">
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <button 
                  onClick={prevMonth}
                  className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <span className="font-semibold text-gray-900 text-sm sm:text-base">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </span>
                <button 
                  onClick={nextMonth}
                  className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Week Days */}
              <div className="grid grid-cols-7 gap-1 mb-1 sm:mb-2">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-[10px] sm:text-xs font-medium text-gray-500 py-1.5 sm:py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Days */}
              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentMonth).map((day, index) => {
                  if (day === null) {
                    return <div key={index} className="h-8 sm:h-10" />;
                  }

                  const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                  const isToday = date.toDateString() === new Date().toDateString();
                  const isSelected = selectedDate?.toDateString() === date.toDateString();
                  const isPast = date < today;

                  return (
                    <button
                      key={index}
                      onClick={() => handleDateSelect(day)}
                      disabled={isPast}
                      className={`
                        h-8 sm:h-10 rounded-lg text-xs sm:text-sm font-medium transition-all
                        ${isSelected 
                          ? 'bg-up-teal text-white' 
                          : isToday 
                            ? 'bg-up-light-bg text-up-teal border-2 border-up-teal' 
                            : isPast 
                              ? 'text-gray-300 cursor-not-allowed' 
                              : 'hover:bg-gray-200 text-gray-700'
                        }
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots */}
            {selectedDate && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">
                  Horários disponíveis para {selectedDate.toLocaleDateString('pt-PT')}
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableTimes.map((time) => {
                    const isAvailable = isTimeAvailable(selectedDate, time);
                    const isSelected = selectedTime === time;

                    return (
                      <button
                        key={time}
                        onClick={() => isAvailable && setSelectedTime(time)}
                        disabled={!isAvailable}
                        className={`
                          py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-xs sm:text-sm font-medium transition-all
                          ${isSelected 
                            ? 'bg-up-teal text-white' 
                            : isAvailable 
                              ? 'bg-gray-100 text-gray-700 hover:bg-up-light-bg hover:text-up-teal' 
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed line-through'
                          }
                        `}
                      >
                        {time}
                        {!isAvailable && (
                          <span className="block text-[10px] sm:text-xs">(Ocupado)</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Confirm Button */}
            {selectedDate && selectedTime && (
              <div className="pt-4 border-t">
                <div className="mb-4 p-3 sm:p-4 bg-up-light-bg rounded-xl">
                  <p className="text-xs sm:text-sm text-gray-600">Consulta marcada para:</p>
                  <p className="text-base sm:text-lg font-bold text-up-teal">
                    {selectedDate.toLocaleDateString('pt-PT')} às {selectedTime}
                  </p>
                </div>
                <Button
                  onClick={handleBookingConfirm}
                  className="w-full bg-up-teal text-white hover:bg-up-teal-dark rounded-xl py-2.5 sm:py-3 text-sm sm:text-base"
                >
                  Confirmar Horário
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
