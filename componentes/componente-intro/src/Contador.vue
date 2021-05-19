<template>
    <div class="contador">
        <span>{{contador}}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            contador:0
        }
    },
    methods:{
        adicionar(){
            this.contador++
        },
        subtrair(){
            this.contador--
        }
    }
}
// scoped defini para o css ser apenas local -- o scoped pai passa para o filho mas nao passa para os filhos dos filhos 
</script>
<style scoped>
    span{
        border-bottom:1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }
    button{
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color:coral;
        color:#fff;
        margin-left:10px;
        outline: none;
    }
</style>