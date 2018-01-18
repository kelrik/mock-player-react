import React from 'react';
import { Field, reduxForm } from 'redux-form'

const Form = ({ handleSubmit }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Artist</label>
          <div>
            <Field
                name="artist"
                component="input"
                type="text"
                placeholder="Artist"
            />
          </div>
        </div>
        <div className="form-row">
          <label>Song</label>
          <div>
            <Field
                name="song"
                component="input"
                type="text"
                placeholder="Song"
            />
          </div>
        </div>
        <div className="form-row">
          <label>Genre</label>
          <div>
            <Field
                name="genre"
                component="input"
                type="text"
                placeholder="Genre"
            />
          </div>
        </div>
        <div className="form-row">
          <label>Years</label>
          <div>
            <Field
                name="year"
                component="input"
                type="text"
                placeholder="Years"
            />
          </div>
        </div>
        <div className="form-row submit">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
};

export default reduxForm({form: 'simple'})(Form);