'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DropletIcon, ShieldIcon, Zap, Scale } from 'lucide-react'
import { benefits } from '@/lib/benefits'

export default function BenefitsSection() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Manfaat Utama Alkaline Water
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Rasakan transformasi kesehatan dengan manfaat luar biasa dari air alkali berkualitas tinggi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50"
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center leading-relaxed text-sm">
                    {benefit.description}
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
