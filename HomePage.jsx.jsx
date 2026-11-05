import React, { useState } from 'react';

export default function HomePage({ onShopNow }) {
  // 你上传的 3 张轮播图片
  const slides = [
    {
      id: 1,
      image: '/assets/slide-bag-lv.jpg', // 换成真实图片路径
      alt: 'LV Bucket Bag'
    },
    {
      id: 2,
      image: '/assets/slide-watch.jpg',
      alt: 'Luxury Watch'
    },
    {
      id: 3,
      image: '/assets/slide-bag-chanel.jpg',
      alt: 'Chanel Handbag'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#352B23] min-h-screen text-[#EFECE6] pb-16">
      {/* 1. Hero 沉浸式大图区域 */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px] md:h-[520px]">
          {/* 背景大图 */}
          <img
            src="/assets/hero-banner.jpg"
            alt="Luxury Loved Again Hero"
            className="w-full h-full object-cover object-center"
          />

          {/* 毛玻璃蒙层卡片 (Figma 设计图标准) */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center max-w-lg border border-white/10 shadow-xl">
              <h2 className="text-3xl md:text-5xl font-serif italic mb-4 leading-tight">
                Luxury<br />Loved Again
              </h2>
              <button
                onClick={onShopNow}
                className="mt-4 px-8 py-3 bg-[#EFECE6] text-[#352B23] font-serif font-medium rounded-md hover:bg-white transition-colors shadow-md"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 特色产品轮播展台 (3 张图片左右切换) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="relative flex items-center justify-center">
          
          {/* 左切换按钮 < */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 z-10 w-12 h-12 bg-[#EFECE6]/80 hover:bg-[#EFECE6] text-[#352B23] rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95"
            aria-label="Previous Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 轮播图片卡片容器 */}
          <div className="w-full max-w-md md:max-w-lg rounded-xl overflow-hidden shadow-2xl bg-[#EFECE6] p-2 border border-[#4A3E34]">
            <div className="relative aspect-square w-full rounded-lg overflow-hidden">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              />
            </div>
          </div>

          {/* 右切换按钮 > */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 z-10 w-12 h-12 bg-[#EFECE6]/80 hover:bg-[#EFECE6] text-[#352B23] rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95"
            aria-label="Next Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 底部指示圆点 */}
        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-[#E5B883] w-6' : 'bg-[#EFECE6]/40'
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}