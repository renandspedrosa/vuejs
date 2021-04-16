new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        exibirAlerta(){
            alert("Alerta exibido")
        },
        armazenar(event){
           this.valor = event.target.value
        }
    }
})