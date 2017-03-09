export default function reducer(state=
{todos: [] },action)
{
    switch(action.type)
    {
        case 'TODO_ADD':
        {
            var newtodo={
                name:action.payload,
                id:Date.now()
            }
             return {...state, todos:state.todos.concat(newtodo)};
        }
        default:
        return state;
    }
}