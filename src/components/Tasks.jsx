import NewTask from "./NewTask";
export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-stone-700 mb-4">TASKS</h2>
      <NewTask onAdd={onAdd}></NewTask>
      {tasks.length < 1 ? (
        <p className="text-stone-800 my-4">
          This project doesn't have any task yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button className="text-stone-700 hover:text-red-400" onClick={()=>onDelete(task.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
