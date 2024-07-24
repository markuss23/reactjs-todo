import { useState } from "react";
import PropTypes from "prop-types";
import TodoAdd from "./TodoAdd";
import TodoInput from "./TodoInput";

const TodoControl = ({ handleAddTodo }) => {
  const [error, setError] = useState(true);
  const [inputValue, setInputValue] = useState(""); // Add state for input value

  const handleAdd = () => {
    handleAddTodo({
      title: inputValue,
      completed: false,
    });
  };

  const handleError = (value) => {
    setError(value);
  };

  const handleInputChange = (value) => {
    console.log(value);
    if (value) {
      handleError(false);
      setInputValue(value);
    } else {
      handleError(true);
    }
  };

  return (
    <div className="input-group">
      <TodoInput handleAddTodo={handleInputChange} />
      <TodoAdd error={error} handleClick={handleAdd} />
    </div>
  );
};

TodoControl.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default TodoControl;
