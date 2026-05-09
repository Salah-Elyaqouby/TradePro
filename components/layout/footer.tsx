import Link from "next/link"
import { TrendingUp } from "lucide-react"

const footerLinks = {
  المنتجات: [
    { name: "تداول العملات الرقمية", href: "/markets" },
    { name: "تداول الأسهم", href: "/markets" },
    { name: "المشتقات", href: "/markets" },
    { name: "التداول الآلي", href: "/dashboard" },
  ],
  الموارد: [
    { name: "مركز التعلم", href: "#" },
    { name: "التوثيق", href: "#" },
    { name: "API", href: "#" },
    { name: "الدعم", href: "#" },
  ],
  الشركة: [
    { name: "من نحن", href: "#" },
    { name: "الوظائف", href: "#" },
    { name: "الأخبار", href: "#" },
    { name: "تواصل معنا", href: "#" },
  ],
  قانوني: [
    { name: "سياسة الخصوصية", href: "#" },
    { name: "شروط الاستخدام", href: "#" },
    { name: "الامتثال", href: "#" },
    { name: "الأمان", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">TradePro</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              منصة التداول الرائدة للعملات الرقمية والأسهم. تداول بأمان وسرعة مع أفضل الأدوات.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 TradePro. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
