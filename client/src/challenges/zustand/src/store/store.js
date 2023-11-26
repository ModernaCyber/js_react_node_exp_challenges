import { create } from "zustand";
import { devtools, persist} from "zustand/middleware"
const store = (set) => ({
    // tasks: [{ title: 'Test Task', state: 'PLANNED' }],
    tasks: [],
    draggedTask: null,
    addTask: (title, state) => 
    set(store_state => ({tasks: [...store_state.tasks,{ title: title, state: state}]}),
    false,
    'AddTask Label'
    ),
    deleteTask: (title) => 
    set(store_state => ({tasks: store_state.tasks.filter((task)=>task.title !== title)})),
    setDraggedTask:(title)=>set({draggedTask:title}),
    moveTask: (title, state) =>set((store_state =>({tasks: store_state.tasks.map(task => task.title === title ? {...task, state} : task )})))
     
})
 
const options = {
    name:'store'
}
export const useStore = create(persist(devtools(store),options))