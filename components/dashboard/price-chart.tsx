"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { time: "00:00", price: 67000 },
  { time: "04:00", price: 67500 },
  { time: "08:00", price: 66800 },
  { time: "12:00", price: 68200 },
  { time: "16:00", price: 67900 },
  { time: "20:00", price: 68500 },
  { time: "24:00", price: 69100 },
]

const timeframes = ["1س", "4س", "1ي", "1أ", "1ش"]

export function PriceChart() {
  return (
    <Card className="border-border bg-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold text-foreground">
            BTC/USDT
          </CardTitle>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold text-foreground">$69,100.00</span>
            <span className="text-sm text-accent">+3.13%</span>
          </div>
        </div>
        <div className="flex gap-1">
          {timeframes.map((tf) => (
            <Button
              key={tf}
              variant="ghost"
              size="sm"
              className="text-xs text-muted-foreground hover:text-foreground hover:bg-secondary"
            >
              {tf}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="oklch(0.75 0.15 145)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="oklch(0.75 0.15 145)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.01 250)" />
              <XAxis 
                dataKey="time" 
                stroke="oklch(0.65 0 0)" 
                fontSize={12}
              />
              <YAxis 
                stroke="oklch(0.65 0 0)" 
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "oklch(0.17 0.01 250)",
                  border: "1px solid oklch(0.28 0.01 250)",
                  borderRadius: "8px",
                  color: "oklch(0.98 0 0)",
                }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="oklch(0.75 0.15 145)"
                strokeWidth={2}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
