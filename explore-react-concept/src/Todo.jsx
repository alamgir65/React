function Todo({task,isDone}){
    if(isDone){
        return <li>Finished : {task}</li>
    }
    return <li>Working on : {task}</li>
}

export default Todo