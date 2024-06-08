import { FaEnvelopeOpenText, FaMinus, FaPen } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../utils/todoSlice";
import { useState } from "react";
const Home = () => {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const todos = useSelector((store) => store.alltodos.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const handleUpdate = () => {
    if (editId) {
      dispatch(updateTodo({ id: editId, text: editText }));
      setEditId(null);
    }
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleRemove = (itemId) => {
    dispatch(removeTodo(itemId));
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen font-medium">
      <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
        {/* Component Start */}

        <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
          <div className="flex items-center mb-6">
            <FaEnvelopeOpenText className="text-blue-600 w-6 h-6" />
            <h4 className="font-semibold ml-3 text-lg">Hanni Todos</h4>
          </div>
          <div>
            {todos.map((todo) => (
              <li key={todo.id} className="flex justify-between text-center">
                <input
                  className="hidden"
                  type="checkbox"
                  id={`task_${todo.id}`}
                  defaultChecked=""
                />
                <label
                  className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
                  htmlFor={`task_${todo.id}`}
                >
                  <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full"></span>
                  {editId === todo.id ? (
                    <form onSubmit={handleUpdate}>
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                      />
                    </form>
                  ) : (
                    <span className="ml-5">{todo.text}</span>
                  )}
                </label>

                <div className="mt-2.5">
                  <button
                    className="cursor-pointer px-2"
                    onClick={() => handleEdit(todo)}
                  >
                    <FaPen />
                  </button>

                  <button
                    className="cursor-pointer px-2"
                    onClick={() => handleRemove(todo.id)}
                  >
                    <FaMinus />
                  </button>
                </div>
              </li>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded"
          >
            <IoMdAddCircle className="w-5 h-5" />
            <input
              className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="add a new task"
            />
            <button type="submit"></button>
          </form>
        </div>
        {/* Component End  */}
      </div>
    </div>
  );
};

export default Home;
