import {useState} from "react";
function App() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Learn React",
            completed: false
        },
        {
            id: 2,
            title: "Learn JS",
            completed: false
        },
        {
            id: 3,
            title: "Learn HTML",
            completed: false
        },
        {
            id: 4,
            title: "Learn CSS",
            completed: false
        }
    ])


  return (
    <>
        <div className={"bg-slate-500 w-screen h-screen flex flex-col justify-start pt-10"}>
            <h1 className={"text-center justify-center text-white text-3xl pb-5 uppercase"}>To Do list</h1>
            <div className={"flex justify-center pt-5 drop-shadow-md bg-slate-400 rounded-md w-1/2 self-center"}>
                {todos.map((todo) => (
                    <div className={"bg-slate-700 rounded-md text-white drop-shadow-md h-auto p-5 m-5 w-1/2 text-center "} key={todo.id}>
                        <div>
                            <p>{todo.title}</p>
                            <p>{todo.id}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default App
