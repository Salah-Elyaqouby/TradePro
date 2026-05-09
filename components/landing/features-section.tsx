"use client"

import { 
  LineChart, 
  Wallet, 
  Shield, 
  Smartphone, 
  BarChart3, 
  Users,
  Lock,
  Headphones
} from "lucide-react"

const features = [
  {
    icon: LineChart,
    title: "رسوم بيانية متقدمة",
    description: "أدوات تحليل فني احترافية مع أكثر من 100 مؤشر فني",
  },
  {
    icon: Wallet,
    title: "محفظة آمنة",
    description: "تخزين أصولك بأمان مع تشفير متعدد الطبقات",
  },
  {
    icon: Shield,
    title: "حماية الأصول",
    description: "تأمين شامل للأصول مع تخزين بارد",
  },
  {
    icon: Smartphone,
    title: "تطبيق الجوال",
    description: "تداول من أي مكان مع تطبيقنا للهواتف الذكية",
  },
  {
    icon: BarChart3,
    title: "تقارير مفصلة",
    description: "تحليلات وتقارير شاملة لأدائك",
  },
  {
    icon: Users,
    title: "نسخ التداول",
    description: "تابع وانسخ صفقات أفضل المتداولين",
  },
  {
    icon: Lock,
    title: "المصادقة الثنائية",
    description: "طبقة إضافية من الحماية لحسابك",
  },
  {
    icon: Headphones,
    title: "دعم متواصل",
    description: "فريق دعم متخصص على مدار الساعة",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            كل ما تحتاجه للتداول الناجح
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            أدوات وميزات احترافية صممت لتمنحك أفضل تجربة تداول
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
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
