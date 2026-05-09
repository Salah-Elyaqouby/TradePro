"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "المبتدئ",
    price: "مجاني",
    description: "مثالي للبدء في عالم التداول",
    features: [
      "تداول حتى $10,000 شهرياً",
      "5 عملات رقمية",
      "رسوم بيانية أساسية",
      "دعم عبر البريد الإلكتروني",
    ],
    cta: "ابدأ مجاناً",
    popular: false,
  },
  {
    name: "المتداول",
    price: "$29",
    period: "/شهرياً",
    description: "للمتداولين النشطين",
    features: [
      "تداول غير محدود",
      "جميع العملات الرقمية",
      "رسوم بيانية متقدمة",
      "تنبيهات الأسعار",
      "API للتداول الآلي",
      "دعم أولوي",
    ],
    cta: "اشترك الآن",
    popular: true,
  },
  {
    name: "المحترف",
    price: "$99",
    period: "/شهرياً",
    description: "للمتداولين المحترفين",
    features: [
      "كل مميزات المتداول",
      "رسوم مخفضة 50%",
      "تقارير ضريبية",
      "حساب فرعي",
      "مدير حساب مخصص",
      "تدريب شخصي",
    ],
    cta: "تواصل معنا",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="border-t border-border bg-card/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            خطط تناسب احتياجاتك
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            اختر الخطة المناسبة لك وابدأ التداول اليوم
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-primary bg-card shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                  الأكثر شعبية
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/register" className="mt-8 block">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
