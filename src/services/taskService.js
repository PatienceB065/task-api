import * as taskRepository from '../repositories/taskRepo.js';

export async function getTasks({ completed }) {
  let filter = {};

  if (completed === "true") filter.completed = true; 
  if (completed === "false") filter.completed = false;

  return taskRepository.findTasks(filter);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
