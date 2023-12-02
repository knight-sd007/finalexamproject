import React from "react";

class AddList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errormessage: undefined,
      successmessage: undefined,
    };
  }

  handleAddListFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();

    let response = this.props.handleAddList({
      name: name,
    });

    if (response.status === "success") {
      this.setState({ errormessage: undefined, successmessage: response.msg });
      document.querySelector(".form").reset();
    } else {
      this.setState({ errormessage: response.msg, successmessage: undefined });
    }
  };

  render() {
    return (
      <div className='border col-12 text-white p-2'>
        <form onSubmit={this.handleAddListFormSubmit} className='form'>
          <div className='row p-2'>
            <div className='col-12 p-1'>
              <input
                className='form-control form-control-sm'
                placeholder='Name...'
                name='name'></input>
            </div>

            <div className='col-12 p-1 col-md-6 offset-md-3'>
              <button className='btn btn-primary btn-sm form-control'>
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddList;
