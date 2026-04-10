import React, { useState } from 'react';
import { Settings, Maximize2, Search, ChevronDown, Activity, Clock, BarChart2, Info } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Terminal() {
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [mode, setMode] = useState<'market' | 'trigger'>('market');
  const [activeTab, setActiveTab] = useState('chart');
  const [bookTab, setBookTab] = useState('positions');

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] bg-[#050505] border border-[var(--color-border)] rounded-xl overflow-hidden font-mono text-sm">
      {/* Top Bar */}
      <div className="h-14 border-b border-[var(--color-border)] bg-[#0a0a0a] flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-[#1a1a1a] p-1.5 rounded-md transition-colors">
            <span className="text-lg font-bold text-white">EURUSD</span>
            <ChevronDown size={16} className="text-[var(--color-text-muted)]" />
          </div>
          <div className="text-xs text-[var(--color-text-muted)] hidden md:block">Euro / US Dollar</div>
          
          <div className="h-8 w-px bg-[var(--color-border)] mx-2 hidden md:block" />
          
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-emerald-400">1.09205</span>
            <span className="text-xs text-emerald-400/80">+0.15%</span>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-xs text-[var(--color-text-muted)] ml-4">
            <div><span className="text-[#666]">H</span> 1.09450</div>
            <div><span className="text-[#666]">L</span> 1.08900</div>
            <div><span className="text-[#666]">Size</span> 100k</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
          <div className="flex items-center gap-1.5 text-xs bg-[#1a1a1a] px-2 py-1 rounded">
            <Clock size={12} /> 04:23:10
          </div>
          <button className="hover:text-white p-1"><Settings size={16}/></button>
          <button className="hover:text-white p-1"><Maximize2 size={16}/></button>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Center Chart Area */}
        <div className="flex-1 flex flex-col min-w-0 border-r border-[var(--color-border)]">
          {/* Chart Controls */}
          <div className="h-10 border-b border-[var(--color-border)] bg-[#0a0a0a] flex items-center justify-between px-2 shrink-0">
            <div className="flex items-center gap-1">
              <div className="flex bg-[#1a1a1a] rounded p-0.5">
                <button className={cn("px-3 py-1 rounded text-xs transition-colors", activeTab === 'chart' ? "bg-[#2a2a2a] text-white" : "text-[var(--color-text-muted)] hover:text-white")} onClick={() => setActiveTab('chart')}>Chart</button>
                <button className={cn("px-3 py-1 rounded text-xs transition-colors", activeTab === 'info' ? "bg-[#2a2a2a] text-white" : "text-[var(--color-text-muted)] hover:text-white")} onClick={() => setActiveTab('info')}>Info</button>
              </div>
              <div className="h-4 w-px bg-[var(--color-border)] mx-2" />
              <div className="flex gap-1 text-xs text-[var(--color-text-muted)]">
                {['M1', 'M5', 'M15', 'H1', 'H4', 'D1'].map(tf => (
                  <button key={tf} className={cn("px-2 py-1 rounded hover:bg-[#1a1a1a] hover:text-white transition-colors", tf === 'H1' && "text-[var(--color-primary)] font-bold")}>{tf}</button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
              <button className="p-1.5 hover:bg-[#1a1a1a] rounded"><BarChart2 size={14}/></button>
              <button className="p-1.5 hover:bg-[#1a1a1a] rounded"><Activity size={14}/></button>
            </div>
          </div>

          {/* Chart Mock */}
          <div className="flex-1 relative bg-[#050505] flex items-center justify-center overflow-hidden group">
            {/* Grid lines mock */}
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {/* Price Line Mock */}
            <div className="absolute left-0 right-0 top-1/2 border-t border-dashed border-emerald-500/50 flex items-center justify-end pr-4 z-10">
              <div className="bg-emerald-500 text-black text-xs px-2 py-0.5 rounded font-bold translate-x-4">1.09205</div>
            </div>

            {/* Candlestick mock pattern */}
            <div className="absolute inset-0 flex items-end justify-center gap-2 pb-20 opacity-80">
              {[40, 60, 30, 80, 50, 70, 90, 40, 60, 85, 45, 65, 55, 75, 95].map((h, i) => {
                const isUp = i % 2 === 0 || i % 3 === 0;
                return (
                  <div key={i} className="relative flex justify-center w-3" style={{ height: `${h}%` }}>
                    <div className={cn("absolute top-[-20px] bottom-[-20px] w-px", isUp ? "bg-emerald-500" : "bg-red-500")} />
                    <div className={cn("w-full h-full relative z-10", isUp ? "bg-emerald-500" : "bg-red-500")} />
                  </div>
                );
              })}
            </div>
            
            <div className="absolute bottom-4 left-4 text-xs text-[var(--color-text-muted)] bg-[#0a0a0a]/80 px-2 py-1 rounded backdrop-blur-sm">
              Chart data simulated for preview
            </div>
          </div>
        </div>

        {/* Right Panel - Order Entry */}
        <div className="w-80 bg-[#0a0a0a] flex flex-col shrink-0">
          <div className="p-4 flex-1 overflow-y-auto">
            {/* Buy/Sell Toggle */}
            <div className="flex bg-[#1a1a1a] rounded-lg p-1 mb-6">
              <button 
                className={cn("flex-1 py-2 text-center rounded-md font-bold transition-colors", orderType === 'buy' ? "bg-emerald-500 text-black" : "text-[var(--color-text-muted)] hover:text-white")}
                onClick={() => setOrderType('buy')}
              >
                BUY
              </button>
              <button 
                className={cn("flex-1 py-2 text-center rounded-md font-bold transition-colors", orderType === 'sell' ? "bg-red-500 text-black" : "text-[var(--color-text-muted)] hover:text-white")}
                onClick={() => setOrderType('sell')}
              >
                SELL
              </button>
            </div>

            {/* Spread & Mode */}
            <div className="flex justify-between items-center mb-6 text-xs">
              <div className="text-[var(--color-text-muted)]">Spread: <span className="text-white">0.8</span></div>
              <div className="flex bg-[#1a1a1a] rounded p-0.5">
                <button className={cn("px-2 py-1 rounded transition-colors", mode === 'market' ? "bg-[#2a2a2a] text-white" : "text-[var(--color-text-muted)]")} onClick={() => setMode('market')}>Market</button>
                <button className={cn("px-2 py-1 rounded transition-colors", mode === 'trigger' ? "bg-[#2a2a2a] text-white" : "text-[var(--color-text-muted)]")} onClick={() => setMode('trigger')}>Trigger</button>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="text-xs text-[var(--color-text-muted)] mb-1.5 block">Volume (Lots)</label>
                <div className="flex items-center bg-[#141414] border border-[var(--color-border)] rounded-lg overflow-hidden focus-within:border-[var(--color-primary)] transition-colors">
                  <button className="px-3 py-2 text-[var(--color-text-muted)] hover:text-white hover:bg-[#1a1a1a]">-</button>
                  <input type="text" defaultValue="1.00" className="flex-1 bg-transparent text-center text-white font-bold outline-none" />
                  <button className="px-3 py-2 text-[var(--color-text-muted)] hover:text-white hover:bg-[#1a1a1a]">+</button>
                </div>
              </div>

              {mode === 'trigger' && (
                <div>
                  <label className="text-xs text-[var(--color-text-muted)] mb-1.5 block">Price</label>
                  <input type="text" defaultValue="1.09000" className="w-full bg-[#141414] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white font-bold outline-none focus:border-[var(--color-primary)] transition-colors" />
                </div>
              )}

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-xs text-[var(--color-text-muted)] mb-1.5 flex justify-between">
                    <span>Take Profit</span>
                    <input type="checkbox" className="accent-[var(--color-primary)]" />
                  </label>
                  <input type="text" placeholder="Price or Pips" className="w-full bg-[#141414] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-[var(--color-primary)] transition-colors" disabled />
                </div>
                <div className="flex-1">
                  <label className="text-xs text-[var(--color-text-muted)] mb-1.5 flex justify-between">
                    <span>Stop Loss</span>
                    <input type="checkbox" className="accent-[var(--color-primary)]" />
                  </label>
                  <input type="text" placeholder="Price or Pips" className="w-full bg-[#141414] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-[var(--color-primary)] transition-colors" disabled />
                </div>
              </div>
            </div>

            {/* Execute Button */}
            <button className={cn(
              "w-full py-3 rounded-lg font-bold text-black text-base transition-transform active:scale-[0.98]",
              orderType === 'buy' ? "bg-emerald-500 hover:bg-emerald-400" : "bg-red-500 hover:bg-red-400"
            )}>
              {orderType === 'buy' ? 'BUY' : 'SELL'} {mode === 'market' ? 'MARKET' : 'LIMIT'}
            </button>

            {/* Account Details */}
            <div className="mt-8 pt-6 border-t border-[var(--color-border)] space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-[var(--color-text-muted)]">Free Margin</span>
                <span className="font-bold text-white">$12,450.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-muted)]">Margin Level</span>
                <span className="font-bold text-emerald-400">345%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-text-muted)]">Required Margin</span>
                <span className="text-white">$1,092.05</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Book */}
      <div className="h-48 border-t border-[var(--color-border)] bg-[#0a0a0a] flex flex-col shrink-0">
        <div className="flex border-b border-[var(--color-border)] bg-[#141414]">
          {['positions', 'orders', 'history', 'funding'].map(tab => (
            <button 
              key={tab}
              className={cn(
                "px-4 py-2 text-xs font-medium uppercase tracking-wider border-b-2 transition-colors",
                bookTab === tab ? "border-[var(--color-primary)] text-[var(--color-primary)]" : "border-transparent text-[var(--color-text-muted)] hover:text-white"
              )}
              onClick={() => setBookTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex-1 overflow-auto">
          {bookTab === 'positions' ? (
            <table className="w-full text-xs text-left">
              <thead className="text-[var(--color-text-muted)] sticky top-0 bg-[#0a0a0a]">
                <tr>
                  <th className="px-4 py-2 font-normal">Symbol</th>
                  <th className="px-4 py-2 font-normal">Type</th>
                  <th className="px-4 py-2 font-normal">Volume</th>
                  <th className="px-4 py-2 font-normal">Open Price</th>
                  <th className="px-4 py-2 font-normal">Current Price</th>
                  <th className="px-4 py-2 font-normal">S/L</th>
                  <th className="px-4 py-2 font-normal">T/P</th>
                  <th className="px-4 py-2 font-normal text-right">Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                <tr className="hover:bg-[#1a1a1a] transition-colors">
                  <td className="px-4 py-2 font-bold text-white">EURUSD</td>
                  <td className="px-4 py-2 text-emerald-400">Buy</td>
                  <td className="px-4 py-2">1.00</td>
                  <td className="px-4 py-2">1.08500</td>
                  <td className="px-4 py-2">1.09205</td>
                  <td className="px-4 py-2 text-[var(--color-text-muted)]">-</td>
                  <td className="px-4 py-2 text-[var(--color-text-muted)]">1.10000</td>
                  <td className="px-4 py-2 text-right font-bold text-emerald-400">+$705.00</td>
                </tr>
                <tr className="hover:bg-[#1a1a1a] transition-colors">
                  <td className="px-4 py-2 font-bold text-white">US30</td>
                  <td className="px-4 py-2 text-red-400">Sell</td>
                  <td className="px-4 py-2">0.50</td>
                  <td className="px-4 py-2">39600</td>
                  <td className="px-4 py-2">39500</td>
                  <td className="px-4 py-2 text-[var(--color-text-muted)]">39800</td>
                  <td className="px-4 py-2 text-[var(--color-text-muted)]">39000</td>
                  <td className="px-4 py-2 text-right font-bold text-emerald-400">+$50.00</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className="h-full flex items-center justify-center text-[var(--color-text-muted)] text-xs">
              No records found
            </div>
          )}
        </div>
      </div>

      {/* Bottom Rail - Markets */}
      <div className="h-8 border-t border-[var(--color-border)] bg-[#050505] flex items-center px-2 overflow-x-auto shrink-0 no-scrollbar">
        {[
          { s: 'EURUSD', v: '+0.15%' },
          { s: 'GBPUSD', v: '-0.05%' },
          { s: 'USDJPY', v: '+0.22%' },
          { s: 'XAUUSD', v: '+1.20%' },
          { s: 'US30', v: '-0.40%' },
          { s: 'BTCUSD', v: '+2.50%' },
        ].map((m, i) => (
          <div key={i} className="flex items-center gap-2 px-3 border-r border-[var(--color-border)] last:border-0 whitespace-nowrap cursor-pointer hover:bg-[#1a1a1a] h-full transition-colors">
            <span className="font-bold text-white text-[10px]">{m.s}</span>
            <span className={cn("text-[10px]", m.v.startsWith('+') ? "text-emerald-400" : "text-red-400")}>{m.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
