// src/domain/solicitudadopt.js
export default class SolicitudAdopt {
  #nombre;
  #correo;
  #mensaje;
  #mascota;

  constructor(nombre, correo, mensaje, mascota) {
    this.#nombre = nombre;
    this.#correo = correo;
    this.#mensaje = mensaje;
    this.#mascota = mascota;
  }

  getNombre() {
    return this.#nombre;
  }

  getCorreo() {
    return this.#correo;
  }

  getMensaje() {
    return this.#mensaje;
  }

  getMascota() {
    return this.#mascota;
  }

  setNombre(valor) {
    this.#nombre = valor;
  }

  setCorreo(valor) {
    this.#correo = valor;
  }

  setMensaje(valor) {
    this.#mensaje = valor;
  }

  setMascota(valor) {
    this.#mascota = valor;
  }
}
