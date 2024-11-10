import module from "./LoginForm.module.css"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
    const INITIAL_VALUES = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
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
            <h1>Увійти</h1>
            <Formik
                initialValues={INITIAL_VALUES}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={module.form}>
                    <label className={module.formLabel}>
                        Електронна пошта:
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="span" />
                    </label>
                    <label className={module.formLabel}>
                        Пароль:
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="span" />
                    </label>
                    <button type="submit">Увійти</button>
                </Form>
            </Formik>
        </div>
    );
};

export default LoginForm;
