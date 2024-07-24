import PropTypes from "prop-types";

const TodoItem = ({ todo, onComplete }) => {
  return (
    <li className="list-group-item">
      {todo.title}
      {todo.completed ? (
        <div className="btn-sm float-end">Completed</div>
      ) : (
        <button
          className="btn btn-danger btn-sm float-end"
          onClick={() => onComplete(todo.id)}
        >
          Complete
        </button>
      )}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default TodoItem;
