export default function reducer(state=
{todos:''},action)
{
    switch(action.type)
    {
        case 'TODO_ADD':
        {
             return {...state, todos:action.payload};
        }
        default:
        return state;
    }
}