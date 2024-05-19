const arr = [
  { id: 1, name: "Task 1", status: "pending" },
  { id: 2, name: "Task 2", status: "completed" },
  { id: 3, name: "Task 3", status: "pending" },
  { id: 4, name: "Task 4", status: "pending" },
];

const another = () => findCompletedTask(arr);

function findCompletedTask(my_array) {
  const completed_task = arr.filter((t) => t.status === "completed");
  return completed_task;
}

console.log(another());
