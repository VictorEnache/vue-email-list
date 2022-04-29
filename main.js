const app =  new Vue ({
    el: '#root',

    data:{
        elenco_mail:[]
    },

    mounted(){

        for(let i = 0; i<10;i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(returned =>{
                console.log(returned.data)
                this.elenco_mail.push(returned.data.response)
            })
        }
        
    },


})