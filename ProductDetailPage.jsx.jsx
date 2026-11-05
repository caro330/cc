import React, { useState } from 'react';

export default function ProductDetailPage({ productId }) {
  // 模拟商品详情图库数据
  const productImages = [
    '/assets/chanel-backpack-1.jpg',
    '/assets/chanel-backpack-2.jpg',
    '/assets/chanel-backpack-3.jpg',
    '/assets/chanel-backpack-4.jpg',
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="bg-[#352B23] min-h-screen text-[#EFECE6] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* 左侧图库展台 */}
        <div className="space-y-4">
          {/* 主图区 */}
          <div className="w-full aspect-square bg-[#EFECE6] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={productImages[activeImageIndex]}
              alt="Product Main Detail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 下方 4 张缩略图切换 */}
          <div className="grid grid-cols-4 gap-3">
            {productImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`cursor-pointer aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  activeImageIndex === idx ? 'border-[#E5B883] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* 右侧商品详细信息 */}
        <div className="space-y-6 md:pt-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide">Product Title</h1>
            <h2 className="text-lg md:text-xl font-serif text-[#E5B883] mt-1">Brand</h2>
          </div>

          <div className="border-t border-[#4A3E34] pt-4">
            <p className="font-serif text-sm md:text-base leading-relaxed text-[#EFECE6]/80">
              Detailed Description:
              <br />
              This authentic luxury item has been carefully inspected for quality and provenance. Crafted with immaculate craftsmanship, presenting timeless elegance for modern collectors.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-3xl font-serif font-semibold text-[#EFECE6]">Price</p>
          </div>

          {/* Add to Bag 按钮 */}
          <div className="pt-2">
            <button className="w-full md:w-64 bg-[#EFECE6] text-[#352B23] font-serif font-medium py-3 rounded-full hover:bg-white transition-colors shadow-lg">
              Add to Bag
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}