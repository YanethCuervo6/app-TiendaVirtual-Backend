import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Cliente} from './cliente.model';

@model()
export class Mascota extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  raza: string;

  @property({
    type: 'string',
    required: true,
  })
  genero: string;

  @property({
    type: 'string',
    required: true,
  })
  edad: string;

  @belongsTo(() => Cliente)
  clienteId: string;

  constructor(data?: Partial<Mascota>) {
    super(data);
  }
}

export interface MascotaRelations {
  // describe navigational properties here
}

export type MascotaWithRelations = Mascota & MascotaRelations;
