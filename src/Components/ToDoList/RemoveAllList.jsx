const RemoveAllContact = (props) => {
  return (
    <div className='col-8 offset-2 row'>
      <button
        className='btn btn-danger form-control'
        onClick={props.handleRemoveAllList}>
        Remove All
      </button>
    </div>
  );
};

export default RemoveAllContact;
