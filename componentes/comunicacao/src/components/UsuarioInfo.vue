<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome de Usuario : <strong>{{inverterNome()}}</strong></p>
        <p>Idade : <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn">Reiniciar Nome (callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props:{
        nome:{
            type:String,
            // required:true,
            default:'renan'
        },
        idade:Number,
        reiniciarFn:Function
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            // this.nome = 'Pedro',
            this.$emit('nomeMudou','Pedro')
        }
    },
    created(){
        barramento.quandoIdadeMudar(idade =>{
                this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
