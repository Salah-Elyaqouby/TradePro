"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const sellOrders = [
  { price: 69250, amount: 0.234, total: 16204.5 },
  { price: 69200, amount: 0.567, total: 39236.4 },
  { price: 69150, amount: 0.123, total: 8505.45 },
  { price: 69120, amount: 0.456, total: 31518.72 },
  { price: 69100, amount: 0.789, total: 54519.9 },
]

const buyOrders = [
  { price: 69050, amount: 0.345, total: 23822.25 },
  { price: 69000, amount: 0.678, total: 46842 },
  { price: 68950, amount: 0.234, total: 16134.3 },
  { price: 68900, amount: 0.567, total: 39066.3 },
  { price: 68850, amount: 0.891, total: 61345.35 },
]

export function OrderBook() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          دفتر الأوامر
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Header */}
        <div className="mb-2 grid grid-cols-3 text-xs text-muted-foreground">
          <span>السعر (USDT)</span>
          <span className="text-center">الكمية (BTC)</span>
          <span className="text-left">الإجمالي</span>
        </div>

        {/* Sell orders */}
        <div className="space-y-1">
          {sellOrders.map((order, index) => (
            <div
              key={index}
              className="relative grid grid-cols-3 text-sm py-1"
            >
              <div
                className="absolute inset-0 bg-destructive/10"
                style={{ width: `${(order.amount / 0.9) * 100}%` }}
              />
              <span className="relative text-destructive">
                {order.price.toLocaleString()}
              </span>
              <span className="relative text-center text-foreground">
                {order.amount.toFixed(3)}
              </span>
              <span className="relative text-left text-muted-foreground">
                {order.total.toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        {/* Current price */}
        <div className="my-3 py-2 text-center border-y border-border">
          <span className="text-lg font-bold text-accent">$69,100.00</span>
        </div>

        {/* Buy orders */}
        <div className="space-y-1">
          {buyOrders.map((order, index) => (
            <div
              key={index}
              className="relative grid grid-cols-3 text-sm py-1"
            >
              <div
                className="absolute inset-0 bg-accent/10"
                style={{ width: `${(order.amount / 0.9) * 100}%` }}
              />
              <span className="relative text-accent">
                {order.price.toLocaleString()}
              </span>
              <span className="relative text-center text-foreground">
                {order.amount.toFixed(3)}
              </span>
              <span className="relative text-left text-muted-foreground">
                {order.total.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
