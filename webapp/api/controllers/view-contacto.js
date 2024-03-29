module.exports = {


  friendlyName: 'View contacto',


  description: 'Display "Contacto" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/contacto'
    }

  },


  fn: async function (inputs,exits) {

    // Respond with view.


    const vendedores = await Vendedor.find()

    return exits.success({vendedores : vendedores});

  }


};
