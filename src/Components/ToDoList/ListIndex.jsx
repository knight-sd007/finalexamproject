import React from "react";
import RemoveAllContact from "./RemoveAllList";
import AddList from "./AddList";
import NotCompletedLists from "./NotCompletedLists";
import CompletedLists from "./CompletedLists";

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [
        {
          id: 1,
          name: "Task 1",
          isComplete: true,
        },
        {
          id: 2,
          name: "Task 2",
          isComplete: false,
        },
        {
          id: 3,
          name: "Task 3",
          isComplete: false,
        },
      ],
    };
  }

  handleAddList = (newlist) => {
    if (newlist.name === "") {
      return { status: "faliure", msg: "Please enter a valid Name" };
    }

    const duplicateRecord = this.state.toDoList.filter((x) => {
      if (x.name === newlist.name) {
        return true;
      }
    });

    if (duplicateRecord.length > 0) {
      return { status: "faliure", msg: "Duplicate Records" };
    } else {
      const newFinalList = {
        ...newlist,
        id: this.state.toDoList[this.state.toDoList.length - 1].id + 1,
        isComplete: false,
      };
      this.setState((previousState) => {
        return {
          toDoList: previousState.toDoList.concat([newFinalList]),
        };
      });
      return { status: "success", msg: "Contact was added successfully" };
    }
  };

  handleToggleComplete = (list) => {
    this.setState((previousState) => {
      return {
        toDoList: previousState.toDoList.map((obj) => {
          if (obj.id === list.id) {
            return { ...obj, isComplete: !obj.isComplete };
          }
          return obj;
        }),
      };
    });
  };

  handleDeleteList = (listId) => {
    this.setState((previousState) => {
      return {
        toDoList: previousState.toDoList.filter((obj) => {
          return obj.id !== listId;
        }),
      };
    });
  };

  handleRemoveAllList = () => {
    this.setState(() => {
      return {
        toDoList: [],
      };
    });
  };

  render() {
    return (
      <div className='container' style={{ minHeight: "85vh" }}>
        <div className='row py-3'>
          <div className='py-2 row'>
            <RemoveAllContact handleRemoveAllList={this.handleRemoveAllList} />
          </div>
          <div className='row py-2'>
            <div className='col-8 offset-2 row'>
              <AddList handleAddList={this.handleAddList} />
            </div>
          </div>
          <div className='row py-2'>
            <div className='col-8 offset-2 row'>
              <CompletedLists
                lists={this.state.toDoList.filter((u) => u.isComplete === true)}
                handleToggleComplete={this.handleToggleComplete}
                handleDeleteList={this.handleDeleteList}
              />
            </div>
          </div>
          <div className='row py-2'>
            <div className='col-8 offset-2 row'>
              <NotCompletedLists
                lists={this.state.toDoList.filter(
                  (u) => u.isComplete === false
                )}
                handleToggleComplete={this.handleToggleComplete}
                handleDeleteList={this.handleDeleteList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListIndex;
