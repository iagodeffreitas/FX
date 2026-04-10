import React, { useState } from 'react';
import { Wallet, ArrowUpRight, ArrowDownRight, Building2, History, CreditCard, X, Copy, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';

export function Carteira() {
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [depositMethod, setDepositMethod] = useState('pix');
  const [depositAmount, setDepositAmount] = useState('5000');

  const handleDepositSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDepositModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Carteira Financeira</h1>
        <p className="text-[var(--color-text-muted)] mt-1">
          Gerencie seus fundos, solicitações de depósito e saque.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-primary)]/10 border-[var(--color-primary)]/30">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-[var(--color-text-muted)] font-medium">Saldo Disponível (Free Margin)</p>
              <div className="p-2 bg-[var(--color-primary)]/20 rounded-lg text-[var(--color-primary)]">
                <Wallet size={20} />
              </div>
            </div>
            <p className="text-3xl font-bold text-[var(--color-primary)]">$12,450.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-[var(--color-text-muted)] font-medium">Total Depositado</p>
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <ArrowDownRight size={20} />
              </div>
            </div>
            <p className="text-2xl font-bold text-white">$50,000.00</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-[var(--color-text-muted)] font-medium">Total Sacado</p>
              <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <p className="text-2xl font-bold text-white">$15,000.00</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Nova Solicitação */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><CreditCard size={18}/> Nova Solicitação</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleDepositSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm text-[var(--color-text-muted)]">Tipo</label>
                  <select className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors">
                    <option value="deposit">Depósito</option>
                    <option value="withdraw">Saque</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-[var(--color-text-muted)]">Canal</label>
                  <select 
                    className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors"
                    value={depositMethod}
                    onChange={(e) => setDepositMethod(e.target.value)}
                  >
                    <option value="pix">PIX</option>
                    <option value="transfer">Transferência Bancária</option>
                    <option value="bep20">Crypto (BEP20)</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm text-[var(--color-text-muted)]">Valor</label>
                  <input 
                    type="number" 
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-[var(--color-text-muted)]">Moeda</label>
                  <select className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors">
                    <option value="USD">USD</option>
                    <option value="BRL">BRL</option>
                    <option value="USDT">USDT</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-[var(--color-text-muted)]">Comprovante / TXID (Opcional)</label>
                <input type="text" placeholder="Cole aqui a referência da transação" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-[var(--color-text-muted)]">Observação</label>
                <textarea rows={2} className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors resize-none"></textarea>
              </div>
              <Button type="submit" className="w-full">Continuar Solicitação</Button>
            </form>
          </CardContent>
        </Card>

        {/* Cadastro Financeiro */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Building2 size={18}/> Cadastro Financeiro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-[var(--color-text-muted)] mb-6">
              Estes dados serão utilizados como referência para seus saques e validações de depósitos.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm text-[var(--color-text-muted)]">Banco</label>
                  <input type="text" defaultValue="Banco Itaú" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-[var(--color-text-muted)]">Nome do Titular</label>
                  <input type="text" defaultValue="John Doe" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm text-[var(--color-text-muted)]">Agência</label>
                  <input type="text" defaultValue="0001" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-[var(--color-text-muted)]">Conta</label>
                  <input type="text" defaultValue="12345-6" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-[var(--color-text-muted)]">Chave PIX</label>
                <input type="text" defaultValue="johndoe@example.com" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-[var(--color-text-muted)]">Wallet Crypto (BEP20)</label>
                <input type="text" defaultValue="0x71C...976F" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
              </div>
              <div className="pt-2">
                <Button type="button" variant="outline">Salvar Dados Financeiros</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Histórico */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><History size={18}/> Histórico de Solicitações</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-[var(--color-text-muted)] bg-[var(--color-surface-hover)]">
                <tr>
                  <th className="px-6 py-3 font-medium">Data/Hora</th>
                  <th className="px-6 py-3 font-medium">Tipo</th>
                  <th className="px-6 py-3 font-medium">Canal</th>
                  <th className="px-6 py-3 font-medium">Valor</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Observação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  { date: '10 Abr 2026, 10:23', type: 'Depósito', channel: 'PIX', value: 5000, status: 'Aprovado', obs: 'Ref: PIX-9928' },
                  { date: '05 Abr 2026, 14:10', type: 'Saque', channel: 'Transferência', value: 2000, status: 'Em análise', obs: 'Saque parcial' },
                  { date: '01 Abr 2026, 09:00', type: 'Depósito', channel: 'BEP20', value: 10000, status: 'Aprovado', obs: 'TXID: 0x8f...' },
                  { date: '28 Mar 2026, 16:45', type: 'Saque', channel: 'PIX', value: 1500, status: 'Rejeitado', obs: 'Dados divergentes' },
                ].length > 0 ? (
                  [
                    { date: '10 Abr 2026, 10:23', type: 'Depósito', channel: 'PIX', value: 5000, status: 'Aprovado', obs: 'Ref: PIX-9928' },
                    { date: '05 Abr 2026, 14:10', type: 'Saque', channel: 'Transferência', value: 2000, status: 'Em análise', obs: 'Saque parcial' },
                    { date: '01 Abr 2026, 09:00', type: 'Depósito', channel: 'BEP20', value: 10000, status: 'Aprovado', obs: 'TXID: 0x8f...' },
                    { date: '28 Mar 2026, 16:45', type: 'Saque', channel: 'PIX', value: 1500, status: 'Rejeitado', obs: 'Dados divergentes' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-[var(--color-surface-hover)]/50 transition-colors">
                      <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.date}</td>
                      <td className="px-6 py-4 font-medium flex items-center gap-2">
                        {row.type === 'Depósito' ? <ArrowDownRight size={14} className="text-emerald-400" /> : <ArrowUpRight size={14} className="text-red-400" />}
                        {row.type}
                      </td>
                      <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.channel}</td>
                      <td className="px-6 py-4 font-medium">{formatCurrency(row.value)}</td>
                      <td className="px-6 py-4">
                        <Badge variant={
                          row.status === 'Aprovado' ? 'success' : 
                          row.status === 'Em análise' ? 'warning' : 
                          row.status === 'Rejeitado' ? 'danger' : 'default'
                        }>
                          {row.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-[var(--color-text-muted)]">{row.obs}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-[var(--color-text-muted)]">
                      Nenhuma solicitação financeira encontrada.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Deposit Modal */}
      {showDepositModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <Card className="w-full max-w-md bg-[var(--color-surface)] border-[var(--color-border)] shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
              <h3 className="text-lg font-bold text-white">Instruções de Depósito</h3>
              <button onClick={() => setShowDepositModal(false)} className="text-[var(--color-text-muted)] hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            <CardContent className="p-6 space-y-6">
              <div className="text-center">
                <p className="text-sm text-[var(--color-text-muted)]">Valor da solicitação</p>
                <p className="text-3xl font-bold text-[var(--color-primary)] my-1">{formatCurrency(Number(depositAmount))}</p>
                <p className="text-xs text-[var(--color-text-muted)]">Equipe vinculada: Alpha Trading Desk</p>
              </div>

              <div className="bg-[var(--color-surface-hover)] p-4 rounded-lg border border-[var(--color-border)] space-y-4">
                {depositMethod === 'pix' && (
                  <>
                    <div className="flex justify-center mb-4">
                      <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center">
                        {/* Mock QR Code */}
                        <div className="w-32 h-32 bg-black" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">Instituição (PSP)</p>
                      <p className="font-medium text-white text-sm">Banco Genérico S.A.</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">Chave PIX (CNPJ)</p>
                      <div className="flex items-center justify-between bg-[var(--color-background)] px-3 py-2 rounded border border-[var(--color-border)]">
                        <span className="font-mono text-sm text-white">12.345.678/0001-90</span>
                        <button className="text-[var(--color-text-muted)] hover:text-white"><Copy size={14}/></button>
                      </div>
                    </div>
                  </>
                )}

                {depositMethod === 'transfer' && (
                  <>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">Banco</p>
                      <p className="font-medium text-white text-sm">Banco Genérico S.A. (000)</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">Agência</p>
                      <div className="flex items-center justify-between bg-[var(--color-background)] px-3 py-2 rounded border border-[var(--color-border)] mb-2">
                        <span className="font-mono text-sm text-white">0001</span>
                        <button className="text-[var(--color-text-muted)] hover:text-white"><Copy size={14}/></button>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">Conta Corrente</p>
                      <div className="flex items-center justify-between bg-[var(--color-background)] px-3 py-2 rounded border border-[var(--color-border)]">
                        <span className="font-mono text-sm text-white">123456-7</span>
                        <button className="text-[var(--color-text-muted)] hover:text-white"><Copy size={14}/></button>
                      </div>
                    </div>
                  </>
                )}

                {depositMethod === 'bep20' && (
                  <>
                    <div className="flex items-start gap-2 bg-amber-500/10 text-amber-400 p-3 rounded text-xs mb-4 border border-amber-500/20">
                      <AlertTriangle size={16} className="shrink-0" />
                      <p>Envie apenas USDT na rede BNB Smart Chain (BEP20). Outros ativos ou redes resultarão na perda dos fundos.</p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">Endereço da Carteira (BEP20)</p>
                      <div className="flex items-center justify-between bg-[var(--color-background)] px-3 py-2 rounded border border-[var(--color-border)]">
                        <span className="font-mono text-xs text-white truncate mr-2">0x1234567890abcdef1234567890abcdef12345678</span>
                        <button className="text-[var(--color-text-muted)] hover:text-white shrink-0"><Copy size={14}/></button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">Após a transferência, anexe o TXID na solicitação.</p>
                    </div>
                  </>
                )}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setShowDepositModal(false)}>Cancelar</Button>
                <Button className="flex-1 gap-2" onClick={() => setShowDepositModal(false)}>
                  <CheckCircle2 size={16} /> Confirmar Envio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
