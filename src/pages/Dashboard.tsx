import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Briefcase, 
  Activity, 
  Calendar,
  Newspaper,
  Lightbulb,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatCurrency, formatPercent, cn } from '@/lib/utils';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const evolutionData = [
  { name: 'Jan', invested: 10000, current: 10000 },
  { name: 'Feb', invested: 15000, current: 15400 },
  { name: 'Mar', invested: 15000, current: 16200 },
  { name: 'Apr', invested: 20000, current: 22100 },
  { name: 'May', invested: 20000, current: 21800 },
  { name: 'Jun', invested: 25000, current: 28500 },
  { name: 'Jul', invested: 25000, current: 31200 },
];

const allocationData = [
  { name: 'Forex', value: 45 },
  { name: 'Commodities', value: 25 },
  { name: 'Indices', value: 20 },
  { name: 'Crypto', value: 10 },
];
const COLORS = ['#cda434', '#10b981', '#3b82f6', '#8b5cf6'];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Olá, John Doe</h1>
          <p className="text-[var(--color-text-muted)] mt-1">
            Acompanhe seus produtos, flutuante, eventos macro e mercado em tempo real.
          </p>
          <div className="flex gap-2 mt-4">
            <Badge variant="outline" className="gap-1"><Activity size={12}/> Conta Ativa</Badge>
            <Badge variant="outline" className="gap-1"><Briefcase size={12}/> 4 Produtos</Badge>
          </div>
        </div>
        <Button variant="secondary" className="shrink-0">Atualizar Dados</Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <SummaryCard title="Quanto já investiu" value={25000} />
        <SummaryCard title="Lucro projetado" value={6200} trend="up" percent={24.8} />
        <SummaryCard title="Flutuante trader" value={-120} trend="down" percent={-0.4} />
        <SummaryCard title="Flutuante produtos" value={1450} trend="up" percent={5.8} />
        <SummaryCard title="Carteira atual" value={31200} highlight />
        <SummaryCard title="Movimentação aprovada" value={5000} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Evolution Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Evolução da carteira</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={evolutionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                  <XAxis dataKey="name" stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="var(--color-text-muted)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val/1000}k`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '8px' }}
                    itemStyle={{ color: 'var(--color-text-main)' }}
                  />
                  <Area type="monotone" dataKey="invested" stroke="var(--color-text-muted)" fill="transparent" strokeDasharray="5 5" name="Investido" />
                  <Area type="monotone" dataKey="current" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorCurrent)" name="Valor Atual" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Allocation Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Alocação da carteira</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <div className="h-[220px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={allocationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {allocationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)', borderRadius: '8px' }}
                    itemStyle={{ color: 'var(--color-text-main)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full space-y-2 mt-4">
              {allocationData.map((item, i) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    <span className="text-[var(--color-text-muted)]">{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contracted Products */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Produtos contratados</CardTitle>
            <Button variant="ghost" size="sm" className="text-xs">Ver todos</Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-[var(--color-text-muted)] bg-[var(--color-surface-hover)]">
                  <tr>
                    <th className="px-6 py-3 font-medium">Ativo</th>
                    <th className="px-6 py-3 font-medium">Qtd</th>
                    <th className="px-6 py-3 font-medium">Entrada</th>
                    <th className="px-6 py-3 font-medium">Atual</th>
                    <th className="px-6 py-3 font-medium">Flutuação</th>
                    <th className="px-6 py-3 font-medium text-right">Trava</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  {[
                    { asset: 'EURUSD Yield', qty: 2, entry: 1.0850, current: 1.0920, float: 140, lock: '30 dias' },
                    { asset: 'Gold Tracker', qty: 1, entry: 2350.0, current: 2385.5, float: 355, lock: '90 dias' },
                    { asset: 'SP500 Alpha', qty: 5, entry: 5120.0, current: 5200.0, float: 400, lock: 'Livre' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[var(--color-surface-hover)]/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{row.asset}</td>
                      <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.qty}</td>
                      <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.entry}</td>
                      <td className="px-6 py-4">{row.current}</td>
                      <td className="px-6 py-4">
                        <span className="text-emerald-400 flex items-center gap-1">
                          <TrendingUp size={14} /> +{formatCurrency(row.float)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right text-[var(--color-text-muted)]">{row.lock}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* 24h Market */}
        <Card>
          <CardHeader>
            <CardTitle>Mercado 24h</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { sym: 'EURUSD', name: 'Euro / US Dollar', price: 1.0920, var: 0.15 },
              { sym: 'XAUUSD', name: 'Gold', price: 2385.50, var: 1.2 },
              { sym: 'US30', name: 'Wall Street 30', price: 39500, var: -0.4 },
              { sym: 'BTCUSD', name: 'Bitcoin', price: 64200, var: 2.5 },
            ].map((mkt) => (
              <div key={mkt.sym} className="flex items-center justify-between p-3 rounded-lg bg-[var(--color-surface-hover)]">
                <div>
                  <p className="font-medium text-sm">{mkt.sym}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{mkt.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-sm">{mkt.price}</p>
                  <p className={cn("text-xs flex items-center justify-end gap-1", mkt.var >= 0 ? "text-emerald-400" : "text-red-400")}>
                    {mkt.var >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {Math.abs(mkt.var)}%
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Economic Calendar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Calendar size={16}/> Calendário</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { time: '09:30', country: 'US', title: 'CPI (MoM)', imp: 'high', act: '0.3%', prev: '0.4%' },
              { time: '10:00', country: 'EU', title: 'ECB Press Conf.', imp: 'high', act: '-', prev: '-' },
              { time: '14:00', country: 'US', title: 'Fed Interest Rate', imp: 'high', act: '-', prev: '5.5%' },
            ].map((ev, i) => (
              <div key={i} className="border-l-2 border-[var(--color-primary)] pl-3 py-1">
                <div className="flex justify-between items-start">
                  <p className="text-xs text-[var(--color-text-muted)]">{ev.time} • {ev.country}</p>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  </div>
                </div>
                <p className="text-sm font-medium mt-1">{ev.title}</p>
                <div className="flex gap-3 mt-1 text-xs">
                  <span className="text-[var(--color-text-main)]">Atual: {ev.act}</span>
                  <span className="text-[var(--color-text-muted)]">Prev: {ev.prev}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* News */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Newspaper size={16}/> Notícias</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: 'Fed signals potential rate cut in September', time: '1h ago', source: 'Bloomberg' },
              { title: 'Gold reaches new all-time high amid tensions', time: '3h ago', source: 'Reuters' },
              { title: 'Tech stocks rally continues as AI boom persists', time: '5h ago', source: 'WSJ' },
            ].map((news, i) => (
              <div key={i} className="group cursor-pointer">
                <p className="text-sm font-medium group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">{news.title}</p>
                <p className="text-xs text-[var(--color-text-muted)] mt-1">{news.source} • {news.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Insights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Lightbulb size={16}/> Insights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-lg p-3">
              <p className="text-sm text-[var(--color-primary)] font-medium mb-1">Oportunidade de Ouro</p>
              <p className="text-xs text-[var(--color-text-muted)]">Sua alocação em commodities está performando 12% acima da média. Considere realizar lucros parciais.</p>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
              <p className="text-sm text-emerald-400 font-medium mb-1">Margem Saudável</p>
              <p className="text-xs text-[var(--color-text-muted)]">Sua free margin atual permite absorver alta volatilidade no NFP amanhã.</p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Clock size={16}/> Atividade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative border-l border-[var(--color-border)] ml-2 space-y-6">
              {[
                { title: 'Depósito Aprovado', desc: '$5,000 via PIX', time: 'Hoje, 10:23' },
                { title: 'Ordem Executada', desc: 'Buy 1.0 EURUSD', time: 'Ontem, 14:45' },
                { title: 'Produto Adquirido', desc: 'SP500 Alpha', time: '08 Abr, 09:00' },
              ].map((act, i) => (
                <div key={i} className="pl-4 relative">
                  <div className="absolute w-2 h-2 bg-[var(--color-text-muted)] rounded-full -left-[4.5px] top-1.5 ring-4 ring-[var(--color-surface)]" />
                  <p className="text-sm font-medium">{act.title}</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{act.desc}</p>
                  <p className="text-[10px] text-[var(--color-text-muted)] mt-1">{act.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SummaryCard({ title, value, trend, percent, highlight }: { title: string, value: number, trend?: 'up'|'down', percent?: number, highlight?: boolean }) {
  return (
    <div className={cn(
      "p-4 rounded-xl border flex flex-col justify-between",
      highlight 
        ? "bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-primary)]/10 border-[var(--color-primary)]/30" 
        : "bg-[var(--color-surface)] border-[var(--color-border)]"
    )}>
      <p className="text-xs text-[var(--color-text-muted)] font-medium">{title}</p>
      <div className="mt-2 flex items-end justify-between">
        <p className={cn("text-xl font-bold", highlight ? "text-[var(--color-primary)]" : "text-white")}>
          {formatCurrency(value)}
        </p>
        {percent !== undefined && (
          <span className={cn(
            "text-xs flex items-center gap-0.5",
            trend === 'up' ? "text-emerald-400" : "text-red-400"
          )}>
            {trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {Math.abs(percent)}%
          </span>
        )}
      </div>
    </div>
  );
}
