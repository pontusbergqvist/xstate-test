import { assign, createMachine } from "xstate";

export const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBUB7CC2AAgBsL0ICoBiawkggNwoGswJNFjyFSlanUbNWCXhUzoALrgr4A2gAYAutp2JQABxq5V6wyAAeiALQBWLQA4SWgCwBOe24CMAdnsAZi1-ADZ7ABoQAE9EUL8SewAmJ1Ck+z9Qjx9vfwBfPKiRHAJicioaBiYWfHYwACd6inqSI3oVADNm1GEMEvFyqSrZWvl8PiVzTV19SxNYMzV8SxsEW1DAkg83Jy17HySfUKOnbyjYhHjElLSMrJzfDwKivrEyyUr0erBhiEg2ADC3xUP0IAHdZkgQPNFhYoatbG4AiQfB4-GjQllMqlzohgps0qigqEdhkPB5Qs8QMU3qQgWAVKxaODaMoKiQAMrYChgpldeqoWgEIwAV2UbAAYt0hfhRcpaDh0LVIJDjKYpis7I5Qq4MoEfE4TkkPFo-LiEEF7CRUlokoETW5HD5nAVCiB8FQ4JYaaUiHN1UtNWtQrbdX59YbQk5jabzbYnB4SPE0VotNtjcb9lSfQMPtJqqx-QsNfC7CkfK4kuFnd5stHMXGkiQkqmgra3GmtJj7E4-NnXr7Bp9vr9IEXYctS2tPG5XKmtIE3FGUiazjFEEkO1tAvF9r3AlXTvZ+6JB3naB10Lh6JBWRRfuOS6AEfZEz2Q6cO-59llzZutNuu4GuGh49ie-RlPSjK1MyYBgne1CPoGU4ON4YYRkaJpmuuCCBE4LjxFkPabh4O4+IEx5ujmkHAqoMEsmy1CctyvIwfygrCmKSFws+WqhoEfgJvYIYHIEi7YRcSJWkc4S7vY+yZEirp5EAA */
  createMachine(
    {
      initial: "Todos loading",
      context: {
        todos: [],
        error: "",
        newTodoInput: "",
      },
      states: {
        "Todos loading": {
          invoke: {
            src: "loadTodos",
            onDone: [
              {
                target: "Todos are loaded",
                actions: "assignTodosToContext",
              },
            ],
            onError: [
              {
                target: "Todos failed to load",
                actions: "assignErrorToContext",
              },
            ],
          },
        },

        "Todos are loaded": {
          on: {
            "Create new": "Creating new todo",
          },
        },

        "Todos failed to load": {},

        "Creating new todo": {
          states: {
            "Showing form input": {
              on: {
                "Form input changed": {
                  target: "Showing form input",
                  internal: true,
                  actions: "assignTodoToContext",
                },
              },
            },
          },

          initial: "Showing form input",
        },
      },
    },
    {
      actions: {
        assignTodosToContext: assign((ctx, event) => {
          return {
            todos: event.data,
          };
        }),
        assignErrorToContext: assign((ctx, event) => {
          return {
            error: event.data.message,
          };
        }),
        assignTodoToContext: assign((ctx, event) => {
          return {
            newTodoInput: event.value,
          };
        }),
      },
    }
  );
