import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../redux/action/data";
import Styles from "../Style";
import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AddData = () => {
  const {} = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert("Data Berhasil di Simpan");
    dispatch(addData(values));
    navigate("/");
  };

  return (
    <Styles>
      <h1>React Final Form - Simple Example</h1>
      <a
        href="https://final-form.org/react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Docs
      </a>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Employed</label>
              <Field name="employed" component="input" type="checkbox" />
            </div>
            <div>
              <label>Education</label>
              <Field name="education" component="select">
                <option value="Hight School">Hight School</option>
                <option value="Bachelor degree">Bachelor degree</option>
                <option value="Junior School">Junior School</option>
              </Field>
            </div>
            <div>
              <label>Experience</label>
              <div>
                <label>
                  <Field
                    name="experience"
                    component="input"
                    type="checkbox"
                    value="HTML"
                  />{" "}
                  HTML
                </label>
                <label>
                  <Field
                    name="experience"
                    component="input"
                    type="checkbox"
                    value="CSS"
                  />{" "}
                  CSS
                </label>
                <label>
                  <Field
                    name="experience"
                    component="input"
                    type="checkbox"
                    value="Javascript"
                  />{" "}
                  Javascript
                </label>
                <label>
                  <Field
                    name="experience"
                    component="input"
                    type="checkbox"
                    value="Node Js"
                  />{" "}
                  Node Js
                </label>
                <label>
                  <Field
                    name="experience"
                    component="input"
                    type="checkbox"
                    value="React Js"
                  />{" "}
                  React JS
                </label>
              </div>
            </div>
            <div>
              <label>Profesi Technology</label>
              <div>
                <label>
                  <Field
                    name="profesi"
                    component="input"
                    type="radio"
                    value="frontend"
                  />{" "}
                  Front End
                </label>
                <label>
                  <Field
                    name="profesi"
                    component="input"
                    type="radio"
                    value="backend"
                  />{" "}
                  Back End
                </label>
                <label>
                  <Field
                    name="profesi"
                    component="input"
                    type="radio"
                    value="fullstack"
                  />{" "}
                  Fullstack
                </label>
              </div>
            </div>
            <div>
              <label>Notes</label>
              <Field name="notes" component="textarea" placeholder="Notes" />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Styles>
  );
};

export default AddData;
