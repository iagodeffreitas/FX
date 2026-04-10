import React from 'react';
import { PieChart, TrendingUp, TrendingDown, ArrowLeft, Shield, Clock, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatCurrency, formatPercent } from '@/lib/utils';
import { cn } from '@/lib/utils';

const myAssets = [
  {
    id: 1,
    symbol: 'EURUSD-Y',
    name: 'EUR/USD Yield Premium',
    category: 'Forex Estruturado',
    qty: 2,
    entryPrice: 1.0850,
    invested: 20000,
    currentPrice: 1.0920,
    currentValue: 20140,
    float: 140,
    oscillation: 0.7,
    acquiredAt: '10 Jan 2026',
    lock: '30 dias',
    expiration: '10 Abr 2026',
  },
  {
    id: 2,
    symbol: 'GLD-TRK',
    name: 'Gold Tracker Plus',
    category: 'Commodities',
    qty: 1,
    entryPrice: 2350.00,
    invested: 15000,
    currentPrice: 2385.50,
    currentValue: 15355,
    float: 355,
    oscillation: 2.36,
    acquiredAt: '15 Fev 2026',
    lock: '90 dias',
    expiration: '15 Mai 2026',
  },
  {
    id: 3,
    symbol: 'SP500-DEF',
    name: 'S&P 500 Defensive',
    category: 'Índices',
    qty: 5,
    entryPrice: 5120.00,
    invested: 25000,
    currentPrice: 5200.00,
    currentValue: 25400,
    float: 400,
    oscillation: 1.6,
    acquiredAt: '01 Mar 2026',
    lock: 'Livre',
    expiration: 'Sem validade',
  }
];

export function Papeis({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const totalInvested = myAssets.reduce((acc, curr) => acc + curr.invested, 0);
  const totalCurrent = myAssets.reduce((acc, curr) => acc + curr.currentValue, 0);
  const totalFloat = totalCurrent - totalInvested;
  const totalOscillation = (totalFloat / totalInvested) * 100;

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Meus Papéis</h1>
          <p className="text-[var(--color-text-muted)] mt-1">
            Acompanhamento patrimonial dos seus produtos adquiridos.
          </p>
        </div>
        <Button variant="outline" onClick={() => setActiveTab('ofertas')} className="shrink-0">
          <ArrowLeft size={16} className="mr-2" /> Novas Oportunidades
        </Button>
      </div>

      {/* Mini-cards Totals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[var(--color-surface-hover)] border-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-[var(--color-surface)] rounded-lg text-[var(--color-text-muted)]">
              <PieChart size={24} />
            </div>
            <div>
              <p className="text-sm text-[var(--color-text-muted)]">Papéis Ativos</p>
              <p className="text-2xl font-bold text-white">{myAssets.length}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[var(--color-surface-hover)] border-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="p-3 bg-[var(--color-surface)] rounded-lg text-[var(--color-text-muted)]">
              <span className="text-xl font-bold">$</span>
            </div>
            <div>
              <p className="text-sm text-[var(--color-text-muted)]">Total Investido</p>
              <p className="text-2xl font-bold text-white">{formatCurrency(totalInvested)}</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[var(--color-surface-hover)] border-none">
          <CardContent className="p-4 flex items-center gap-4">
            <div className={cn("p-3 rounded-lg", totalFloat >= 0 ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400")}>
              {totalFloat >= 0 ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
            </div>
            <div>
              <p className="text-sm text-[var(--color-text-muted)]">Flutuante Consolidado</p>
              <div className="flex items-baseline gap-2">
                <p className={cn("text-2xl font-bold", totalFloat >= 0 ? "text-emerald-400" : "text-red-400")}>
                  {totalFloat >= 0 ? '+' : ''}{formatCurrency(totalFloat)}
                </p>
                <span className={cn("text-sm font-medium", totalFloat >= 0 ? "text-emerald-400/80" : "text-red-400/80")}>
                  ({totalFloat >= 0 ? '+' : ''}{totalOscillation.toFixed(2)}%)
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grid of Assets */}
      {myAssets.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {myAssets.map((asset) => (
            <Card key={asset.id} className="overflow-hidden">
              <div className="p-6 border-b border-[var(--color-border)] bg-[var(--color-surface-hover)]/30">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white">{asset.symbol}</h3>
                      <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{asset.category}</Badge>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)]">{asset.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">Flutuante</p>
                    <p className={cn("text-lg font-bold flex items-center justify-end gap-1", asset.float >= 0 ? "text-emerald-400" : "text-red-400")}>
                      {asset.float >= 0 ? '+' : ''}{formatCurrency(asset.float)}
                      <span className="text-xs ml-1">({asset.float >= 0 ? '+' : ''}{asset.oscillation}%)</span>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[var(--color-surface)] p-3 rounded-lg border border-[var(--color-border)]">
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">Valor Investido</p>
                    <p className="font-medium text-white">{formatCurrency(asset.invested)}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">Entrada: {asset.entryPrice}</p>
                  </div>
                  <div className="bg-[var(--color-surface)] p-3 rounded-lg border border-[var(--color-border)]">
                    <p className="text-xs text-[var(--color-text-muted)] mb-1">Valor Atual</p>
                    <p className="font-medium text-white">{formatCurrency(asset.currentValue)}</p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-1">Spot: {asset.currentPrice}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[var(--color-surface)] flex items-center justify-between text-sm">
                <div className="flex items-center gap-4 text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-1.5"><Calendar size={14}/> {asset.acquiredAt}</span>
                  <span className="flex items-center gap-1.5"><Shield size={14}/> {asset.lock}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14}/> {asset.expiration}</span>
                </div>
                <div className="text-[var(--color-text-muted)]">
                  Qtd: <span className="text-white font-medium">{asset.qty}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-[var(--color-surface-hover)] border-dashed border-2 border-[var(--color-border)]">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="p-4 bg-[var(--color-surface)] rounded-full mb-4">
              <PieChart size={32} className="text-[var(--color-text-muted)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Você ainda não possui papéis</h3>
            <p className="text-[var(--color-text-muted)] max-w-md mb-6">
              Sua carteira de produtos está vazia. Explore as oportunidades disponíveis e comece a investir.
            </p>
            <Button onClick={() => setActiveTab('ofertas')}>
              Ver Ofertas Disponíveis
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
