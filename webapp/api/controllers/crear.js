module.exports = {

  friendlyName: 'Crear',
  description: 'Crear something.',
  inputs: {

  },

  exits: {
    success: {
      responseType: 'redirect'
    }
  },
  
  fn: async function (inputs,exits) {

    const nuevo = await Vendedor.create({
      nombre: "Pedro",
      desde: 2020
    })
    
    // All done.
    return exits.success("/");
  }

};
