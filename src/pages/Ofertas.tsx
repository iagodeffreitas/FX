import React from 'react';
import { Briefcase, ArrowRight, Clock, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';

const offers = [
  {
    id: 1,
    symbol: 'EURUSD-Y',
    name: 'EUR/USD Yield Premium',
    status: 'Disponível',
    desc: 'Operação estruturada com foco em rendimento sobre a paridade EUR/USD, com proteção de capital parcial.',
    category: 'Forex Estruturado',
    qty: 'Lote de 10',
    spotPrice: 1.0920,
    pkgPrice: 10000,
    lock: '90 dias',
    expiration: '15 Mai 2026',
    origin: 'Alpha Desk',
    desk: 'Alpha Trading Desk',
    risk: 'Moderado'
  },
  {
    id: 2,
    symbol: 'GLD-TRK',
    name: 'Gold Tracker Plus',
    status: 'Últimas unidades',
    desc: 'Acompanhamento alavancado do ouro com travas de segurança contra quedas abruptas no curto prazo.',
    category: 'Commodities',
    qty: 'Lote de 5',
    spotPrice: 2385.50,
    pkgPrice: 15000,
    lock: '180 dias',
    expiration: '30 Jun 2026',
    origin: 'Macro Strategy',
    desk: 'Alpha Trading Desk',
    risk: 'Alto'
  },
  {
    id: 3,
    symbol: 'SP500-DEF',
    name: 'S&P 500 Defensive',
    status: 'Disponível',
    desc: 'Exposição ao índice americano com hedge dinâmico. Ideal para momentos de incerteza macroeconômica.',
    category: 'Índices',
    qty: 'Lote de 20',
    spotPrice: 5200.00,
    pkgPrice: 25000,
    lock: 'Livre',
    expiration: 'Sem validade',
    origin: 'Quant Team',
    desk: 'Alpha Trading Desk',
    risk: 'Baixo'
  }
];

export function Ofertas({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[var(--color-surface)] to-[var(--color-surface-hover)] p-8 rounded-2xl border border-[var(--color-border)]">
        <div className="max-w-3xl">
          <Badge variant="outline" className="mb-4 text-[var(--color-primary)] border-[var(--color-primary)]/30">Oportunidades Exclusivas</Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Ofertas Disponíveis</h1>
          <p className="text-[var(--color-text-muted)] text-lg">
            Explore produtos estruturados e oportunidades selecionadas pela sua mesa de operações. 
            Adquira pacotes com condições institucionais.
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="flex gap-4">
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] px-4 py-3 rounded-lg flex items-center gap-3">
          <div className="p-2 bg-[var(--color-primary)]/10 rounded-md text-[var(--color-primary)]">
            <Briefcase size={20} />
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Ofertas ativas</p>
            <p className="text-lg font-bold text-white">12</p>
          </div>
        </div>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] px-4 py-3 rounded-lg flex items-center gap-3">
          <div className="p-2 bg-emerald-500/10 rounded-md text-emerald-400">
            <TrendingUp size={20} />
          </div>
          <div>
            <p className="text-xs text-[var(--color-text-muted)]">Novas esta semana</p>
            <p className="text-lg font-bold text-white">3</p>
          </div>
        </div>
      </div>

      {/* Grid */}
      {offers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} className="flex flex-col hover:border-[var(--color-primary)]/50 transition-colors group">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={offer.status === 'Disponível' ? 'success' : 'warning'}>
                    {offer.status}
                  </Badge>
                  <span className="text-xs text-[var(--color-text-muted)] bg-[var(--color-surface-hover)] px-2 py-1 rounded-md">
                    {offer.category}
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-xl font-bold text-white">{offer.symbol}</h3>
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">{offer.name}</p>
              </CardHeader>
              
              <CardContent className="pt-0 flex-1 flex flex-col">
                <p className="text-sm text-[var(--color-text-muted)] mb-6 line-clamp-3">
                  {offer.desc}
                </p>
                
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">Preço do Pacote</span>
                    <span className="font-bold text-white">{formatCurrency(offer.pkgPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">Preço Spot</span>
                    <span className="font-medium">{offer.spotPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">Quantidade</span>
                    <span className="font-medium">{offer.qty}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">Trava</span>
                    <span className="font-medium flex items-center gap-1"><Shield size={14}/> {offer.lock}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-text-muted)]">Expiração</span>
                    <span className="font-medium flex items-center gap-1"><Clock size={14}/> {offer.expiration}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] space-y-3">
                  <Button className="w-full group-hover:bg-[var(--color-primary-hover)]">
                    Adquirir Oferta
                  </Button>
                  <Button variant="ghost" className="w-full" onClick={() => setActiveTab('papeis')}>
                    Ver meus papéis <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-[var(--color-surface-hover)] border-dashed border-2 border-[var(--color-border)]">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="p-4 bg-[var(--color-surface)] rounded-full mb-4">
              <Briefcase size={32} className="text-[var(--color-text-muted)]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Nenhuma oferta disponível</h3>
            <p className="text-[var(--color-text-muted)] max-w-md">
              No momento, sua mesa não publicou novas oportunidades. Fique de olho, novas ofertas podem aparecer a qualquer momento.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
