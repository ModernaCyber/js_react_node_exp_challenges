import { create } from "zustand";

const store = (set) => ({
    tasks: [{ title: 'Test Task', state: 'PLANNED' }],
    addTask: (title, state) => 
    set(store_state => ({tasks: [...store_state.tasks,{ title: title, state: state}]}))
})
 
export const useStore = create(store)