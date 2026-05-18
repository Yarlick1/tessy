export const invitadoDefault = {
  nombre: 'Invitado especial',
  pases: 1
};

export const invitados = {
  'fgaray-colin': {
    nombre: 'Familia Garay Colin',
    pases: 5
  },
  'fvazquez-colin': {
    nombre: 'Familia Vazquez Colin',
    pases: 2
  },
  'fcolin-monrroy': {
    nombre: 'Familia Colin Monrroy',
    pases: 5
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
