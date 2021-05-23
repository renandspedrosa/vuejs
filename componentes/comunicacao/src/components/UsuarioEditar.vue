<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade: <strong>{{idade}}</strong></p>
        <button @click="alterarIdade">Altera Idade</button>
        <button @click="reiniciarIdade">Reiniciar idade (callback)</button>

    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props:{
            idade:Number, 
            reiniciarIdade:Function
    },
    methods:{
        alterarIdade(){
            this.idade +=1
            barramento.alterarIdade(this.idade)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
