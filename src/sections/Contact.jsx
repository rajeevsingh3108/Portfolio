
/*
const Contact = () => {
  return (
    <section className="relative flex items-center c-space section-spacing">
        <div className="flex flex-col items-center justify-center max-w-md 
        p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
            <div>
                <h2 class Name=></h2>
            </div>
        </div>

    </section>
  );
};

export default Contact
*/

/*
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      await emailjs.send(
        "service_ql9zb59",
        "template_ysird6h",
        {
          from_name: formData.name,
          to_name: "Rajeev Singh",
          from_email: formData.email,
          to_email: "singhrajeev2531@gmail.com",
          subject: formData.subject,
          message: formData.message,
        },
        "1RRRLIYD2YbyzR4hm"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "",subject: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };
  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
               Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="your@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
           <div className="mb-5">
            <label htmlFor="subject" className="field-label">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              className="field-input field-input-focus w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
              placeholder="Project inquiry / Bug report / etc."
              autoComplete="off"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
*/

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Twitch,Github,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_ql9zb59",
        "template_ysird6h",
        {
          from_name: formData.name,
          to_name: "Rajeev Singh",
          from_email: formData.email,
          to_email: "singhrajeev2531@gmail.com",
          subject: formData.subject,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
        },
        "1RRRLIYD2YbyzR4hm"
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section id="Contact"  className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto p-5 bg-transparent">
        {/* Left: Contact Information */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold text-white">
            Contact Information
          </h3>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-white/10">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-white">Email</h4>
              <a
                href="mailto:singhrajeev2531@gmail.com"
                className="text-neutral-400 hover:text-royal transition-colors"
              >
                singhrajeev2531@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-white/10">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-white">Phone</h4>
              <a
                href="tel:+917906215489"
                className="text-neutral-400 hover:text-royal transition-colors"
              >
                +91 9696026254
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-white/10">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-medium text-white">Location</h4>
              <span className="text-neutral-400">
                Kanpur, Uttar Pradesh, India
              </span>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="font-medium text-white mb-3">Connect With Me</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rajeevsingh3108/" target="_blank">
                <Linkedin className="text-white hover:text-royal" />
              </a>
              <a href="https://x.com/Rajeev_31_" target="_blank">
                <Twitter className="text-white hover:text-royal" />
              </a>
              <a href="https://www.instagram.com/_r_aj_e_e_v_/" target="_blank">
                <Instagram className="text-white hover:text-royal" />
              </a>
              <a href="https://github.com/rajeevsingh3108" target="_blank">
                <Github className="text-white hover:text-royal" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Let's Talk Form */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-start w-full gap-5 mb-10">
            <h2 className="text-heading">Let's Talk</h2>
            <p className="font-normal text-neutral-400">
              Whether you're looking to build a new website, improve your
              existing platform, or bring a unique project to life, I'm here to
              help
            </p>
          </div>

          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="field-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="field-input field-input-focus"
                placeholder="Your Name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="field-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input field-input-focus"
                placeholder="your@email.com"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5">
              <label htmlFor="subject" className="field-label">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="field-input field-input-focus w-full p-3 rounded bg-gray-800 border border-gray-700 text-white"
                placeholder="Project inquiry / Bug report / etc."
                autoComplete="off"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-5 mt-3">
              <label htmlFor="message" className="field-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="field-input field-input-focus"
                placeholder="Share your thoughts..."
                autoComplete="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
            >
              {!isLoading ? "Send" : "Sending..."}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
