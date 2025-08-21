import React from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      number: '150+',
      label: 'Projetos Entregues',
      color: '#3a8f94'
    },
    {
      icon: Users,
      number: '85+',
      label: 'Clientes Atendidos',
      color: '#f27d13'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Satisfação',
      color: '#80deac'
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Anos de Experiência',
      color: '#ee5242'
    }
  ];

  return (
    <section className="py-16 bg-[#f7eccf]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${stat.color}20`, border: `2px solid ${stat.color}` }}
              >
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#023047] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}