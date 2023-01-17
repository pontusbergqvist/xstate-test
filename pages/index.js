import { useMachine } from "@xstate/react";
import { machine } from "../machines/machine";

export default function Home() {
  const [state, send] = useMachine(machine, {
    services: {
      loadTodos: async () => {
        // throw new Error("veri bad error");
        return ["Sak 1", "Sak 2"];
      },
    },
  });
  return (
    <div>
      <p>{JSON.stringify(state.value)}</p>
      <p>{JSON.stringify(state.context)}</p>
      {state.matches("Todos are loaded") && (
        <button onClick={() => send({ type: "Create new" })}>Create new</button>
      )}
      {state.matches("Creating new todo") && (
        <input type="text" onChange={(e) => send({type: "Form input changed", value: e.target.value})} />
      )}
    </div>
  );
}
