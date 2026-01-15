import React from 'react';
import { Allocation } from '../types';

interface StatCardProps {
  allocation: Allocation;
}

export const StatCard: React.FC<StatCardProps> = ({ allocation }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl bg-slate-800 border border-slate-700 group`}>
      <div className={`absolute top-0 left-0 w-1 h-full ${allocation.color}`}></div>
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">{allocation.label}</h3>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-slate-700/50 text-slate-300 mt-1 inline-block`}>
            {allocation.percentage}%
          </span>
        </div>
        <div className={`p-2 rounded-lg bg-slate-700/30 ${allocation.color.replace('bg-', 'text-')}`}>
           {/* Simple icon representation based on percentage logic could go here */}
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
           </svg>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-3xl font-bold text-white tracking-tight">
          {formatCurrency(allocation.value)}
        </p>
        <p className="text-slate-500 text-sm mt-1">
          {allocation.description}
        </p>
      </div>
      
      {/* Decorative gradient blob */}
      <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-10 blur-2xl ${allocation.color}`}></div>
    </div>
  );
};