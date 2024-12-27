// src/domain/solicitudvisit.js
class SolicitudVisita {
  #nombreCompleto;
  #correo;
  #celular;
  #comentario;

  constructor(nombre, correo, celular, comentario) {
    this.#nombreCompleto = nombre;
    this.#correo = correo;
    this.#celular = celular;
    this.#comentario = comentario;
  }

  getNombreCompleto() {
    return this.#nombreCompleto;
  }

  getCorreo() {
    return this.#correo;
  }

  getCelular() {
    return this.#celular;
  }

  getComentario() {
    return this.#comentario;
  }

  setNombreCompleto(valor) {
    this.#nombreCompleto = valor;
  }

  setCorreo(valor) {
    this.#correo = valor;
  }

  setCelular(valor) {
    this.#celular = valor;
  }

  setComentario(valor) {
    this.#comentario = valor;
  }
}

export default SolicitudVisita;
