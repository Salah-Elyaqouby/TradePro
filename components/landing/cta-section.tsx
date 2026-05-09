"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-accent/10 p-12 lg:p-20">
          {/* Background decoration */}
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              ابدأ رحلتك في التداول اليوم
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              انضم إلى أكثر من 2 مليون متداول يثقون بمنصتنا. سجل الآن واحصل على $100 رصيد ترحيبي.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                  إنشاء حساب مجاني
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/markets">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base">
                  استكشف الأسواق
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              بدون رسوم خفية • إلغاء في أي وقت • دعم على مدار الساعة
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
