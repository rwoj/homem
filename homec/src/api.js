import axios from "axios";

export default {
  ustawienia: {
    getUstawieniaKonfiguracja: ()=>
      axios.get("/api/ustawienia/konfiguracja")
        .then(res=>res.data.ustawienia)
        .catch(err=>console.log(err)),
    getUstawieniaKonfiguracjaTemp: ()=>
      axios.get("/api/ustawienia/konfiguracjaTemp")
      .then(res=>res.data.ustawienia)
      .catch(err=>console.log(err))
  },
  rejestr: {
    getCurrentState: () => 
      axios.get("/api/rejestr/currentState")
        .then(res=>res.data)
        .catch(err=>console.log(err)),
    wyslijZmiane: (adres, value) => 
      axios.post("/api/rejestr/wy", {adres, value})
        .catch(err=>console.log(err)),
    wyslijZmianeTemp: (adres, value) => 
        axios.post("/api/rejestr/temp", {adres, value})
          .catch(err=>console.log(err))
  }
};
