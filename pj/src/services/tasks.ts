import { fetchApi } from "@/services/api";
import type { TaskTypes } from "@/types";

export const onFetchTasks = async () => {
  const result = await fetchApi.get("/tasks/list");

  return result?.data.tasks;
};

export const onCreateTask = async (dto: TaskTypes) => {
  const result = await fetchApi.post("/tasks/new", dto);

  return result?.data.task;
};
