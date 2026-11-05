// src/components/CurrencySelector.jsx
import React from 'react';

export default function CurrencySelector({ currentCurrency, onCurrencyChange }) {
  return (
    <select
      value={currentCurrency}
      onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
      className="bg-transparent text-[#EFECE6] border border-[#4A3E34] rounded px-2 py-1 font-serif text-xs md:text-sm focus:outline-none cursor-pointer"
    >
      <option value="MYR" className="bg-[#352B23]">MYR</option>
      <option value="USD" className="bg-[#352B23]">USD</option>
      <option value="SGD" className="bg-[#352B23]">SGD</option>
    </select>
  );
}