import { ArrowRight, ChevronRight, Shield, TrendingUp, Wallet, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BentoGrid() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-12 grid-rows-6 gap-4 h-[800px]">
        {/* Main Wallet Card - Top Left (Large) */}
        <div className="col-span-12 md:col-span-4 row-span-3 group cursor-pointer">
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-white relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-2xl">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold leading-tight mb-2">
                    Secure Crypto
                    <br />
                    Wallet
                  </h2>
                  <p className="text-white/80 text-sm">Multi-chain support</p>
                </div>
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Wallet Balance Display */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Total Balance</p>
                  <p className="text-3xl font-bold">$24,582.50</p>
                  <p className="text-green-300 text-sm">+12.5% today</p>
                </div>
              </div>

              <div className="flex justify-end">
                <ArrowRight className="text-white w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

        {/* Multi Currency Support - Top Center */}
        <div className="col-span-12 md:col-span-4 row-span-3 group cursor-pointer">
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Multi Currency</h3>
                <p className="text-white/60 text-sm">Support for 100+ cryptocurrencies</p>
              </div>

              {/* Crypto Icons Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { name: "BTC", color: "from-orange-400 to-orange-600" },
                  { name: "ETH", color: "from-blue-400 to-blue-600" },
                  { name: "ADA", color: "from-blue-500 to-blue-700" },
                  { name: "DOT", color: "from-pink-400 to-pink-600" },
                  { name: "SOL", color: "from-purple-400 to-purple-600" },
                  { name: "MATIC", color: "from-purple-500 to-purple-700" },
                ].map((crypto, index) => (
                  <div
                    key={index}
                    className={`w-12 h-12 bg-gradient-to-br ${crypto.color} rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-lg border border-white/10`}
                  >
                    {crypto.name}
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-auto">
                <ChevronRight className="text-orange-500 w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Chart - Top Right */}
        <div className="col-span-12 md:col-span-4 row-span-2 group cursor-pointer">
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Portfolio</h3>
                  <p className="text-white/60 text-sm">24h performance</p>
                </div>
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>

              {/* Simple Chart Visualization */}
              <div className="flex-1 flex items-end space-x-1 mb-4">
                {[40, 65, 45, 80, 55, 90, 70, 85].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-orange-500 to-orange-400 rounded-t opacity-70"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white font-bold">+15.2%</p>
                  <p className="text-green-400 text-xs">$3,847.20</p>
                </div>
                <ChevronRight className="text-orange-500 w-5 h-5" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

        {/* Security Features - Middle Right */}
        <div className="col-span-12 md:col-span-4 row-span-1 group cursor-pointer">
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-4 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            <div className="relative z-10 h-full flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Bank-Level</h3>
                <p className="text-lg font-bold text-white">Security</p>
              </div>
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center border border-white/10">
                <Shield className="w-5 h-5 text-orange-500" />
              </div>
            </div>
          </div>
        </div>

        {/* DeFi Integration - Bottom Left */}
        <div className="col-span-12 md:col-span-3 row-span-3 group cursor-pointer">
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg border border-white/10">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border border-white/20">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[1, 2, 3].map((dot) => (
                  <div key={dot} className="w-2 h-2 bg-orange-500 rounded-full opacity-60"></div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">DeFi Integration</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Access decentralized finance protocols directly from your wallet
              </p>

              <div className="mt-auto">
                <ChevronRight className="text-orange-500 w-6 h-6" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History - Bottom Center */}
        <div className="col-span-12 md:col-span-5 row-span-3 group cursor-pointer">
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Recent Transactions</h3>
                <p className="text-white/60 text-sm">Track all your crypto activities</p>
              </div>

              <div className="space-y-4 flex-1">
                {[
                  {
                    type: "receive",
                    amount: "+0.5 BTC",
                    address: "1A2B3C...7X8Y",
                    time: "2 min ago",
                    color: "text-green-400",
                  },
                  {
                    type: "send",
                    amount: "-150 USDT",
                    address: "0x1234...5678",
                    time: "1 hour ago",
                    color: "text-red-400",
                  },
                  {
                    type: "swap",
                    amount: "2 ETH → 3000 USDT",
                    address: "Uniswap",
                    time: "3 hours ago",
                    color: "text-blue-400",
                  },
                ].map((transaction, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 px-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center border border-white/10">
                        <div className={`w-2 h-2 rounded-full ${transaction.color.replace("text-", "bg-")}`}></div>
                      </div>
                      <div>
                        <div className={`text-sm font-medium ${transaction.color}`}>{transaction.amount}</div>
                        <div className="text-xs text-white/50">{transaction.address}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-white/50">{transaction.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-4">
                <ChevronRight className="text-orange-500 w-6 h-6" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

        {/* Fast Transactions - Bottom Right */}
        <div className="col-span-12 md:col-span-4 row-span-3 group cursor-pointer">
          <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-white relative overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

            <div className="relative z-10 h-full flex flex-col">
              {/* Crypto Cards */}
              <div className="mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-3 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">ETH</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">Ethereum</div>
                        <div className="text-white/60 text-xs">$2,847.32</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">2.5 ETH</div>
                      <div className="text-green-400 text-xs">+5.2%</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">₿</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">Bitcoin</div>
                        <div className="text-white/60 text-xs">$43,250.00</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">0.75 BTC</div>
                      <div className="text-green-400 text-xs">+2.8%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Send and receive crypto instantly with minimal fees
                </p>

                <div className="flex justify-end">
                  <ArrowRight className="text-white w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}