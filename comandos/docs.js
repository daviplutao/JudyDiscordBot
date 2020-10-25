const axios = require('axios') //npm i axios
const URL = "https://djsdocs.sorta.moe/v2/embed?src=stable";
module.exports.run = async(client, message, args) => {
     args = args.splice(0).join(" ");
     const qParams = new URLSearchParams({ q: args });
     axios.get(URL + `&${qParams.toString()}`)
      .then(response => {
      message.channel.send({ embed: response.data })
      })
};
