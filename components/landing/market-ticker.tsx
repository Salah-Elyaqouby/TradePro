"use client"

import { TrendingUp, TrendingDown } from "lucide-react"

const cryptoData = [
  { symbol: "BTC", name: "Bitcoin", price: "67,234.50", change: "+2.45%", isUp: true },
  { symbol: "ETH", name: "Ethereum", price: "3,456.78", change: "+1.23%", isUp: true },
  { symbol: "BNB", name: "BNB", price: "567.89", change: "-0.87%", isUp: false },
  { symbol: "SOL", name: "Solana", price: "145.67", change: "+5.67%", isUp: true },
  { symbol: "XRP", name: "Ripple", price: "0.5678", change: "-1.23%", isUp: false },
  { symbol: "ADA", name: "Cardano", price: "0.4567", change: "+0.89%", isUp: true },
  { symbol: "DOGE", name: "Dogecoin", price: "0.1234", change: "+3.45%", isUp: true },
  { symbol: "DOT", name: "Polkadot", price: "7.89", change: "-0.56%", isUp: false },
]

export function MarketTicker() {
  return (
    <section className="border-y border-border bg-card/50 py-4">
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          {[...cryptoData, ...cryptoData].map((crypto, index) => (
            <div
              key={`${crypto.symbol}-${index}`}
              className="flex items-center gap-3 rounded-lg bg-card px-4 py-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {crypto.symbol.slice(0, 2)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">{crypto.symbol}</span>
                  <span className="text-xs text-muted-foreground">{crypto.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground">${crypto.price}</span>
                  <span
                    className={`flex items-center text-xs font-medium ${
                      crypto.isUp ? "text-accent" : "text-destructive"
                    }`}
                  >
                    {crypto.isUp ? (
                      <TrendingUp className="mr-1 h-3 w-3" />
                    ) : (
                      <TrendingDown className="mr-1 h-3 w-3" />
                    )}
                    {crypto.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
