"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, TrendingUp, TrendingDown, Star, Filter } from "lucide-react"
import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts"

const generateChartData = (trend: "up" | "down") => {
  const data = []
  let value = 100
  for (let i = 0; i < 20; i++) {
    value += trend === "up" ? Math.random() * 10 - 3 : Math.random() * 10 - 7
    data.push({ value: Math.max(value, 50) })
  }
  return data
}

const cryptoAssets = [
  { symbol: "BTC", name: "Bitcoin", price: 69234.50, change: 2.45, volume: "24.5B", marketCap: "1.36T", trend: "up" as const },
  { symbol: "ETH", name: "Ethereum", price: 3456.78, change: 1.23, volume: "12.3B", marketCap: "415B", trend: "up" as const },
  { symbol: "BNB", name: "BNB", price: 567.89, change: -0.87, volume: "1.8B", marketCap: "87B", trend: "down" as const },
  { symbol: "SOL", name: "Solana", price: 145.67, change: 5.67, volume: "3.2B", marketCap: "63B", trend: "up" as const },
  { symbol: "XRP", name: "Ripple", price: 0.5678, change: -1.23, volume: "2.1B", marketCap: "31B", trend: "down" as const },
  { symbol: "ADA", name: "Cardano", price: 0.4567, change: 0.89, volume: "890M", marketCap: "16B", trend: "up" as const },
  { symbol: "DOGE", name: "Dogecoin", price: 0.1234, change: 3.45, volume: "1.2B", marketCap: "17B", trend: "up" as const },
  { symbol: "DOT", name: "Polkadot", price: 7.89, change: -0.56, volume: "456M", marketCap: "10B", trend: "down" as const },
  { symbol: "AVAX", name: "Avalanche", price: 35.67, change: 4.12, volume: "678M", marketCap: "13B", trend: "up" as const },
  { symbol: "LINK", name: "Chainlink", price: 14.56, change: -2.34, volume: "345M", marketCap: "8.5B", trend: "down" as const },
]

const categories = ["الكل", "العملات الرقمية", "الأسهم", "الفوركس", "السلع"]

export default function MarketsPage() {
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [searchQuery, setSearchQuery] = useState("")
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (symbol: string) => {
    setFavorites((prev) =>
      prev.includes(symbol)
        ? prev.filter((s) => s !== symbol)
        : [...prev, symbol]
    )
  }

  const filteredAssets = cryptoAssets.filter((asset) =>
    asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">الأسواق</h1>
            <p className="mt-2 text-muted-foreground">
              اكتشف وتتبع أداء الأصول المختلفة في الوقت الفعلي
            </p>
          </div>

          {/* Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground">إجمالي القيمة السوقية</div>
                <div className="mt-1 text-2xl font-bold text-foreground">$2.45T</div>
                <div className="mt-1 text-sm text-accent">+2.3% (24س)</div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground">حجم التداول (24س)</div>
                <div className="mt-1 text-2xl font-bold text-foreground">$89.5B</div>
                <div className="mt-1 text-sm text-accent">+5.1%</div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground">هيمنة BTC</div>
                <div className="mt-1 text-2xl font-bold text-foreground">52.4%</div>
                <div className="mt-1 text-sm text-destructive">-0.3%</div>
              </CardContent>
            </Card>
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground">الأصول النشطة</div>
                <div className="mt-1 text-2xl font-bold text-foreground">2,456</div>
                <div className="mt-1 text-sm text-muted-foreground">عملة</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="ابحث عن عملة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 bg-secondary border-0"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Table */}
          <Card className="border-border bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
                      #
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
                      الاسم
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
                      السعر
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
                      التغير (24س)
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground hidden sm:table-cell">
                      حجم التداول
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground hidden md:table-cell">
                      القيمة السوقية
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground hidden lg:table-cell">
                      الرسم البياني (7أ)
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">
                      إجراء
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAssets.map((asset, index) => (
                    <tr
                      key={asset.symbol}
                      className="border-b border-border last:border-0 hover:bg-secondary/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => toggleFavorite(asset.symbol)}
                            className={`text-muted-foreground hover:text-primary ${
                              favorites.includes(asset.symbol) ? "text-primary" : ""
                            }`}
                          >
                            <Star
                              className="h-4 w-4"
                              fill={favorites.includes(asset.symbol) ? "currentColor" : "none"}
                            />
                          </button>
                          <span className="text-muted-foreground">{index + 1}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                            {asset.symbol.slice(0, 2)}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{asset.symbol}</div>
                            <div className="text-sm text-muted-foreground">{asset.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-foreground">
                          ${asset.price.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div
                          className={`flex items-center gap-1 ${
                            asset.change >= 0 ? "text-accent" : "text-destructive"
                          }`}
                        >
                          {asset.change >= 0 ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          <span>{Math.abs(asset.change)}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        <span className="text-muted-foreground">${asset.volume}</span>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <span className="text-muted-foreground">${asset.marketCap}</span>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <div className="h-10 w-24">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={generateChartData(asset.trend)}>
                              <Area
                                type="monotone"
                                dataKey="value"
                                stroke={asset.trend === "up" ? "oklch(0.75 0.15 145)" : "oklch(0.65 0.2 25)"}
                                fill={asset.trend === "up" ? "oklch(0.75 0.15 145 / 0.2)" : "oklch(0.65 0.2 25 / 0.2)"}
                                strokeWidth={1.5}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                          تداول
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
