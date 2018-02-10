import axios from "axios";



export default {
  ustawienia: {
    getUstawieniaKonfiguracja: ()=>
      axios.get("http://192.168.0.151:8082/api/ustawienia/konfiguracja")
        .then(res=> res.data.ustawienia)
        .catch(err=>console.log(err))
  },
  rejestr: {
    wyslijZmiane: (adres, value) => 
      axios.post("http://192.168.0.151:8082/api/rejestr/wy", {adres, value})
        .catch(err=>console.log(err)),
    wyslijZmianeTemp: (adres, value) => 
        axios.post("http://192.168.0.151:8082/api/rejestr/temp", {adres, value})
          .catch(err=>console.log(err))
  }
}