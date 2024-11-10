import module from "./RegistrationForm.module.css"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
    const INITIAL_VALUES = {
        name: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, "Ім'я повинно бути не менше 2-х символів")
            .required("Ім'я є обов'язковим полем"),
        email: Yup.string()
            .email("Неправильний формат електронної пошти")
            .required("Електронна пошта є обов'язковим полем"),
        password: Yup.string()
            .min(6, "Пароль повинен бути не менше 6 символів")
            .required("Пароль є обов'язковим полем"),
    });

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    return (
        <div className={module.formDiv}>
            <h1>Реєстрація</h1>
            <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={module.form}>
                    <label className={module.formLabel}>
                        Name:
                        <Field type="name" name="name" />
                        <ErrorMessage name="name" component="span" />
                    </label>
                    <label className={module.formLabel}>
                        Email:
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="span" />
                    </label>
                    <label className={module.formLabel}>
                        Password:
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="span" />
                    </label>
                    <button type="submit">Sign up</button>
                </Form>
            </Formik>
        </div>
    );
};

export default RegistrationForm;
