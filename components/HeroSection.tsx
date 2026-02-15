'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-blue-500 via-blue-400 to-teal-400">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                Alkaline Water – Hidup Sehat Dimulai dari Air yang Anda Minum
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-balance mb-8">
                Air alkali kaya antioksidan yang membantu menjaga kesehatan, mencegah penyakit, dan meningkatkan energi setiap hari.
              </p>
            </div>
            
            <div>
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Pesan Sekarang
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/water1.jpg"
                alt="Alkaline Water Machine"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
