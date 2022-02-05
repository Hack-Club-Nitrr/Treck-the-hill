import { useFormik } from 'formik';

import axios from 'axios';

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import shapeImage from '../public/contactIcons/shape.png';
//css
import styles from '../styles/contact.module.css';

//validation
const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^[6789][0-9]{9}$/i.test(values.phone)) {
    errors.phone = 'Invalid Phone Number';
  }

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.message) {
    errors.message = 'Required';
  }

  return errors;
};

const Contact = () => {
  //formik
  const formik = useFormik({
    initialValues: {
      message: '',
      phone: '',
      email: '',
      name: '',
    },
    validate,
    validateOnChange: false,
    onSubmit: (values) => {
      axios
        .post(`https://trekthehill.herokuapp.com/api/contact/`, values)
        .then((res) => {
          toast.success('Message Send Successfully', {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((err) => console.log(err));
      formik.resetForm();
    },
  });

  return (
    <div className={styles.contactContainer} id="Contact">
      <br />
      {/* <span className={styles.bigCircle}></span> */}
      <img src={shapeImage} className={styles.square} alt="" />
      <div className={styles.form}>
        <div className={styles.contactInfo}>
          <h3 className={styles.contactTitle}>Let&apos;s get in touch</h3>
          <p className={styles.text}>
            Be ready to witness one of the big tech events of the months ,trek
            the hill and if you have any query regarding the events feel free to
            contact us.
          </p>

          <div className={styles.info}>
            <div className={styles.information}>
              <img
                src="/contactIcons/location.png"
                className={styles.icon}
                alt=""
              />
              <p>Great Eastern Rd, Amanaka, Raipur, Chhattisgarh</p>
            </div>
            <div className={styles.information}>
              <img
                src="/contactIcons/email.png"
                className={styles.icon}
                alt=""
              />
              <p>aditya90005@gmail.com</p>
            </div>
            <div className={styles.information}>
              <img
                src="/contactIcons/phone.png"
                className={styles.icon}
                alt=""
              />
              <p>7000629928</p>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <span className={`${styles.circle} ${styles.one}`}></span>
          <span className={`${styles.circle} ${styles.two}`}></span>

          <form
            noValidate
            onSubmit={formik.handleSubmit}
            autoComplete="off"
            className={styles.innerForm}
          >
            <h3 className={styles.contactTitle}>Contact us</h3>
            <div
              className={`${styles.inputContainer} ${
                formik.errors.name && styles.errorInput
              }
              }`}
            >
              <input
                type="text"
                name="name"
                className={styles.input}
                placeholder="Your Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.errors.name ? (
                <div className={styles.error}>{formik.errors.name}</div>
              ) : null}
            </div>
            <div
              className={`${styles.inputContainer} ${
                formik.errors.email && styles.errorInput
              }`}
            >
              <input
                type="email"
                name="email"
                className={styles.input}
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className={styles.error}>{formik.errors.email}</div>
              ) : null}
            </div>
            <div
              className={`${styles.inputContainer} ${
                formik.errors.phone && styles.errorInput
              }`}
            >
              <input
                type="text"
                name="phone"
                className={styles.input}
                placeholder="Phone Number"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.errors.phone ? (
                <div className={styles.error}>{formik.errors.phone}</div>
              ) : null}
            </div>
            <div
              className={`${styles.inputContainer} ${styles.textarea} ${
                formik.errors.message && styles.errorInput
              }`}
            >
              <textarea
                name="message"
                className={styles.input}
                placeholder="Your Message"
                onChange={formik.handleChange}
                value={formik.values.message}
              ></textarea>
              {formik.errors.message ? (
                <div className={styles.error}>{formik.errors.message}</div>
              ) : null}
            </div>
            <input type="submit" value="Send" className={styles.btn} />
          </form>
        </div>
      </div>
      <ToastContainer
        autoClose={2000}
        theme="colored"
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
};

export default Contact;
