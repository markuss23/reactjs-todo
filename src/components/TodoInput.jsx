import PropTypes from "prop-types";

const TodoInput = ({ handleAddTodo }) => {
  return (
    <input
      className="form-control"
      type="text"
      placeholder="Add a new todo"
      onChange={(e) => handleAddTodo(e.target.value)}
    />
  );
};

TodoInput.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default TodoInput;
