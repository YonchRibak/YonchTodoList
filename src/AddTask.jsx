import AddTodos from "./AddTodos";
import Collaborators from "./Collaborators";

const handleSubmit = (event) => {
  event.preventDefault();

  console.log("form submitted");
};

const AddTask = () => {
  return (
    <div className="container">
      <div className="form-container">
        <form className="form add__task-form" action="">
          <input className="title-input" type="text" placeholder="Task Title" />
          <select
            className="in__charge-selector"
            name="selectInCharge"
            id="selectInCharge"
            placeholder="Who's in charge of this task?"
          >
            {<Collaborators />}
          </select>
          <select
            name="collaborators"
            id="collaborators"
            placeholder="Who's collaborating in this task?"
          >
            {<Collaborators />}
          </select>
          {<AddTodos />}
          <button className="btn btn__task-submit" onClick={handleSubmit}>
            Submit Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
