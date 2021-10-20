import React, { useState } from "react";

function List() {
  const [list, setList] = useState([{ title: "First", completed: false }]);
  const [openForm, setOpenForm] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [editableIndex, setEditableIndex] = useState(null);

  const addNewHandler = () => {
    setOpenForm(true);
  };

  const addItem = (e) => {
    setNewItem(e.target.value);
  };

  const onSaveHandler = () => {
    if (!editableIndex && editableIndex !== 0) {
      setList([...list, { title: newItem }]);
      setNewItem("");
    } else {
      const newList = list.map((f, i) => {
        if (i === editableIndex) {
          return {
            ...f,
            title: newItem,
          };
        }

        return f;
      });

      setNewItem("");
      setList(newList);
      setEditableIndex(null);
    }
    setOpenForm(false);
  };

  const onCancelHandler = () => {
    setOpenForm(false);
    setNewItem("");
    setEditableIndex(null);
  };

  const strikeList = (i, completed) => {
    const newList = list.map((f, ind) => {
      if (i === ind) {
        return {
          ...f,
          completed,
        };
      }

      return f;
    });

    setList(newList);
  };

  const deleteList = (i) => {
    const newList = list.filter((f, ind) => {
      // if (i === ind) {
      //   return {
      //     ...f,
      //   };
      // }

      return i !== ind;
    });

    setList(newList);
  };

  //   console.log(openForm);
  // console.log(newItem);

  const handleEditClick = (index) => {
    const { title } = list[index];

    setEditableIndex(index);
    setOpenForm(true);
    setNewItem(title);
  };

  return (
    <div>
      <ul>
        {list.map((ele, i) =>
          ele.completed ? (
            <li key={ele.title + i}>
              <s>{ele.title} List</s>{" "}
              <button onClick={() => strikeList(i, false)}>Undo</button>
              <button onClick={() => deleteList(i)}>Delete</button>
            </li>
          ) : (
            <li key={ele.title + i}>
              {ele.title} List{" "}
              <button onClick={() => strikeList(i, true)}>Done</button>
              <button onClick={() => deleteList(i)}>Delete</button>
              <button onClick={() => handleEditClick(i)}>Edit</button>
            </li>
          )
        )}
      </ul>
      {!openForm && <button onClick={addNewHandler}>Add new ToDo</button>}
      {openForm && (
        <div>
          <input type="text" value={newItem} onChange={addItem} />
          <button onClick={onSaveHandler}>Save</button>
          <button onClick={onCancelHandler}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default List;
