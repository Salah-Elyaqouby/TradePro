"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft, Download, Mail, TrendingUp } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TradePro</span>
          </Link>
        </div>
      </header>

      <main className="flex items-center justify-center py-20">
        <div className="mx-auto max-w-lg px-6 text-center">
          {/* Success Icon */}
          <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-accent/20">
            <CheckCircle className="h-12 w-12 text-accent" />
          </div>

          <h1 className="text-3xl font-bold text-foreground">تم الدفع بنجاح!</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            شكراً لاشتراكك في TradePro. تم تفعيل حسابك وأنت الآن جاهز للتداول.
          </p>

          {/* Order Details */}
          <Card className="mt-8 border-border bg-card">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-muted-foreground">رقم الطلب</span>
                  <span className="font-mono text-foreground">#TP-2024-78543</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-muted-foreground">الخطة</span>
                  <span className="text-foreground">المتداول - سنوي</span>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-muted-foreground">المبلغ المدفوع</span>
                  <span className="font-semibold text-foreground">$290.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">تاريخ التجديد</span>
                  <span className="text-foreground">9 مايو 2027</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 rounded-lg bg-secondary/50 p-4 text-right">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">تحقق من بريدك الإلكتروني</p>
                <p className="text-sm text-muted-foreground">
                  أرسلنا لك تفاصيل الفاتورة وإرشادات البدء
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-lg bg-secondary/50 p-4 text-right">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Download className="h-5 w-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">حمل تطبيق الجوال</p>
                <p className="text-sm text-muted-foreground">
                  تداول من أي مكان مع تطبيقنا المجاني
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                ابدأ التداول
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Download className="ml-2 h-5 w-5" />
              تحميل الفاتورة
            </Button>
          </div>

          {/* Support */}
          <p className="mt-8 text-sm text-muted-foreground">
            هل لديك أسئلة؟{" "}
            <Link href="#" className="text-primary hover:underline">
              تواصل مع الدعم
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
