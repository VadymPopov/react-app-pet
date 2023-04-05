import { createSlice, nanoid } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const tasksInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Repeat everything", completed: false },
    { id: 5, text: "Build amazing apps", completed: false },
    { id: 6, text: "Find a job", completed: false },
  ];

  const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
      tasks: tasksInitialState
    },
    reducers: {
      addTask: {
        reducer(state, action) {
          state.tasks.push(action.payload);
        },
        prepare(text) {
          return {
            payload: {
              text,
              id: nanoid(),
              completed: false,
            },
          };
        },
      },
      deleteTask(state, action) {
        const index = state.tasks.findIndex(task => task.id === action.payload);
        state.tasks.splice(index, 1);
      },
      toggleCompleted(state, action) {
        for (const task of state.tasks) {
          if (task.id === action.payload) {
            task.completed = !task.completed;
            break;
          }
        }
      },
      deleteAllCompleted(state){
         state.tasks = state.tasks.filter(task => !task.completed);
       
      }
    },
  });

  const persistConfig = {
    key: 'tasks',
    version: 1,
    storage,
};
  
  export const { addTask, deleteTask, toggleCompleted, deleteAllCompleted } = tasksSlice.actions;
  export const tasksReducer = persistReducer(persistConfig, tasksSlice.reducer);