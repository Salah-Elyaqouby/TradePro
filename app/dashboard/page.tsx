"use client"

import { StatsCards } from "@/components/dashboard/stats-cards"
import { PriceChart } from "@/components/dashboard/price-chart"
import { TradingPanel } from "@/components/dashboard/trading-panel"
import { OrderBook } from "@/components/dashboard/order-book"
import { RecentTrades } from "@/components/dashboard/recent-trades"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">لوحة التحكم</h1>
        <p className="text-muted-foreground">مرحباً بعودتك! إليك نظرة عامة على حسابك.</p>
      </div>

      <StatsCards />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PriceChart />
        </div>
        <div>
          <TradingPanel />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <OrderBook />
        <RecentTrades />
      </div>
    </div>
  )
}
