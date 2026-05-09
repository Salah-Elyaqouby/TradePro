"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function TradingPanel() {
  const [orderType, setOrderType] = useState<"buy" | "sell">("buy")
  const [tradeType, setTradeType] = useState<"market" | "limit">("market")

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          تنفيذ صفقة
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Buy/Sell Toggle */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant={orderType === "buy" ? "default" : "outline"}
            onClick={() => setOrderType("buy")}
            className={orderType === "buy" ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
          >
            شراء
          </Button>
          <Button
            variant={orderType === "sell" ? "default" : "outline"}
            onClick={() => setOrderType("sell")}
            className={orderType === "sell" ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : ""}
          >
            بيع
          </Button>
        </div>

        {/* Market/Limit Toggle */}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTradeType("market")}
            className={tradeType === "market" ? "bg-secondary text-foreground" : "text-muted-foreground"}
          >
            سوق
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTradeType("limit")}
            className={tradeType === "limit" ? "bg-secondary text-foreground" : "text-muted-foreground"}
          >
            محدد
          </Button>
        </div>

        {/* Price Input (only for limit orders) */}
        {tradeType === "limit" && (
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground">السعر (USDT)</Label>
            <Input
              type="number"
              placeholder="0.00"
              className="bg-secondary border-0"
            />
          </div>
        )}

        {/* Amount Input */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">الكمية (BTC)</Label>
          <Input
            type="number"
            placeholder="0.00"
            className="bg-secondary border-0"
          />
        </div>

        {/* Quick percentages */}
        <div className="flex gap-2">
          {["25%", "50%", "75%", "100%"].map((pct) => (
            <Button
              key={pct}
              variant="outline"
              size="sm"
              className="flex-1 text-xs"
            >
              {pct}
            </Button>
          ))}
        </div>

        {/* Total */}
        <div className="space-y-2">
          <Label className="text-sm text-muted-foreground">الإجمالي (USDT)</Label>
          <Input
            type="number"
            placeholder="0.00"
            className="bg-secondary border-0"
            readOnly
          />
        </div>

        {/* Available balance */}
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">الرصيد المتاح:</span>
          <span className="text-foreground">12,345.67 USDT</span>
        </div>

        {/* Submit button */}
        <Button
          className={`w-full ${
            orderType === "buy"
              ? "bg-accent text-accent-foreground hover:bg-accent/90"
              : "bg-destructive text-destructive-foreground hover:bg-destructive/90"
          }`}
        >
          {orderType === "buy" ? "شراء BTC" : "بيع BTC"}
        </Button>
      </CardContent>
    </Card>
  )
}
