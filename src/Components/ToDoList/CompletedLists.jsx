import Lists from "./Lists";

const CompletedLists = (props) => {
  return (
    <div
      className='col-12 py-2'
      style={{ borderRadius: "10px", backgroundColor: "#323637" }}>
      <div className='text-center tex-white-50'>Completed</div>
      <div className='p-2'>
        {props.lists.map((list, index) => (
          <Lists
            list={list}
            key={index}
            completeClick={props.handleToggleComplete}
            deleteList={props.handleDeleteList}></Lists>
        ))}
      </div>
    </div>
  );
};

export default CompletedLists;
