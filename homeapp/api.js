import axios from "axios"

export default {
  ustawienia: {
    getUstawieniaKonfiguracja: ()=>
      axios.get("http://192.168.0.133:8081/api/ustawienia/konfiguracja")
        .then(res=> res.data.ustawienia)
        .catch(err=>console.log(err)),
    getUstawieniaKonfiguracjaTemp: ()=>
      axios.get("http://192.168.0.133:8081/api/ustawienia/konfiguracjaTemp")
        .then(res=> res.data.ustawienia)
        .catch(err=>console.log(err))
  },
  rejestr: {
    getCurrentState: () => 
    axios.get("http://192.168.0.133:8081/api/rejestr/currentState").then(res=>res.data)
      .catch(err=>console.log(err)),
    wyslijZmiane: (adres, value) => 
      axios.post("http://192.168.0.133:8081/api/rejestr/wy", {adres, value})
        .catch(err=>console.log(err)),
    wyslijZmianeTemp: (adres, value) => 
        axios.post("http://192.168.0.133:8081/api/rejestr/temp", {adres, value})
          .catch(err=>console.log(err))
  }
}