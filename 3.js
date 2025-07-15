let reproductor = {
    nombre: "Ser de ti",
    estado: "detenido",

    play: function () {
        if (this.estado === "detenido" || this.estado === "pausado") {
            this.estado = "reproduciendo"
            return this.nombre + " se esta reprocuciendo en el dispositivo"
        } else if (this.estado === "reproduciendo") {
            return this. nombre + " ya se encuentra en reproducción"
        }
    },
    pausar: function () {
        if (this.estado === "reproduciendo") {
            this.estado = "pausado"
            return this.nombre + " pausada"
        } else {
            return "No hay música reproduciéndose."
        }
    },
    detener: function () {
        this.estado = "detenido"
        return "Música detenida."
    }
}
console.log (reproductor.play()); 
console.log (reproductor.pausar()); 
console.log (reproductor.detener()); 