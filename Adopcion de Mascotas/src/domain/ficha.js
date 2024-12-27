// src/domain/ficha.js
export default class Ficha {
  #nombre;
  #tipoMascota;
  #sexo;
  #edad;
  #raza;
  #tamano;
  #contacto;
  #descripcion;
  #imagen;

  constructor(
      nombre,
      tipoMascota,
      sexo,
      edad,
      raza,
      tamano,
      contacto,
      descripcion,
      imagen,
  ) {
    this.#nombre = nombre;
    this.#tipoMascota = tipoMascota;
    this.#sexo = sexo;
    this.#edad = edad;
    this.#raza = raza;
    this.#tamano = tamano;
    this.#contacto = contacto;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
  }

  getNombre() {
    return this.#nombre;
  }

  getTipoMascota() {
    return this.#tipoMascota;
  }

  getSexo() {
    return this.#sexo;
  }

  getEdad() {
    return this.#edad;
  }

  getRaza() {
    return this.#raza;
  }

  getTamano() {
    return this.#tamano;
  }

  getContacto() {
    return this.#contacto;
  }

  getDescripcion() {
    return this.#descripcion;
  }

  getImagen() {
    return this.#imagen;
  }

  setNombre(valor) {
    this.#nombre = valor;
  }

  setTipoMascota(valor) {
    this.#tipoMascota = valor;
  }

  setSexo(valor) {
    this.#sexo = valor;
  }

  setEdad(valor) {
    this.#edad = valor;
  }

  setRaza(valor) {
    this.#raza = valor;
  }

  setImagen(valor) {
    this.#imagen = valor;
  }

  setDescripcion(valor) {
    this.#descripcion = valor;
  }
}
