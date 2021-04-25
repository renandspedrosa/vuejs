new Vue({
	el: '#desafio',
	data: {
		classe1:'destaque',
		classe2:'fundo',
		classe3:'quadrado',
		classe4:'',
		classe5:'quadrado',
		classe6:'fundo',
		boleano:true
	},
	methods: {
		iniciarEfeito(){
			setInterval(()=>{
				this.classe1 = this.classe1 == 'destaque' 
					? 'encolher':'destaque'
			},1000)
		 },
		setBoleano(event){
			if(event.target.value == "true") {
				this.perigo = true
			} else if(event.target.value == "false") {
				this.perigo = false
			}
		}
		// iniciarProgresso() {
		// }
	}
})
