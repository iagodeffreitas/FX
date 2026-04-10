import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  PieChart, 
  Activity, 
  User, 
  Wallet,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'ofertas', label: 'Ofertas disponíveis', icon: Briefcase },
    { id: 'papeis', label: 'Meus papéis', icon: PieChart },
    { id: 'terminal', label: 'Terminal', icon: Activity },
    { id: 'perfil', label: 'Perfil', icon: User },
  ];

  const getPageTitle = () => {
    if (activeTab === 'carteira') return 'Carteira';
    const item = navItems.find(i => i.id === activeTab);
    return item ? item.label : 'Dashboard';
  };

  return (
    <div className="flex h-screen bg-[var(--color-background)] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold text-white tracking-tight">
            OpenFx <span className="text-[var(--color-primary)]">Client</span>
          </h1>
          <p className="text-xs text-[var(--color-text-muted)] mt-1">Portal do investidor</p>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]" 
                    : "text-[var(--color-text-muted)] hover:text-white hover:bg-[var(--color-surface-hover)]"
                )}
              >
                <Icon size={18} className={isActive ? "text-[var(--color-primary)]" : "text-[var(--color-text-muted)]"} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[var(--color-border)]">
          <div className="bg-[var(--color-surface-hover)] rounded-lg p-3 mb-3">
            <p className="text-xs text-[var(--color-text-muted)] mb-1">Mesa vinculada</p>
            <p className="text-sm font-medium text-white">Alpha Trading Desk</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-amber-200 flex items-center justify-center text-black font-bold text-xs">
                JD
              </div>
              <div>
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-[var(--color-text-muted)]">ID: 849201</p>
              </div>
            </div>
            <button className="text-[var(--color-text-muted)] hover:text-white p-1 rounded-md hover:bg-[var(--color-surface-hover)] transition-colors">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md flex items-center justify-between px-8 shrink-0 z-10">
          <h2 className="text-lg font-semibold text-white">{getPageTitle()}</h2>
          
          <div className="flex items-center gap-4">
            <Button 
              variant={activeTab === 'carteira' ? 'primary' : 'outline'} 
              size="sm" 
              className="gap-2"
              onClick={() => setActiveTab('carteira')}
            >
              <Wallet size={16} />
              Carteira
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
