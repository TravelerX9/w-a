'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Droplets, ChefHat, Sparkles } from 'lucide-react'

const usageGuides = [
  {
    title: 'Minum Setiap Hari',
    description: 'Minum 2–3 liter Alkaline Water setiap hari untuk mendapatkan manfaat optimal bagi kesehatan tubuh Anda.',
    icon: Droplets,
  },
  {
    title: 'Gunakan untuk Memasak',
    description: 'Gunakan untuk memasak agar nutrisi makanan lebih terjaga dan meningkatkan nilai gizi setiap hidangan.',
    icon: ChefHat,
  },
  {
    title: 'Gunakan untuk Perawatan Kulit',
    description: 'Gunakan Beauty Water untuk perawatan kulit wajah dan rambut demi kecantikan alami yang menawan.',
    icon: Sparkles,
  },
]

export default function UsageGuide() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Panduan Penggunaan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Maksimalkan manfaat Alkaline Water dengan mengikuti panduan penggunaan yang tepat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usageGuides.map((guide, index) => {
            const Icon = guide.icon
            return (
              <div key={index} className="flex flex-col gap-6">
                <Card className="border-0 shadow-lg rounded-xl h-full bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-center leading-relaxed">
                      {guide.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
