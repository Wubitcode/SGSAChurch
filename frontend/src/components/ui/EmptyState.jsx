import React from 'react';

const EmptyState = ({ title, description, icon }) => {
  return (
    <div className="text-center py-16 px-4 max-w-sm mx-auto space-y-2">
      <div className="text-3xl text-neutral-400 mb-2">{icon || '📂'}</div>
      <h3 className="text-sm font-bold text-neutral-800">{title}</h3>
      <p className="text-xs text-neutral-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default EmptyState;