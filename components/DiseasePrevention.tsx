'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Shield, Flame, Zap } from 'lucide-react'

const preventions = [
  {
    title: 'Menjaga Tekanan Darah Tetap Stabil',
    description: 'Alkaline water membantu mengatur keseimbangan elektrolit dan mengurangi tekanan darah tinggi.',
    icon: Heart,
  },
  {
    title: 'Mendukung Sistem Imun Tubuh',
    description: 'Memperkuat sistem kekebalan tubuh dengan antioksidan dan mineral penting.',
    icon: Shield,
  },
  {
    title: 'Menurunkan Risiko Gangguan Pencernaan',
    description: 'pH alkali membantu menyeimbangkan asam lambung dan melancarkan pencernaan.',
    icon: Flame,
  },
  {
    title: 'Membantu Metabolisme Lebih Lancar',
    description: 'Meningkatkan laju metabolisme tubuh untuk energi lebih dan pembakaran kalori optimal.',
    icon: Zap,
  },
]

export default function DiseasePrevention() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Pencegahan Penyakit
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-balance">
            Lindungi diri Anda dengan kekuatan air alkali yang telah terbukti memberikan manfaat kesehatan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {preventions.map((item, index) => {
            const Icon = item.icon
            return (
              <Card 
                key={index} 
                className="border-2 border-blue-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl bg-white hover:border-teal-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
