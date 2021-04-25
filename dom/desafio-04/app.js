new Vue({
	el: '#desafio',
	data: {
		iniciarEfeito: true,
		classe1:'fundo',
		classe2:'letras',
		cor:'red',
		classeInformada:'fundo',
		boolean:true,
		porcentagem:0
	},
	computed:{
		aplicaEfeito(){
			return {
				encolher: this.iniciarEfeito,
				destaque: !this.iniciarEfeito
			}
		}
	},
	methods: {
		iniciarProgresso() {
			if(this.porcentagem>=10){
				return false
			}else{
				this.porcentagem +=10
			}
		}
	},
	watch:{
		iniciarProgresso(){
            setInterval(()=>{
                this.porcentagem += 10
            },500)
		}
	}
})
