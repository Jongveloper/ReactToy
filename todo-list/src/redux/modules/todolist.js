// Actions
const LOAD = "todo/LOAD";
const CREATE = "todo/CREATE";
const DELETE = "todo/DELETE";
const EDIT = "todo/EDIT";
// initialState
const initialState = {
  list: ["리스트를 누르면 상세페이지로 이동해요!"],
};

// Action Creators
export const loadTodo = (todo) => {
  return { type: LOAD, todo };
};

export const createTodo = (todo) => {
  return { type: CREATE, todo };
};

export const deleteTodo = (todo) => {
  return { type: DELETE, todo };
};
export const editTodo = (index, todo) => {
  return { type: EDIT, todo, index };
};

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "todo/LOAD":
      return state;

    case "todo/CREATE":
      const new_todo_list = [...state.list, action.todo];
      return { list: new_todo_list };

    case "todo/DELETE":
      const todo_list = state.list.filter((l, idx) => {
        if (idx !== action.todo) {
          return l;
        }
      });
      return { list: todo_list };
    case "todo/EDIT": {
      const edit = action.todo;
      const edit_list = state.list.map((l, idx) => {
        if (idx === action.index) {
          return edit;
        } else {
          return l;
        }
      });
      console.log(edit_list);
      return { list: edit_list };
    }
    default:
      return state;
  }
}
