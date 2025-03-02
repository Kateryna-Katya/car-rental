import { Formik, Form, Field, ErrorMessage } from "formik";
import Calendar from "../Calendar/Calendar";
import * as Yup from "yup";
import { useState } from "react";
import style from "./ApplicationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const formSchema = Yup.object({
  name: Yup.string().required("Name is required."),
  email: Yup.string()
    .email("Email must be a valid email address.")
    .required("Email is required."),
  date: Yup.string(),
  comment: Yup.string(),
});

const ApplicationForm = ({ model, brand }) => {
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSubmit = (values, actions) => {
    alert(
      `Your booking for ${brand} ${model} is being processed.\n\n We will confirm shortly.`
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ setFieldValue, values }) => {
        return (
          <Form className={style.form}>
            <p className={style.title}>Book your car now</p>
            <p className={style.subtitle}>
              Stay connected! We are always ready to help you.
            </p>
            <div className={style.fieldWrapper}>
              <Field
                type="text"
                name="name"
                className={style.input}
                placeholder="Name *"
              />
              <ErrorMessage
                className={style.errorMessage}
                name="name"
                component="span"
              />
              <Field
                className={style.input}
                type="text"
                name="email"
                placeholder="Email *"
              />
              <ErrorMessage className={style.errorMessage} name="email" component="span" />

            
              <div className={style.dateWrapper}>
                <input
                  type="text"
                  className={style.input}
                  value={values.date}
                  placeholder="Booking date"
                  readOnly
                  onClick={() => setShowCalendar(!showCalendar)}
                />
                {showCalendar && (
                  <Calendar
                    onDateSelect={(date) => {
                      setFieldValue("date", date);
                      setShowCalendar(false);
                    }}
                  />
                )}
              </div>

              <Field
                type="textarea"
                name="comment"
                placeholder="Comment"
                className={style.inputComment}
              />
            </div>
            <button className={style.btn} type="submit">
              Send
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ApplicationForm;
