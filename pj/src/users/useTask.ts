import type { TaskTypes } from "@/types";
import { onCreateTask, onFetchTasks } from "@/services";

export const useTask = () => {
  async function createNewTask(dto: TaskTypes) {
    // check title in valid ? show flash message
    if (!dto.title) {
      await onCreateTask(dto);
      await onFetchTasks();
    }
  }
  return { createNewTask };
};
