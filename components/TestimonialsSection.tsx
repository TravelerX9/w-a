'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Andi',
    age: 35,
    testimonial: 'Sejak rutin minum Alkaline Water, saya merasa lebih bertenaga dan jarang sakit.',
    rating: 5,
  },
  {
    name: 'Sinta',
    age: 28,
    testimonial: 'Kulit saya lebih segar dan pencernaan lebih lancar. Ini benar-benar mengubah hidup saya!',
    rating: 5,
  },
  {
    name: 'Budi',
    age: 42,
    testimonial: 'Air ini benar-benar membuat hidup saya lebih sehat dan produktif. Saya merekomendasikan untuk semua!',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Testimoni Pengguna
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-balance">
            Dengarkan langsung dari pelanggan kami yang telah merasakan manfaat Alkaline Water
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg rounded-xl bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-lg font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.age} tahun</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
