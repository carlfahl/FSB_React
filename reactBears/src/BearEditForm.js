import React from 'react';

function BearEditForm (props) {
  return (
    <div className="">
      <div className="page-header">
        <h2>Edit Bear</h2>
      </div>
      <div className="">
        <form onSubmit={props.handleSubmit}>
          <fieldset className="form-group">
            <label>Bear Name</label>
            <input onChange={ (event) => props.updateBearName(event.target.value)}
            value={props.name}  type="text" className="form-control" id="" placeholder="name"
            />
          </fieldset>
          <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
        </form>
      </div>
    </div>
  );
}

export default BearEditForm;
