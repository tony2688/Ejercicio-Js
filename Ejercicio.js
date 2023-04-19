let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

 //ArrayCuentas*//
let banco = {                               //objeto banco*//
    clientes: arrayCuentas,                            //utiliza el arraycuenta con la propieda llamada clientes*//
    consultarCliente: function(nombre) {                         //funcion consultar.clientes*/
      let clienteEncontrado = this.clientes.find(cliente => cliente.titularCuenta === nombre);  //Funcion creada para encontrar cliente y retornar--Metodo utiliza el método "find" que realiza la busqueda del cliente cuyo nombre coincide con el que se pasa de parametro*//
      return clienteEncontrado;                                                                 //si se encuentra se devuelve el objeto cliente correspondiente*//
    },
    deposito: function(titular, cantidad) {                                 //Se crea una nueva funcion deposito que consulta los parametros titular y cantidad*//
        let cliente = this.consultarCliente(titular);                       //tomamos de la funcion consultarCluilente solo el Titular*//
        if (cliente) {                                                       //incio un bulce donde si el cliente exite cargaria el saldo*//
          cliente.saldoEnPesos += cantidad;                                  //se realiza la busqueda del Cliente y el saldo en pesos que posee arrojando el resultado de la suma de los datos*//
          console.log(`Depósito realizado, su nuevo saldo es: ${cliente.saldoEnPesos}`);  //en la consola si el cliente realizo con exito el deposito le saldria el menaje en caso contrario saldria un error representado en el otro mensaje*//
        } else {
          console.log(`El cliente ${titular} no existe`);
        }
    },
    extraccion: function(titular, monto) {                                   //Se crea una nueva funcion extraccion que consulta los parametros titular y monto*//
        let cliente = this.consultarCliente(titular);                        
        if (cliente) {                                                       //realizo un bucle general para revisar el cliente si el cliente exite pasamos al otro bucle donde se revisa donde el monto ingresado sea mayor a extrar*/
          if (cliente.saldoEnPesos >= monto) {
            cliente.saldoEnPesos -= monto;                                   //se pasa hacer la resta de los montos cargado menos la extraccion = al nuevo total*/
            console.log(`Extracción realizada correctamente, su nuevo saldo es: ${cliente.saldoEnPesos}`);            //en la consola noss muesta si la extracion fue correctamente realizada en caso contrario mostraria los menajes siguientes*//
          } else {
            console.log(`Fondos insuficientes`);
          }
        } else {
          console.log(`El cliente ${titular} no existe`);
        }
    },
};

let nombre = {
nombrecliente: 
} 