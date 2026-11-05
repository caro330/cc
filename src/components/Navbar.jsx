import React, { useState } from 'react';

export default function Navbar({ activePage = 'Home', onNavigate, currentCurrency, onCurrencyChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Product', id: 'product' },
    { name: 'About', id: 'about' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#352B23] border-b border-[#4A3E34] text-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* 移动端汉堡菜单按钮 */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#EFECE6] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <polygon points="12,8 20,16 4,16" />
              </svg>
            ) : (
              <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* 桌面端导航链接 */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate && onNavigate(item.id)}
              className={`text-base font-serif transition-colors ${
                activePage === item.name
                  ? 'text-[#E5B883] font-semibold underline underline-offset-8'
                  : 'text-[#EFECE6] hover:text-[#E5B883]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* 品牌 Logo */}
        <div className="text-center">
          <h1 className="text-3xl font-serif italic tracking-wider cursor-pointer" onClick={() => onNavigate && onNavigate('home')}>
            ccc
          </h1>
        </div>

        {/* 右侧：多货币切换器、Account & Bag */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* 独立货币切换下拉菜单 */}
          <select
            value={currentCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            className="bg-transparent text-[#EFECE6] border border-[#4A3E34] rounded px-2 py-1 font-serif text-xs md:text-sm focus:outline-none cursor-pointer"
          >
            <option value="MYR" className="bg-[#352B23]">MYR</option>
            <option value="USD" className="bg-[#352B23]">USD</option>
            <option value="SGD" className="bg-[#352B23]">SGD</option>
          </select>

          <button className="hidden md:inline-block text-base font-serif text-[#EFECE6] hover:text-[#E5B883]">
            Account
          </button>
          <button className="text-base font-serif text-[#EFECE6] hover:text-[#E5B883]">
            Bag (0)
          </button>
        </div>
      </div>

      {/* 移动端下拉菜单抽屉 */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2C231C] border-t border-[#4A3E34] px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setIsMenuOpen(false);
                onNavigate && onNavigate(item.id);
              }}
              className={`block w-full text-left text-lg font-serif py-1 ${
                activePage === item.name ? 'text-[#E5B883] font-bold' : 'text-[#EFECE6]'
              }`}
            >
              {item.name}
            </button>
          ))}
          <div className="pt-2 border-t border-[#4A3E34] flex justify-between items-center">
            <span className="font-serif text-sm text-[#EFECE6]/70">Currency</span>
            <select
              value={currentCurrency}
              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
              className="bg-[#352B23] text-[#EFECE6] border border-[#4A3E34] rounded px-2 py-1 font-serif text-sm focus:outline-none"
            >
              <option value="MYR">MYR</option>
              <option value="USD">USD</option>
              <option value="SGD">SGD</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
}
