import { useMachine } from "@xstate/react";
import { machine } from "../machines/machine";

let todos = ["Sak 1", "Sak 2", "Sak 3", "Sak 4"]

export default function Home() {
  const [state, send] = useMachine(machine, {
    services: {
      loadTodos: async () => {
        return Array.from(todos);
      },
      saveTodo: async (ctx, event) => {
        todos = [...todos, ctx.newTodoInput];
      },
      deleteTodo: async (ctx, event) => {
        todos = todos.filter((item, i) => event.value.id != i)
      }
    },
  });
  return (
    <div>
      <p>{JSON.stringify(state.value)}</p>
      <ul>
        {state.context.todos.map((item, index) => (
          <li id={index} key={index} onClick={(event) => send({ type: "Delete", value: event.target })}>{item}</li>
        ))}
      </ul>
      {state.matches("Todos are loaded") && (
        <button onClick={() => send({ type: "Create new" })}>Create new</button>
      )}
      {state.matches("Creating new todo") && (
        <div>
          <input type="text" onKeyDown={(e) => e.key === "Enter" && send("Submit")} onChange={(e) => send({type: "Form input changed", value: e.target.value})} />
          <br /> 
          <button onClick={() => send("Submit")}>Submit todo</button>
        </div>
      )}
    </div>
  );
}
