export interface ITask {
  id : string;
  taskName: string;
}

export const demoTasks : ITask[] = [
  {
    id:  Date.now().toString(),
    taskName: 'Read Book'
  },
  {
    id:  Date.now().toString(),
    taskName: 'Attend Meeting'
  },

]

export enum PageEnum {
  list,
  add,
  update,
}