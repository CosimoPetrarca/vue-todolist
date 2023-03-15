'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            todos: [
                {
                    text: 'Andare a fare la spesa',
                    done: false
                },
                {
                    text: 'Portare mia moglie a comprare qualsiasi cosa',
                    done: true
                },
                {
                    text: 'Regalare alla bambina una rosa',
                    done: false
                },
                {
                    text: 'Ubriacarsi con gli amici',
                    done: false
                },
                {
                    text: 'Giocare a Red Ded Redemption 2',
                    done: true
                },
                {
                    text: 'Portare la macchina al lavaggio',
                    done: false
                }
            ]
        }
    }

}).mount('#app')