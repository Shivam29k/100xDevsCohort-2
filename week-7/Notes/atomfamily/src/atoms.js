import { atomFamily, selectorFamily } from 'recoil'
import { TODOS } from './todos'
import axios from 'axios'

// export const todosAtomFamily = atomFamily({
//   key: 'todo',
//   default: id => {
//     return TODOS.find(todo => todo.id === id)
//   }
// })


// Asynchronous atom family

export const todosAtomFamily = atomFamily({
    key: 'todo',
    default: selectorFamily({
        key: 'totoSelector',
        get: function(id){
            return async ({get}) => {
                await new Promise(resolve => setTimeout(resolve, 5000));
                const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
                return res.data.todo;
            }
        }
    })
})