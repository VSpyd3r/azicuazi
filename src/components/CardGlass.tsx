import React from 'react';

interface GlassyCardProps {
  title?: string;
  content?: string;
  status?: string; 
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

const GlassyCard: React.FC<GlassyCardProps> = ({
  title = 'Titlu implicit',
  content = 'Livrat in data de',
  status = 'Livrat',
  width = 'w-full',
  height = 'h-auto',
  children
}) => {
  return (
    <div className={`mx-auto w-sm mb-4 mt-4 backdrop-blur-xl bg-white/10 backdrop-opacity-30 border border-amber-300/10 shadow-lg shadow-amber-300/30 rounded-4xl p-6 ${width} ${height}`}>
      <div className="text-amber-300">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-white/80 mb-4">{content}</p>
        <p className="text-amber-300/80 mb-4">{status}</p>
        {children}
      </div>
    </div>
  );
};

export default GlassyCard;