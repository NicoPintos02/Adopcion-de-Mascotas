// src/domain/Tests/ficha.test.js
import Ficha from '../ficha';

describe('Ficha', () => {
  let ficha;

  beforeEach(() => {
    ficha = new Ficha(
        'Bobby',
        'Perro',
        'Macho',
        3,
        'Labrador',
        'Grande',
        'contacto@example.com',
        'Muy amigable',
        'imagen.jpg',
    );
  });

  test('Debe inicializar correctamente los atributos', () => {
    expect(ficha.getNombre()).toBe('Bobby');
    expect(ficha.getTipoMascota()).toBe('Perro');
    expect(ficha.getSexo()).toBe('Macho');
    expect(ficha.getEdad()).toBe(3);
    expect(ficha.getRaza()).toBe('Labrador');
    expect(ficha.getTamano()).toBe('Grande');
    expect(ficha.getContacto()).toBe('contacto@example.com');
    expect(ficha.getDescripcion()).toBe('Muy amigable');
    expect(ficha.getImagen()).toBe('imagen.jpg');
  });

  test('Debe obtener el nombre correctamente', () => {
    expect(ficha.getNombre()).toBe('Bobby');
  });

  test('Debe obtener el tipo de mascota correctamente', () => {
    expect(ficha.getTipoMascota()).toBe('Perro');
  });

  test('Debe obtener el sexo correctamente', () => {
    expect(ficha.getSexo()).toBe('Macho');
  });

  test('Debe obtener la edad correctamente', () => {
    expect(ficha.getEdad()).toBe(3);
  });

  test('Debe obtener la raza correctamente', () => {
    expect(ficha.getRaza()).toBe('Labrador');
  });

  test('Debe obtener el tamaño correctamente', () => {
    expect(ficha.getTamano()).toBe('Grande');
  });

  test('Debe obtener el contacto correctamente', () => {
    expect(ficha.getContacto()).toBe('contacto@example.com');
  });

  test('Debe obtener la descripción correctamente', () => {
    expect(ficha.getDescripcion()).toBe('Muy amigable');
  });

  test('Debe obtener la imagen correctamente', () => {
    expect(ficha.getImagen()).toBe('imagen.jpg');
  });

  test('Debe establecer el nombre correctamente', () => {
    ficha.setNombre('Rocky');
    expect(ficha.getNombre()).toBe('Rocky');
  });

  test('Debe establecer el tipo de mascota correctamente', () => {
    ficha.setTipoMascota('Gato');
    expect(ficha.getTipoMascota()).toBe('Gato');
  });

  test('Debe establecer el sexo correctamente', () => {
    ficha.setSexo('Hembra');
    expect(ficha.getSexo()).toBe('Hembra');
  });

  test('Debe establecer la edad correctamente', () => {
    ficha.setEdad(5);
    expect(ficha.getEdad()).toBe(5);
  });

  test('Debe establecer la raza correctamente', () => {
    ficha.setRaza('Beagle');
    expect(ficha.getRaza()).toBe('Beagle');
  });

  test('Debe establecer la descripción correctamente', () => {
    ficha.setDescripcion('Muy juguetón');
    expect(ficha.getDescripcion()).toBe('Muy juguetón');
  });

  test('Debe establecer la imagen correctamente', () => {
    ficha.setImagen('nuevaImagen.jpg');
    expect(ficha.getImagen()).toBe('nuevaImagen.jpg');
  });
});
