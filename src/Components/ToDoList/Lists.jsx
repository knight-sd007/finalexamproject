const Lists = (props) => {
  return (
    <div
      className='row p-md-2 mb-2'
      style={{ borderRadius: "20px", border: "1px solid #555" }}>
      <div className='col-6 col-md-5 text-warning pt-0'>
        <span className='h4'>{props.list.name}</span>
      </div>
      <div className='col-2 col-md-2 pt-md-3'>
        <button
          className={`btn btn-sm m-1 ${
            props.list.isComplete ? "btn-warning" : "btn-outline-warning"
          }`}
          onClick={() => props.completeClick(props.list)}>
          <i className='bi bi-check-square' style={{ fontSize: "1rem" }}></i>
        </button>
      </div>
      <div className='col-2 col-md-3 pt-md-3'>
        <button className='btn btn-danger btn-sm m-1'>
          <i
            className='bi bi-trash-fill'
            onClick={() => props.deleteList(props.list.id)}
            style={{ fontSize: "1rem" }}></i>
        </button>
      </div>
    </div>
  );
};

export default Lists;
