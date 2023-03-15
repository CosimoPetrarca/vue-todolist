'use strict'

const { createApp } = Vue

createApp({
    data() {
        return {
            title: " Vue To Do List",

            newTodo: "",

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
                    done: true
                }
            ]
        }
    },

   
    methods: {
         /* eliminare dalla lista */
        removeTodo(index) {
            this.todos.splice(index, 1);
        },

        /* aggiungere alla lista */
        addTodo() {
            console.log(this.addTodo)
            if (this.newTodo !== "") {
                this.todos.push({
                    text: this.newTodo,
                    done: false
                });
                this.newTodo = "";
            }
        }
    }

}).mount('#app')

