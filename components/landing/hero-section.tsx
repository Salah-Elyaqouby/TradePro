"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Shield, Zap, Globe } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary">
              منصة التداول رقم 1 في المنطقة
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
            تداول{" "}
            <span className="text-primary">العملات الرقمية</span>
            <br />
            والأسهم بثقة
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground lg:text-xl">
            منصة تداول متكاملة توفر لك أدوات احترافية، رسوم بيانية متقدمة، 
            وتنفيذ سريع للصفقات مع أعلى معايير الأمان.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/register">
              <Button size="lg" className="h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                ابدأ التداول مجاناً
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base">
              <Play className="ml-2 h-5 w-5" />
              شاهد الفيديو التعريفي
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "$50B+", label: "حجم التداول اليومي" },
              { value: "2M+", label: "مستخدم نشط" },
              { value: "150+", label: "عملة متاحة" },
              { value: "99.9%", label: "وقت التشغيل" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary sm:text-3xl lg:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "أمان متقدم",
              description: "حماية متعددة الطبقات مع تخزين بارد للأصول",
            },
            {
              icon: Zap,
              title: "تنفيذ فوري",
              description: "تنفيذ الصفقات في أجزاء من الثانية",
            },
            {
              icon: Globe,
              title: "دعم عالمي",
              description: "دعم على مدار الساعة بلغات متعددة",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
