"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Wallet,
  ArrowUpRight,
  ArrowDownLeft,
  RefreshCw,
  Eye,
  EyeOff,
  Copy,
  QrCode,
  TrendingUp,
  TrendingDown,
} from "lucide-react"
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

const assets = [
  { symbol: "BTC", name: "Bitcoin", balance: 1.2345, value: 85456.78, change: 2.45, color: "oklch(0.85 0.18 90)" },
  { symbol: "ETH", name: "Ethereum", balance: 15.678, value: 54234.56, change: 1.23, color: "oklch(0.75 0.15 145)" },
  { symbol: "USDT", name: "Tether", balance: 12500, value: 12500, change: 0, color: "oklch(0.7 0.15 200)" },
  { symbol: "SOL", name: "Solana", balance: 45.67, value: 6654.78, change: 5.67, color: "oklch(0.65 0.2 25)" },
  { symbol: "BNB", name: "BNB", balance: 8.9, value: 5054.34, change: -0.87, color: "oklch(0.8 0.12 60)" },
]

const portfolioHistory = [
  { date: "يناير", value: 120000 },
  { date: "فبراير", value: 135000 },
  { date: "مارس", value: 128000 },
  { date: "أبريل", value: 145000 },
  { date: "مايو", value: 155000 },
  { date: "يونيو", value: 163900 },
]

const transactions = [
  { id: 1, type: "deposit", asset: "BTC", amount: 0.5, value: 34500, date: "منذ ساعتين", status: "مكتمل" },
  { id: 2, type: "withdraw", asset: "ETH", amount: 2.0, value: 6900, date: "منذ 5 ساعات", status: "مكتمل" },
  { id: 3, type: "deposit", asset: "USDT", amount: 5000, value: 5000, date: "أمس", status: "مكتمل" },
  { id: 4, type: "withdraw", asset: "SOL", amount: 10, value: 1456, date: "منذ يومين", status: "معلق" },
]

