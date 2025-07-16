let Carrito = {
    productos: [],
    total: 0,
    agregarProducto: function(nombre, precio) {
        this.productos.push({ nombre: nombre, precio: precio });
        this.total += precio;
        return "Producto agregado: " + nombre + " - Precio: " + precio + " - Total: " + this.total;
    },
    calcularDescuento: function() {
        if (this.total > 100) {
            let descuento = this.total * 0.10;
            let totalConDescuento = this.total - descuento;
            return "Total: " + this.total + " Con 10% de descuento: " + totalConDescuento;
        } else if (this.total > 50 && this.total <= 100) {
            let descuento = this.total * 0.05;
            let totalConDescuento = this.total - descuento;
            return "Total: " + this.total + " Con 5% de descuento: " + totalConDescuento;
        } else {
            return "Total: " + this.total + " No aplica descuento.";
        }
    }
};

// Uso correcto:
console.log(Carrito.agregarProducto("pan", 0));
console.log(Carrito.agregarProducto("huevos", 50));
console.log(Carrito.calcularDescuento());

