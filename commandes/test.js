"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "✅", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = ' *SUPREME-MD CURRENTLY ACTIVE* \n\nHello my name is *SUPREME-MD *\n ' + "i'm a whatsapp bot multi-device creatwd by supreme tech.\n\n";
    let d = '  *POWERED BY SUPREME TECH TEAM*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/201479b521f3c8c245147.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *Deltah* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Deltah-Tech*'
      let varmess=z+d
      var img='https://wallpapercave.com/uwp/uwp3842939.jpeg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
