import React from 'react';

const Card = ({ title, subtitle, children, actions }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
      {(title || subtitle || actions) && (
        <div className="px-6 py-4 bg-neutral-50 border-b border-neutral-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            {title && <h3 className="text-sm font-bold text-neutral-800">{title}</h3>}
            {subtitle && <p className="text-xs text-neutral-400">{subtitle}</p>}
          </div>
          {actions && <div className="flex gap-2 w-full sm:w-auto">{actions}</div>}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Card;