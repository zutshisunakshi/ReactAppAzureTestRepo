import { connect } from 'react-redux';
import ToDoList from '../../components/react-todosList';

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList
  };
};

const ToDoListContainer = connect(mapStateToProps)(ToDoList);

export default ToDoListContainer;