export default function WalletPage() {
  const [showBalance, setShowBalance] = useState(true)
  const [activeTab, setActiveTab] = useState<"deposit" | "withdraw" | "transfer">("deposit")
  
  const totalBalance = assets.reduce((sum, asset) => sum + asset.value, 0)
  const pieData = assets.map((asset) => ({
    name: asset.symbol,
    value: asset.value,
    color: asset.color,
  }))

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">المحفظة</h1>
            <p className="mt-2 text-muted-foreground">
              إدارة أصولك وتتبع محفظتك الاستثمارية
            </p>
          </div>

          {/* Balance Overview */}
          <div className="mb-8 grid gap-6 lg:grid-cols-3">
            <Card className="border-border bg-card lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">إجمالي الرصيد</CardTitle>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {showBalance ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                </button>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-foreground">
                  {showBalance ? `$${totalBalance.toLocaleString()}` : "••••••••"}
                </div>
                <div className="mt-2 flex items-center gap-2 text-accent">
                  <TrendingUp className="h-4 w-4" />
                  <span>+$12,345.67 (8.2%) هذا الشهر</span>
                </div>
                
                {/* Quick Actions */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <Button
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => setActiveTab("deposit")}
                  >
                    <ArrowDownLeft className="ml-2 h-5 w-5" />
                    إيداع
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("withdraw")}
                  >
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                    سحب
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("transfer")}
                  >
                    <RefreshCw className="ml-2 h-5 w-5" />
                    تحويل
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Portfolio Distribution */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">توزيع المحفظة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  {assets.slice(0, 4).map((asset) => (
                    <div key={asset.symbol} className="flex items-center gap-1">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: asset.color }}
                      />
                      <span className="text-xs text-muted-foreground">{asset.symbol}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio History Chart */}
          <Card className="mb-8 border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">أداء المحفظة</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={portfolioHistory}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="oklch(0.75 0.15 145)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="oklch(0.75 0.15 145)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="oklch(0.65 0 0)" fontSize={12} />
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
                      formatter={(value: number) => [`$${value.toLocaleString()}`, "القيمة"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="oklch(0.75 0.15 145)"
                      strokeWidth={2}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Assets List */}
            <div className="lg:col-span-2">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">الأصول</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assets.map((asset) => (
                      <div
                        key={asset.symbol}
                        className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold"
                            style={{ backgroundColor: `${asset.color}20`, color: asset.color }}
                          >
                            {asset.symbol.slice(0, 2)}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{asset.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {asset.balance} {asset.symbol}
                            </div>
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-foreground">
                            ${asset.value.toLocaleString()}
                          </div>
                          <div
                            className={`flex items-center gap-1 text-sm ${
                              asset.change >= 0 ? "text-accent" : "text-destructive"
                            }`}
                          >
                            {asset.change >= 0 ? (
                              <TrendingUp className="h-3 w-3" />
                            ) : (
                              <TrendingDown className="h-3 w-3" />
                            )}
                            {Math.abs(asset.change)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Deposit/Withdraw Form */}
            <div>
              <Card className="border-border bg-card">
                <CardHeader>
                  <div className="flex gap-2">
                    {(["deposit", "withdraw", "transfer"] as const).map((tab) => (
                      <Button
                        key={tab}
                        variant={activeTab === tab ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setActiveTab(tab)}
                        className={activeTab === tab ? "bg-primary text-primary-foreground" : ""}
                      >
                        {tab === "deposit" && "إيداع"}
                        {tab === "withdraw" && "سحب"}
                        {tab === "transfer" && "تحويل"}
                      </Button>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>العملة</Label>
                    <select className="w-full rounded-lg border-0 bg-secondary px-3 py-2 text-foreground">
                      <option>BTC - Bitcoin</option>
                      <option>ETH - Ethereum</option>
                      <option>USDT - Tether</option>
                      <option>SOL - Solana</option>
                    </select>
                  </div>

                  {activeTab === "deposit" && (
                    <>
                      <div className="space-y-2">
                        <Label>عنوان الإيداع</Label>
                        <div className="flex gap-2">
                          <Input
                            value="bc1qxy2kgdygjrsqtzq2n0yrf..."
                            readOnly
                            className="bg-secondary border-0"
                          />
                          <Button variant="outline" size="icon">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <QrCode className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-4 text-sm text-muted-foreground">
                        <p>أرسل BTC فقط إلى هذا العنوان. الإيداعات تتطلب 3 تأكيدات.</p>
                      </div>
                    </>
                  )}

                  {(activeTab === "withdraw" || activeTab === "transfer") && (
                    <>
                      <div className="space-y-2">
                        <Label>
                          {activeTab === "withdraw" ? "عنوان المستلم" : "إلى"}
                        </Label>
                        <Input
                          placeholder={activeTab === "withdraw" ? "أدخل عنوان المحفظة" : "البريد الإلكتروني أو اسم المستخدم"}
                          className="bg-secondary border-0"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>المبلغ</Label>
                        <div className="relative">
                          <Input
                            type="number"
                            placeholder="0.00"
                            className="bg-secondary border-0 pl-16"
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-primary"
                          >
                            الكل
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          الرصيد المتاح: 1.2345 BTC
                        </p>
                      </div>
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        {activeTab === "withdraw" ? "سحب" : "تحويل"}
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card className="mt-6 border-border bg-card">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">آخر العمليات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.map((tx) => (
                      <div
                        key={tx.id}
                        className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                              tx.type === "deposit" ? "bg-accent/20" : "bg-destructive/20"
                            }`}
                          >
                            {tx.type === "deposit" ? (
                              <ArrowDownLeft className="h-4 w-4 text-accent" />
                            ) : (
                              <ArrowUpRight className="h-4 w-4 text-destructive" />
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-foreground">
                              {tx.type === "deposit" ? "إيداع" : "سحب"} {tx.asset}
                            </div>
                            <div className="text-xs text-muted-foreground">{tx.date}</div>
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-medium text-foreground">
                            {tx.type === "deposit" ? "+" : "-"}${tx.value.toLocaleString()}
                          </div>
                          <div
                            className={`text-xs ${
                              tx.status === "مكتمل" ? "text-accent" : "text-primary"
                            }`}
                          >
                            {tx.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
