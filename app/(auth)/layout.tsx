import Link from "next/link"
import { TrendingUp } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <TrendingUp className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">TradePro</span>
        </Link>
      </header>

      {/* Main content */}
      <div className="flex min-h-screen">
        {/* Left side - Form */}
        <div className="flex flex-1 flex-col justify-center px-6 py-24 lg:px-20">
          {children}
        </div>

        {/* Right side - Decorative */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:bg-card lg:border-r lg:border-border">
          <div className="max-w-md text-center px-8">
            <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
              <TrendingUp className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              ابدأ رحلتك في التداول
            </h2>
            <p className="mt-4 text-muted-foreground">
              انضم إلى أكثر من 2 مليون متداول يثقون بمنصتنا. تداول بأمان وسرعة مع أفضل الأدوات.
            </p>
            <div className="mt-8 flex justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$50B+</div>
                <div className="text-sm text-muted-foreground">حجم التداول</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">عملة متاحة</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">وقت التشغيل</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
