"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const trades = [
  { id: 1, pair: "BTC/USDT", type: "buy", price: 69050, amount: 0.125, time: "منذ 2 دقيقة", profit: "+$145.50" },
  { id: 2, pair: "ETH/USDT", type: "sell", price: 3450, amount: 2.5, time: "منذ 5 دقائق", profit: "-$23.40" },
  { id: 3, pair: "SOL/USDT", type: "buy", price: 145.67, amount: 10, time: "منذ 12 دقيقة", profit: "+$67.80" },
  { id: 4, pair: "BNB/USDT", type: "sell", price: 567.89, amount: 3, time: "منذ 25 دقيقة", profit: "+$234.00" },
  { id: 5, pair: "XRP/USDT", type: "buy", price: 0.5678, amount: 1000, time: "منذ ساعة", profit: "-$12.30" },
]

export function RecentTrades() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          آخر الصفقات
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trades.map((trade) => (
            <div
              key={trade.id}
              className="flex items-center justify-between py-2 border-b border-border last:border-0"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    trade.type === "buy" ? "bg-accent/20" : "bg-destructive/20"
                  }`}
                >
                  {trade.type === "buy" ? (
                    <TrendingUp className="h-4 w-4 text-accent" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{trade.pair}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        trade.type === "buy"
                          ? "bg-accent/20 text-accent"
                          : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      {trade.type === "buy" ? "شراء" : "بيع"}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{trade.time}</span>
                </div>
              </div>
              <div className="text-left">
                <div className="font-medium text-foreground">
                  {trade.amount} @ ${trade.price}
                </div>
                <div
                  className={`text-sm ${
                    trade.profit.startsWith("+") ? "text-accent" : "text-destructive"
                  }`}
                >
                  {trade.profit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
