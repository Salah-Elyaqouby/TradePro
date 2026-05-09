"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrendingUp, ArrowRight, Check, Lock, CreditCard, Building2, Bitcoin } from "lucide-react"

const plans = {
  trader: { name: "المتداول", price: 29, features: ["تداول غير محدود", "رسوم تداول 0.25%", "دعم 24/7"] },
  pro: { name: "المحترف", price: 99, features: ["كل مميزات المتداول", "رسوم تداول 0.1%", "مدير حساب مخصص"] },
}

type PlanKey = keyof typeof plans

export default function CheckoutPage() {
  const params = useParams()
  const router = useRouter()
  const planId = params.plan as PlanKey
  const plan = plans[planId] || plans.trader

  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank" | "crypto">("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const price = billingCycle === "yearly" ? plan.price * 10 : plan.price
  const discount = billingCycle === "yearly" ? plan.price * 2 : 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push("/checkout/success")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TradePro</span>
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" />
            دفع آمن ومشفر
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Payment Form */}
            <div className="lg:col-span-3">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-xl">معلومات الدفع</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Payment Method */}
                    <div className="space-y-3">
                      <Label>طريقة الدفع</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: "card", icon: CreditCard, label: "بطاقة" },
                          { id: "bank", icon: Building2, label: "تحويل بنكي" },
                          { id: "crypto", icon: Bitcoin, label: "عملات رقمية" },
                        ].map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setPaymentMethod(method.id as typeof paymentMethod)}
                            className={`flex flex-col items-center gap-2 rounded-lg border p-4 transition-colors ${
                              paymentMethod === method.id
                                ? "border-primary bg-primary/5"
                                : "border-border bg-secondary/30 hover:border-primary/50"
                            }`}
                          >
                            <method.icon className={`h-6 w-6 ${paymentMethod === method.id ? "text-primary" : "text-muted-foreground"}`} />
                            <span className={`text-sm ${paymentMethod === method.id ? "text-foreground" : "text-muted-foreground"}`}>
                              {method.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {paymentMethod === "card" && (
                      <>
                        {/* Card Number */}
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">رقم البطاقة</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="bg-secondary border-0"
                            required
                          />
                        </div>

                        {/* Card Details */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">تاريخ الانتهاء</Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              className="bg-secondary border-0"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              className="bg-secondary border-0"
                              required
                            />
                          </div>
                        </div>

                        {/* Cardholder Name */}
                        <div className="space-y-2">
                          <Label htmlFor="name">اسم صاحب البطاقة</Label>
                          <Input
                            id="name"
                            placeholder="الاسم كما هو مكتوب على البطاقة"
                            className="bg-secondary border-0"
                            required
                          />
                        </div>
                      </>
                    )}

                    {paymentMethod === "bank" && (
                      <div className="rounded-lg bg-secondary/50 p-6 text-center">
                        <Building2 className="mx-auto h-12 w-12 text-muted-foreground" />
                        <p className="mt-4 text-foreground">
                          سيتم إرسال تفاصيل التحويل البنكي إلى بريدك الإلكتروني بعد تأكيد الطلب.
                        </p>
                      </div>
                    )}

                    {paymentMethod === "crypto" && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>اختر العملة</Label>
                          <select className="w-full rounded-lg border-0 bg-secondary px-3 py-2 text-foreground">
                            <option>BTC - Bitcoin</option>
                            <option>ETH - Ethereum</option>
                            <option>USDT - Tether</option>
                          </select>
                        </div>
                        <div className="rounded-lg bg-secondary/50 p-6 text-center">
                          <Bitcoin className="mx-auto h-12 w-12 text-primary" />
                          <p className="mt-4 text-foreground">
                            سيتم عرض عنوان الدفع بعد تأكيد الطلب.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Billing Address */}
                    <div className="space-y-4 border-t border-border pt-6">
                      <h3 className="font-semibold text-foreground">عنوان الفاتورة</h3>
                      <div className="space-y-2">
                        <Label htmlFor="country">الدولة</Label>
                        <select className="w-full rounded-lg border-0 bg-secondary px-3 py-2 text-foreground">
                          <option>المملكة العربية السعودية</option>
                          <option>الإمارات العربية المتحدة</option>
                          <option>مصر</option>
                          <option>الأردن</option>
                          <option>الكويت</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">العنوان</Label>
                        <Input
                          id="address"
                          placeholder="شارع، مدينة"
                          className="bg-secondary border-0"
                        />
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="mt-1 h-4 w-4 rounded border-border bg-secondary"
                        required
                      />
                      <Label htmlFor="terms" className="text-sm text-muted-foreground">
                        أوافق على{" "}
                        <Link href="#" className="text-primary hover:underline">
                          شروط الاستخدام
                        </Link>{" "}
                        و{" "}
                        <Link href="#" className="text-primary hover:underline">
                          سياسة الإلغاء
                        </Link>
                      </Label>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        "جارِ المعالجة..."
                      ) : (
                        <>
                          إتمام الدفع - ${price}
                          <ArrowRight className="mr-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <Card className="border-border bg-card sticky top-6">
                <CardHeader>
                  <CardTitle className="text-lg">ملخص الطلب</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Plan */}
                  <div className="rounded-lg bg-secondary/50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">خطة {plan.name}</span>
                      <span className="text-primary">${plan.price}/شهر</span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Billing Cycle */}
                  <div className="space-y-2">
                    <Label>دورة الفوترة</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setBillingCycle("monthly")}
                        className={`rounded-lg border p-3 text-center transition-colors ${
                          billingCycle === "monthly"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="font-medium text-foreground">شهري</div>
                        <div className="text-sm text-muted-foreground">${plan.price}/شهر</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setBillingCycle("yearly")}
                        className={`relative rounded-lg border p-3 text-center transition-colors ${
                          billingCycle === "yearly"
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                          وفر 20%
                        </div>
                        <div className="font-medium text-foreground">سنوي</div>
                        <div className="text-sm text-muted-foreground">${plan.price * 10}/سنة</div>
                      </button>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="space-y-3 border-t border-border pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">السعر الأصلي</span>
                      <span className="text-foreground">${billingCycle === "yearly" ? plan.price * 12 : plan.price}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">الخصم السنوي</span>
                        <span className="text-accent">-${discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-t border-border pt-3">
                      <span className="font-semibold text-foreground">الإجمالي</span>
                      <span className="font-bold text-primary text-xl">${price}</span>
                    </div>
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-center gap-2 rounded-lg bg-accent/10 p-3 text-sm text-accent">
                    <Lock className="h-4 w-4" />
                    <span>جميع المعاملات مشفرة وآمنة</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
