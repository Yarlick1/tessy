export const invitadoDefault = {
  nombre: 'Invitado especial',
  pases: 0
};

export const invitados = {
  'fteresa-carandia': {
    nombre: 'Familia Teresa Carandia',
    pases: 3
  },
  'fcolin-lopez': {
    nombre: 'Familia Colín López',
    pases: 2
  },
  'fcolin-monrroy': {
    nombre: 'Familia Colin Monrroy',
    pases: 5
  },
  'fgaray-colin': {
    nombre: 'Familia Garay Colín',
    pases: 8
  },
  'fvazquez-colin': {
    nombre: 'Familia Vázquez Colín',
    pases: 2
  },
  'fvazquez-rios': {
    nombre: 'Familia Vázquez Rios',
    pases: 8
  },
  'fvazquez-garcia': {
    nombre: 'Familia Vázquez García',
    pases: 2
  },
  'fcolin-gomez': {
    nombre: 'Familia Colín Gómez',
    pases: 8
  },
  'fcolin-gomez-2': {
    nombre: 'Familia Colín Gómez',
    pases: 2
  },
  'fmauricio-mendoza': {
    nombre: 'Familia Mauricio Mendoza',
    pases: 2
  },
  'fporras-perez': {
    nombre: 'Porras Perez',
    pases: 2
  },
  'fsolis': {
    nombre: 'Familia Solis',
    pases: 4
  },
  'fjimenez-olivo': {
    nombre: 'Familia Jimenez Olivo',
    pases: 4
  },
  'fade': {
    nombre: 'Maestra Ade',
    pases: 3
  },
  'flaura': {
    nombre: 'Maestra Laura',
    pases: 2
  },
  'fdomiguez-flores': {
    nombre: 'Familia Dominguez Flores',
    pases: 5
  },
  'fgaray': {
    nombre: 'Familia Garay',
    pases: 6
  },
  'fconcha-hernandez': {
    nombre: 'Familia Concha Hernandez',
    pases: 5
  },
  'fsalazar-zarco': {
    nombre: 'Salazar Zarco',
    pases: 0
  },
  'fdomiguez-flores-0': {
    nombre: 'Familia Dominguez Flores',
    pases: 0
  }
};

export function obtenerInvitadoActual() {
  const parametros = new URLSearchParams(window.location.search);
  const codigoInvitado = parametros.get('guest') || parametros.get('invitado') || parametros.get('code');

  if (!codigoInvitado) {
    return invitadoDefault;
  }

  return invitados[codigoInvitado.toLowerCase()] || invitadoDefault;
}
