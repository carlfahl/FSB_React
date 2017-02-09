import React from 'react';

function BearPostForm (props) {
  return (
    <div className="">
      <div className="page-header">
        <h2>Create Bear</h2>
      </div>
      <div className="">
        <form onSubmit={props.handleSubmit}>
          <fieldset className="form-group">
            <label>Bear Name</label>
            <input onChange={ (event) => props.updateBearName(event.target.value)}
              type="text" className="form-control" id="" placeholder="name"
            />
          </fieldset>
          <button type="submit" className="btn btn-primary my-primary-btn">Save</button>
        </form>
      </div>
    </div>
  );
}

export default BearPostForm;
