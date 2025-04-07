import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Plus, Edit, Trash2 } from 'lucide-react';

export function Cursos() {
  const [cursos] = useState([
    { id: 1, nombre: 'Introducción a React', descripcion: 'Curso básico de React', clases: 12 },
    { id: 2, nombre: 'JavaScript Avanzado', descripcion: 'Curso avanzado de JavaScript', clases: 15 },
    { id: 3, nombre: 'TypeScript', descripcion: 'Curso de TypeScript', clases: 10 },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gestión de Cursos</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Curso
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Descripción</TableHead>
              <TableHead>Clases</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cursos.map((curso) => (
              <TableRow key={curso.id}>
                <TableCell>{curso.id}</TableCell>
                <TableCell>{curso.nombre}</TableCell>
                <TableCell>{curso.descripcion}</TableCell>
                <TableCell>{curso.clases}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
} 