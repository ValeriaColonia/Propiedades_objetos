let listaCompras = {
    productos: [],
    
    agregar: function(producto) {
        this.productos.push(producto);  
    },

    mostrar: function() {
        for (let i = 0; i < this.productos.length; i++) {
            console.log((i + 1) + ". " + this.productos[i]);  
        }
    }
};

listaCompras.agregar("manzana")
listaCompras.agregar("papel")
listaCompras.agregar("banano")
listaCompras.mostrar();



