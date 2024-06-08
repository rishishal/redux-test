import { FaEnvelopeOpenText } from "react-icons/fa";
import { IoIosRadioButtonOff, IoMdAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";
const Home = () => {
  const todos = useSelector((store) => store.alltodos.todos);
  return (
    <div className="flex items-center justify-center w-screen h-screen font-medium">
      <div className="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">
        {/* Component Start */}

        <div className="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">
          <div className="flex items-center mb-6">
            <FaEnvelopeOpenText className="text-blue-600 w-6 h-6" />
            <h4 className="font-semibold ml-3 text-lg">Hanni Jobs</h4>
          </div>
          <div>
            {todos.map((todo) => (
              <div key={todo.id}>
                <input
                  className="hidden"
                  type="checkbox"
                  id="task_1"
                  defaultChecked=""
                />
                <label
                  className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100"
                  htmlFor="task_1"
                >
                  <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full"></span>
                  <span className="ml-4 text-sm">{todo.text}</span>
                </label>
              </div>
            ))}
          </div>
          <div>
            <input
              className="hidden"
              type="checkbox"
              id="task_2"
              defaultChecked=""
            />
          </div>
          <button className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded">
            <IoMdAddCircle className="w-5 h-5" />
            <input
              className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium"
              type="text"
              placeholder="add a new task"
            />
          </button>
        </div>
        {/* Component End  */}
      </div>
    </div>
  );
};

export default Home;
