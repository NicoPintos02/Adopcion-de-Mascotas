// src/domain/Tests/solicitudvisit.test.js
import SolicitudVisita from '../solicitudvisit';

describe('SolicitudVisita Class', () => {
  let solicitud;

  beforeEach(() => {
    solicitud = new SolicitudVisita(
        'John Doe',
        'john.doe@example.com',
        '1234567890',
        'Comentario de prueba',
    );
  });

  test('should create an instance of SolicitudVisita with correct properties', () => {
    expect(solicitud.getNombreCompleto()).toBe('John Doe');
    expect(solicitud.getCorreo()).toBe('john.doe@example.com');
    expect(solicitud.getCelular()).toBe('1234567890');
    expect(solicitud.getComentario()).toBe('Comentario de prueba');
  });

  test('should set and get nombreCompleto correctly', () => {
    solicitud.setNombreCompleto('Jane Doe');
    expect(solicitud.getNombreCompleto()).toBe('Jane Doe');
  });

  test('should set and get correo correctly', () => {
    solicitud.setCorreo('jane.doe@example.com');
    expect(solicitud.getCorreo()).toBe('jane.doe@example.com');
  });

  test('should set and get celular correctly', () => {
    solicitud.setCelular('0987654321');
    expect(solicitud.getCelular()).toBe('0987654321');
  });

  test('should set and get comentario correctly', () => {
    solicitud.setComentario('Nuevo comentario de prueba');
    expect(solicitud.getComentario()).toBe(
        'Nuevo comentario de prueba',
    );
  });
});
