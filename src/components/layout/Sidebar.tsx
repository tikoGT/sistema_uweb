import { Link } from 'react-router-dom';
import { Book, Home, Settings, Users } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-card border-r border-border">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Panel de Control</h2>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-foreground hover:bg-accent rounded-md"
            >
              <Home className="w-5 h-5 mr-2" />
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/cursos"
              className="flex items-center px-4 py-2 text-foreground hover:bg-accent rounded-md"
            >
              <Book className="w-5 h-5 mr-2" />
              Cursos
            </Link>
          </li>
          <li>
            <Link
              to="/estudiantes"
              className="flex items-center px-4 py-2 text-foreground hover:bg-accent rounded-md"
            >
              <Users className="w-5 h-5 mr-2" />
              Estudiantes
            </Link>
          </li>
          <li>
            <Link
              to="/configuracion"
              className="flex items-center px-4 py-2 text-foreground hover:bg-accent rounded-md"
            >
              <Settings className="w-5 h-5 mr-2" />
              Configuración
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
} 