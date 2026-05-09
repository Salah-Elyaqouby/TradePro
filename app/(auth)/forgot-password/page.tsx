"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <div className="mx-auto w-full max-w-md text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">تحقق من بريدك</h1>
        <p className="mt-4 text-muted-foreground">
          لقد أرسلنا رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني. 
          يرجى التحقق من صندوق الوارد.
        </p>
        <Link href="/login">
          <Button className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
            العودة لتسجيل الدخول
            <ArrowRight className="mr-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="text-center lg:text-right">
        <h1 className="text-3xl font-bold text-foreground">استعادة كلمة المرور</h1>
        <p className="mt-2 text-muted-foreground">
          أدخل بريدك الإلكتروني وسنرسل لك رابط إعادة التعيين
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <div className="relative">
            <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="pr-10 bg-secondary border-0"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={isLoading}
        >
          {isLoading ? "جارِ الإرسال..." : "إرسال رابط الاستعادة"}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          تذكرت كلمة المرور؟{" "}
          <Link href="/login" className="text-primary hover:underline">
            تسجيل الدخول
          </Link>
        </p>
      </form>
    </div>
  )
}
