


new Vue({
    el:'#desafio',
    data:{
        nome:'renan',
        idade:26,
        link:'https://super.abril.com.br/wp-content/uploads/2018/05/humanidade-causa-cc3a2ncer-em-animais-selvagens.png'
    },
    methods:{
        numeroAleatorio(){
            return Math.floor(Math.random() * 10)
        }
    }

})