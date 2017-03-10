export default function reducer(state=
{todos: [] },action)
{
    switch(action.type)
    {
        case 'TODO_ADD':
        {
            var newtodo={
                name:action.payload,
                id:Date.now(),
                completed: false
            }
             return {...state, todos: [...state.todos, newtodo]};
        }

        case 'TODO_DELETE':
        {
            
            var arr=state.todos.filter(function(todo){return !matchesID(todo);})
            function matchesID(todo) {
                 return todo.id === action.payload;
            }

           return {...state, todos: arr};
        }

        case 'TODO_COMPLETE':
        {
            var index=state.todos.findIndex((todo)=>todo.id==action.payload);
            state.todos[index].completed=true;
            console.log(state);
            return {...state};
        }
        default:
        return state;
    }
}