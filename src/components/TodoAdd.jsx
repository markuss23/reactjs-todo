import PropTypes from "prop-types";

const TodoAdd = ({ error, handleClick }) => {
  return (
    <button className="btn btn-success" onClick={handleClick} disabled={error}>
      Add Todo
    </button>
  );
};

TodoAdd.propTypes = {
  error: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TodoAdd;
