console.log('Hi, I am java and I am working fine');

// ↓ → ← ↑ ✓ ✕ :utilities

const { createApp } = Vue;

createApp({
    data() {
        return {
            greeting: 'Ciao Antonio',
            isLogged: false, //PRIMA CONDIZIONE - parte da falsa
            casoUno: 'Sono IF',
            casoDue: 'Sono ELSE',
            oggetto: {
                esempio1: 'Ciao',
                esempio2: 'Come va?'
            }
        }
    },
    methods: {
        functionExample: function () {
            return  console.log('I am Vue and I am working properly');
        },
        
    }
}).mount('#app');


