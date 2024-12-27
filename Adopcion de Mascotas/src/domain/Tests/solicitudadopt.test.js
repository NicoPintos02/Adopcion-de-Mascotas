// src/domain/Tests/solicitudadopt.test.js
import SolicitudAdopt from '../solicitudadopt';

describe('SolicitudAdopt', () => {
  let solicitud;

  beforeEach(() => {
    solicitud = new SolicitudAdopt(
        'Juan',
        'juan@example.com',
        'Quiero adoptar un perro',
        'Perro',
    );
  });

  test('debería inicializar correctamente con el constructor', () => {
    expect(solicitud.getNombre()).toBe('Juan');
    expect(solicitud.getCorreo()).toBe('juan@example.com');
    expect(solicitud.getMensaje()).toBe('Quiero adoptar un perro');
    expect(solicitud.getMascota()).toBe('Perro');
  });

  test('debería obtener el nombre correctamente', () => {
    expect(solicitud.getNombre()).toBe('Juan');
  });

  test('debería obtener el correo correctamente', () => {
    expect(solicitud.getCorreo()).toBe('juan@example.com');
  });

  test('debería obtener el mensaje correctamente', () => {
    expect(solicitud.getMensaje()).toBe('Quiero adoptar un perro');
  });

  test('debería obtener la mascota correctamente', () => {
    expect(solicitud.getMascota()).toBe('Perro');
  });

  test('debería establecer el nombre correctamente', () => {
    solicitud.setNombre('Pedro');
    expect(solicitud.getNombre()).toBe('Pedro');
  });

  test('debería establecer el correo correctamente', () => {
    solicitud.setCorreo('pedro@example.com');
    expect(solicitud.getCorreo()).toBe('pedro@example.com');
  });

  test('debería establecer el mensaje correctamente', () => {
    solicitud.setMensaje('Me gustaría adoptar un gato');
    expect(solicitud.getMensaje()).toBe('Me gustaría adoptar un gato');
  });

  test('debería establecer la mascota correctamente', () => {
    solicitud.setMascota('Gato');
    expect(solicitud.getMascota()).toBe('Gato');
  });
});
