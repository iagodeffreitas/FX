import React from 'react';
import { User, Shield, Camera, MapPin, Phone, Mail, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export function Perfil() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Perfil e Segurança</h1>
        <p className="text-[var(--color-text-muted)] mt-1">
          Gerencie seus dados pessoais, endereço e configurações de segurança.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Summary */}
        <div className="w-full lg:w-80 space-y-6 shrink-0">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-amber-200 flex items-center justify-center text-black font-bold text-3xl">
                  JD
                </div>
                <button className="absolute bottom-0 right-0 p-1.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full text-white hover:bg-[var(--color-surface-hover)] transition-colors">
                  <Camera size={14} />
                </button>
              </div>
              <h2 className="text-xl font-bold text-white">John Doe</h2>
              <p className="text-sm text-[var(--color-text-muted)] mb-4">johndoe@example.com</p>
              <Badge variant="success" className="mb-6">Conta Verificada</Badge>

              <div className="w-full space-y-3 text-sm text-left">
                <div className="flex justify-between py-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-text-muted)]">Mesa Vinculada</span>
                  <span className="font-medium text-white">Alpha Trading</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-text-muted)]">Último Login</span>
                  <span className="font-medium text-white">Hoje, 10:23</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--color-border)]">
                  <span className="text-[var(--color-text-muted)]">Membro desde</span>
                  <span className="font-medium text-white">10 Jan 2026</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[var(--color-text-muted)]">Status 2FA</span>
                  <span className="font-medium text-emerald-400 flex items-center gap-1"><CheckCircle2 size={14}/> Ativo</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Resumo Cadastral</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0"><CheckCircle2 size={16}/></div>
                <div>
                  <p className="text-sm font-medium text-white">Identidade Confirmada</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Documentos validados pelo compliance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-lg shrink-0"><AlertTriangle size={16}/></div>
                <div>
                  <p className="text-sm font-medium text-white">Comprovante de Endereço</p>
                  <p className="text-xs text-[var(--color-text-muted)]">Expira em 15 dias. Atualize em breve.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Forms */}
        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><User size={18}/> Dados Pessoais</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm text-[var(--color-text-muted)]">Nome Completo</label>
                    <input type="text" defaultValue="John Doe" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm text-[var(--color-text-muted)]">E-mail</label>
                    <input type="email" defaultValue="johndoe@example.com" readOnly className="w-full bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-[var(--color-text-muted)] outline-none cursor-not-allowed" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm text-[var(--color-text-muted)]">Telefone</label>
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm text-[var(--color-text-muted)]">Data de Nascimento</label>
                    <input type="date" defaultValue="1985-08-15" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm text-[var(--color-text-muted)]">Documento (ID/Passaporte)</label>
                    <input type="text" defaultValue="AB1234567" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2"><MapPin size={16}/> Endereço</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-sm text-[var(--color-text-muted)]">Endereço</label>
                      <input type="text" defaultValue="123 Wall Street, Suite 400" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm text-[var(--color-text-muted)]">Complemento</label>
                      <input type="text" placeholder="Apt, Suite, etc." className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm text-[var(--color-text-muted)]">Cidade</label>
                      <input type="text" defaultValue="New York" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm text-[var(--color-text-muted)]">Estado/Província</label>
                      <input type="text" defaultValue="NY" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm text-[var(--color-text-muted)]">CEP/Zip Code</label>
                      <input type="text" defaultValue="10005" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm text-[var(--color-text-muted)]">País</label>
                      <select className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors">
                        <option value="US">United States</option>
                        <option value="BR">Brazil</option>
                        <option value="UK">United Kingdom</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2"><Phone size={16}/> Contato de Emergência</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm text-[var(--color-text-muted)]">Nome do Contato</label>
                      <input type="text" defaultValue="Jane Doe" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm text-[var(--color-text-muted)]">Telefone do Contato</label>
                      <input type="tel" defaultValue="+1 (555) 987-6543" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <Button type="button">Salvar Alterações</Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Shield size={18}/> Segurança da Conta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-[var(--color-surface-hover)] rounded-lg border border-[var(--color-border)]">
                  <div>
                    <h4 className="font-medium text-white">Autenticação de Dois Fatores (2FA)</h4>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">Proteja sua conta com uma camada extra de segurança usando um app autenticador.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-[var(--color-border)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary)]"></div>
                  </label>
                </div>

                <form className="space-y-4 pt-4 border-t border-[var(--color-border)]">
                  <h4 className="font-medium text-white mb-2">Alterar Senha</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm text-[var(--color-text-muted)]">Senha Atual</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div className="hidden md:block"></div>
                    <div className="space-y-1.5">
                      <label className="text-sm text-[var(--color-text-muted)]">Nova Senha</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm text-[var(--color-text-muted)]">Confirmar Nova Senha</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-white outline-none focus:border-[var(--color-primary)] transition-colors" />
                    </div>
                  </div>
                  <p className="text-xs text-[var(--color-text-muted)]">A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, números e símbolos.</p>
                  <div className="pt-2">
                    <Button type="button" variant="outline">Atualizar Senha</Button>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
