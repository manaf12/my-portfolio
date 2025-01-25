import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { ImSpinner8 } from "react-icons/im";

const variants = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, error: null, success: false });
  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      await emailjs.sendForm(
        "service_2dxv4oh",
        "template_j2moghv",
        formRef.current,
        "fHIJD0GWW_aRo2DAq"
      );
      setStatus({ loading: false, error: null, success: true });
      formRef.current.reset();
      setTimeout(() => setStatus(s => ({ ...s, success: false })), 3000);
    } catch (error) {
      setStatus({ loading: false, error: "Failed to send message. Please try again.", success: false });
      setTimeout(() => setStatus(s => ({ ...s, error: null })), 3000);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        
        <motion.div className="item" variants={variants}>
          <div className="icon-box">
            <FiMail className="icon" />
          </div>
          <div className="info">
            <h2>Email</h2>
            <a href="mailto:manafsaoub02@gmail.com">manafsaoub02@gmail.com</a>
          </div>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <div className="icon-box">
            <FiPhone className="icon" />
          </div>
          <div className="info">
            <h2>Phone</h2>
            <a href="tel:+8615275910297">+8615275910297</a>
          </div>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="input-group">
            <input 
              type="text" 
              required 
              placeholder="Name" 
              name="name" 
              className="glow-input"
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              className="glow-input"
            />
          </div>

          <div className="input-group">
            <textarea
              rows={6}
              placeholder="Your Message"
              name="message"
              className="glow-input"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status.loading}
          >
            {status.loading ? (
              <ImSpinner8 className="spinner" />
            ) : (
              <>
                <FiSend className="icon" />
                Send Message
              </>
            )}
          </motion.button>

          {status.error && (
            <motion.div
              className="status error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {status.error}
            </motion.div>
          )}

          {status.success && (
            <motion.div
              className="status success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message sent successfully!
            </motion.div>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;