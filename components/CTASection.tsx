'use client'

import { Button } from '@/components/ui/button'

export default function CTASection() {
  return (
    <section className="min-h-96 flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-teal-400 via-blue-400 to-blue-500">
      {/* Background overlay */}
      <div className="absolute inset-0 opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance">
            Mulai Hidup Sehat Hari Ini
          </h2>
          
          <p className="text-lg sm:text-xl text-white/95 leading-relaxed mb-10 text-balance">
            Dapatkan mesin Alkaline Water sekarang dan rasakan manfaatnya untuk Anda dan keluarga. Investasi terbaik untuk kesehatan jangka panjang Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:text-white hover:bg-blue-600 font-bold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Pesan Sekarang
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:text-blue-500 hover:bg-white hover:border-blue-500 font-bold px-8 py-6 text-lg rounded-full"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
