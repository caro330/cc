import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'product' | 'detail'
  const [currentCurrency, setCurrentCurrency] = useState('MYR'); // 'MYR' | 'USD' | 'SGD'
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    if (pageId !== 'detail') {
      setSelectedProductId(null);
    }
  };

  const handleSelectProduct = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage('detail');
  };

  return (
    <div className="min-h-screen bg-[#352B23] font-serif antialiased text-[#EFECE6] relative">
      {/* 1. 顶部自适应导航栏 */}
      <Navbar
        activePage={currentPage === 'home' ? 'Home' : currentPage === 'product' ? 'Product' : 'Product Detail'}
        onNavigate={handleNavigate}
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
      />

      {/* 2. 页面视图切换 */}
      <main>
        {currentPage === 'home' && (
          <HomePage onShopNow={() => handleNavigate('product')} />
        )}
        
        {currentPage === 'product' && (
          <ProductListPage
            currentCurrency={currentCurrency}
            onSelectProduct={handleSelectProduct}
          />
        )}
        
        {currentPage === 'detail' && (
          <ProductDetailPage
            productId={selectedProductId}
            currentCurrency={currentCurrency}
          />
        )}
      </main>

      {/* 3. 全局可随意拖拽的 WhatsApp 悬浮按钮 */}
      <WhatsAppButton />
    </div>
  );
}
