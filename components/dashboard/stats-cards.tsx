"use client"

import { Wallet, TrendingUp, TrendingDown, Activity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "إجمالي الرصيد",
    value: "$124,567.89",
    change: "+12.5%",
    isUp: true,
    icon: Wallet,
  },
  {
    title: "الأرباح اليوم",
    value: "$2,345.67",
    change: "+5.2%",
    isUp: true,
    icon: TrendingUp,
  },
  {
    title: "الخسائر اليوم",
    value: "$567.89",
    change: "-2.1%",
    isUp: false,
    icon: TrendingDown,
  },
  {
    title: "الصفقات النشطة",
    value: "12",
    change: "+3",
    isUp: true,
    icon: Activity,
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-border bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <stat.icon className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <p className={`text-xs ${stat.isUp ? "text-accent" : "text-destructive"}`}>
              {stat.change} من الأمس
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
