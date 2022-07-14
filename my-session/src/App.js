import React from "react";
import { Form, Field } from "react-final-form";

export default function App() {
  function onSubmit() {
    console.log("Form Submitted");
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form }) => (
        <form onSubmit={handleSubmit}>
          <h2>Final Form Testing</h2>
          <div>
            <Field
              name="firstName"
              component="input"
              placeholder="First Name"
            />
            <Field name="lastName" component="input" placeholder="Last Name" />
          </div>
          <div>
            <label>Age</label>
            <Field name="age" component="select">
              <option />
              <option value="teen">Teen</option>
              <option value="adult">Adult</option>
              <option value="elder">Elder</option>
            </Field>
            <label>Gender</label>
            <Field name="gender" component="select">
              <option />
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="otheres">Others</option>
            </Field>
          </div>
          <div>
            <label>Programming Skills</label>
            <label>
              <Field
                name="js"
                component="input"
                type="checkbox"
                value="javascript"
              />
              JavaScript
            </label>
            <label>
              <Field
                name="html"
                component="input"
                type="checkbox"
                value="html"
              />
              HTML
            </label>
            <label>
              <Field name="css" component="input" type="checkbox" value="css" />
              CSS
            </label>
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={form.reset}>
              Reset
            </button>
          </div>
        </form>
      )}
    />
  );
}
