"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, HelpCircle, Zap } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    id: "free",
    name: "المبتدئ",
    price: { monthly: 0, yearly: 0 },
    description: "مثالي للبدء في عالم التداول",
    features: [
      "تداول حتى $10,000 شهرياً",
      "5 عملات رقمية",
      "رسوم بيانية أساسية",
      "دعم عبر البريد الإلكتروني",
      "تطبيق الجوال",
    ],
    limitations: [
      "رسوم تداول 0.5%",
      "بدون API للتداول الآلي",
      "بدون تنبيهات متقدمة",
    ],
    popular: false,
    cta: "ابدأ مجاناً",
  },
  {
    id: "trader",
    name: "المتداول",
    price: { monthly: 29, yearly: 290 },
    description: "للمتداولين النشطين",
    features: [
      "تداول غير محدود",
      "جميع العملات الرقمية",
      "رسوم بيانية متقدمة",
      "تنبيهات الأسعار غير محدودة",
      "API للتداول الآلي",
      "دعم أولوي 24/7",
      "تقارير الأداء",
      "نسخ التداول",
    ],
    limitations: [
      "رسوم تداول 0.25%",
    ],
    popular: true,
    cta: "اشترك الآن",
  },
  {
    id: "pro",
    name: "المحترف",
    price: { monthly: 99, yearly: 990 },
    description: "للمتداولين المحترفين والمؤسسات",
    features: [
      "كل مميزات المتداول",
      "رسوم تداول 0.1%",
      "تقارير ضريبية شاملة",
      "حسابات فرعية متعددة",
      "مدير حساب مخصص",
      "تدريب شخصي أسبوعي",
      "وصول مبكر للميزات الجديدة",
      "أولوية تنفيذ الصفقات",
      "دعم VIP",
    ],
    limitations: [],
    popular: false,
    cta: "تواصل معنا",
  },
]

const faqs = [
  {
    question: "هل يمكنني تغيير خطتي لاحقاً؟",
    answer: "نعم، يمكنك الترقية أو التخفيض في أي وقت. سيتم احتساب الفرق بشكل تناسبي.",
  },
  {
    question: "هل هناك فترة تجريبية مجانية؟",
    answer: "نعم، جميع الخطط المدفوعة تأتي مع فترة تجريبية مجانية لمدة 14 يوماً.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل بطاقات الائتمان، التحويل البنكي، والعملات الرقمية.",
  },
  {
    question: "هل يمكنني إلغاء اشتراكي؟",
    answer: "نعم، يمكنك إلغاء اشتراكك في أي وقت بدون أي رسوم إضافية.",
  },
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground lg:text-5xl">
              خطط تناسب احتياجاتك
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              اختر الخطة المناسبة لك. جميع الخطط تشمل الميزات الأساسية وتدعم العملات الرقمية والأسهم.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
              شهري
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className={`relative h-8 w-16 rounded-full transition-colors ${
                billingCycle === "yearly" ? "bg-primary" : "bg-secondary"
              }`}
            >
              <div
                className={`absolute top-1 h-6 w-6 rounded-full bg-white transition-transform ${
                  billingCycle === "yearly" ? "right-1" : "right-9"
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}`}>
              سنوي
              <span className="mr-1 text-accent">(وفر 20%)</span>
            </span>
          </div>

          {/* Plans */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`relative border p-2 ${
                  plan.popular
                    ? "border-primary bg-card shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-primary px-4 py-1">
                    <Zap className="h-4 w-4 text-primary-foreground" />
                    <span className="text-sm font-medium text-primary-foreground">الأكثر شعبية</span>
                  </div>
                )}

                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-foreground">
                      ${plan.price[billingCycle]}
                    </span>
                    {plan.price[billingCycle] > 0 && (
                      <span className="text-muted-foreground">
                        /{billingCycle === "monthly" ? "شهر" : "سنة"}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <Link href={plan.id === "free" ? "/register" : `/checkout/${plan.id}`}>
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

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-foreground">يشمل:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                            <Check className="h-3 w-3 text-accent" />
                          </div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div className="space-y-4 border-t border-border pt-4">
                      <p className="text-sm font-medium text-muted-foreground">ملاحظات:</p>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation) => (
                          <li key={limitation} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <HelpCircle className="h-4 w-4" />
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold text-foreground">مقارنة الخطط</h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">الميزة</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-foreground">المبتدئ</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-primary">المتداول</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-foreground">المحترف</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "رسوم التداول", free: "0.5%", trader: "0.25%", pro: "0.1%" },
                    { feature: "حد التداول الشهري", free: "$10,000", trader: "غير محدود", pro: "غير محدود" },
                    { feature: "عدد العملات", free: "5", trader: "جميعها", pro: "جميعها" },
                    { feature: "API للتداول الآلي", free: false, trader: true, pro: true },
                    { feature: "تنبيهات الأسعار", free: "5", trader: "غير محدود", pro: "غير محدود" },
                    { feature: "نسخ التداول", free: false, trader: true, pro: true },
                    { feature: "تقارير ضريبية", free: false, trader: false, pro: true },
                    { feature: "مدير حساب مخصص", free: false, trader: false, pro: true },
                    { feature: "الدعم", free: "بريد", trader: "24/7", pro: "VIP" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="px-6 py-4 text-sm text-foreground">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground">
                        {typeof row.free === "boolean" ? (
                          row.free ? (
                            <Check className="mx-auto h-5 w-5 text-accent" />
                          ) : (
                            <span className="text-muted-foreground/50">-</span>
                          )
                        ) : (
                          row.free
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-foreground">
                        {typeof row.trader === "boolean" ? (
                          row.trader ? (
                            <Check className="mx-auto h-5 w-5 text-accent" />
                          ) : (
                            <span className="text-muted-foreground/50">-</span>
                          )
                        ) : (
                          row.trader
                        )}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-foreground">
                        {typeof row.pro === "boolean" ? (
                          row.pro ? (
                            <Check className="mx-auto h-5 w-5 text-accent" />
                          ) : (
                            <span className="text-muted-foreground/50">-</span>
                          )
                        ) : (
                          row.pro
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQs */}
          <div className="mt-20">
            <h2 className="text-center text-2xl font-bold text-foreground">الأسئلة الشائعة</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-foreground">{faq.question}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
