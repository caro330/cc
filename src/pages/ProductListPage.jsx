import React, { useState } from 'react';

export default function ProductListPage({ onSelectProduct }) {
  const [activeFilter, setActiveFilter] = useState('All Item');
  const [currentPage, setCurrentPage] = useState(1);

  // 模拟商品静态数据（后续对接 Supabase 独立多货币价格）
  const mockProducts = [
    { id: '1', title: 'Product Name', brand: 'Brand', price: 'Price', category: 'Watches', image: '/assets/slide-watch.jpg' },
    { id: '2', title: 'Product Name', brand: 'Brand', price: 'Price', category: 'Watches', image: '/assets/rolex-watch.jpg' },
    { id: '3', title: 'Product Name', brand: 'Brand', price: 'Price', category: 'Handbags', image: '/assets/chanel-black.jpg' },
    { id: '4', title: 'Product Name', brand: 'Brand', price: 'Price', category: 'Handbags', image: '/assets/hermes-mini.jpg' },
    { id: '5', title: 'Product Name', brand: 'Brand', price: 'Price', category: 'Handbags', image: '/assets/hermes-[#352B23].jpg' },
    { id: '6', title: 'Product Name', brand: 'Brand', price: 'Price', category: 'Handbags', image: '/assets/slide-bag-lv.jpg' },
  ];

  const filteredProducts = activeFilter === 'All Item' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#352B23] min-h-screen text-[#EFECE6] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* 顶部分类筛选栏 Filter */}
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
          <span className="font-serif text-lg text-[#EFECE6] font-medium">Filter</span>
          <div className="bg-[#EFECE6]/90 rounded-full px-6 py-2 flex items-center space-x-6 text-[#352B23] font-serif text-sm">
            {['All Item', 'Handbags', 'Watches'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`transition-all ${
                  activeFilter === cat ? 'font-bold underline underline-offset-4 decoration-2' : 'hover:opacity-75'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 产品网格展示区 (桌面端 3 列，移动端 2 列) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct && onSelectProduct(item.id)}
              className="bg-[#EFECE6] text-[#352B23] rounded-2xl p-4 flex flex-col items-center shadow-lg cursor-pointer hover:scale-[1.02] transition-transform"
            >
              {/* 商品图方框容器 */}
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 品牌与商品名 */}
              <div className="text-center mb-3">
                <p className="font-serif text-sm md:text-base font-semibold">{item.brand}</p>
                <p className="font-serif text-xs md:text-sm text-gray-700">{item.title}</p>
              </div>

              {/* 独立价格胶囊按钮 */}
              <div className="w-full bg-[#352B23] text-[#EFECE6] font-serif text-center py-2 rounded-full text-xs md:text-sm">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        {/* 底部翻页器 */}
        <div className="flex justify-center pt-6">
          <div className="bg-[#EFECE6]/90 rounded-full px-6 py-2 flex items-center space-x-4 text-[#352B23] font-serif text-sm">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  currentPage === page ? 'bg-[#352B23]/20 font-bold' : 'hover:bg-[#352B23]/10'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
