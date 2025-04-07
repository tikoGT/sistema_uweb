import { User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold tracking-tight">
              Sistema de Gestión de Cursos
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full">
              <div className="bg-white/20 p-2 rounded-full">
                <User className="w-5 h-5" />
              </div>
              <span className="font-medium">{user?.name || 'Usuario'}</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={logout}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 