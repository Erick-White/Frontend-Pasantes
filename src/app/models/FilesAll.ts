import { PasantesAll } from './pasantes-all';
import { User } from 'src/app/models/user';
import { Asignaciones } from './asignaciones';

export interface FilesAll {
  idFiles: number;
  idUser: string;
  intern:PasantesAll;
  idAssignment:number;
  assignments:Asignaciones
  fileName: string;
  path: string;
}
