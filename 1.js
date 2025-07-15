let libro = {
    titulo : "cien años de soledad", 
    autor : "Gabriel Garcia Marquez",
    prestado : false, 
    prestar : function () {
        if (this.prestado === false) {
            this.prestado = true
            return "Libro prestado exitosamente" 
        } else{
            return "El libro no esta disponible en este momento"
        }
    }
}
console.log (libro.prestar());
console.log (libro.prestar());  