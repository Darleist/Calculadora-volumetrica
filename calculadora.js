// let alt_tq_grande = document.getElementById('tanque-grande')
// let alt_tq_pequeno = document.getElementById('tanque-pequeno')

class Calculadora {
    constructor(tanque, radio, comprimento, altura){
        this.tanque = tanque;
        this.radio = radio;
        this.comprimento = comprimento;
        this.altura = altura
    }
    volumeTotal () {
        return ((this.radio * this.radio) * Math.PI * this.comprimento)
    }
}
const tanqueGrande = new Calculadora (`grande`, 1.5, 7.1, 0)
tanqueGrande.volumeTotal()