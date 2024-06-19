import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import emailjs from "@emailjs/browser";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

//components
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import AnimatedLetters from "../components/AnimatedLetters";
import Footer from "../components/Footer";

// Mengatur ulang ikon default Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const ContactMe = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_wbtaenu";
    const templateId = "template_roynmps";
    const publicId = "8zkIzVRZbTGiOEuhs";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      to_name: "Garin Caesar",
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicId).then(
      () => {
        alert("Email sent successfully!");
        window.location.reload(false);
      },
      () => {
        alert("Failed to send email. Please try again later.");
      }
    );
  };

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <Navbar />
          <section className="hero bg-slate-200 h-[100%] xl:pt-10 overflow-hidden dark:bg-darkDarkBlue">
            <div className="contact-page">
              <div className="contact-text-zone">
                <span className="font-tags text-accent m-0 -ml-[0.8rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;div className="contact"&gt;
                </span>
                <span className="flex">
                  <h1 className="h1 relative dark:text-white">
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={["C", "o", "n", "t", "a", "c", "t", " "]}
                      idx={15}
                    />
                  </h1>
                  <h1 className="h1 relative text-accent dark:text-darkLightBlue">
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={["m", "e"]}
                      idx={15}
                    />
                  </h1>
                </span>
                <span className="font-tags mt-3 text-accent m-0 -ml-[0.2rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;p&gt;
                </span>
                <p className="para animate-bounceIn dark:text-slate-200">
                  You can send me an email if you're interested in recruiting me
                  for your company. Thank you for visiting my portfolio website.
                  Have a great day :)
                </p>
                <span className="font-tags mb-3 text-accent m-0 -ml-[0.2rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;/p&gt;
                </span>
                <div className="contact-form">
                  <form ref={form} onSubmit={handleSubmit}>
                    <ul className="p-0 m-0">
                      <li className="half">
                        <input
                          className="message-form"
                          type="text"
                          value={name}
                          placeholder="Name"
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </li>
                      <li className="half">
                        <input
                          className="message-form"
                          type="email"
                          value={email}
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </li>
                      <li>
                        <input
                          className="message-form"
                          type="text"
                          value={subject}
                          placeholder="Subject"
                          onChange={(e) => setSubject(e.target.value)}
                          required
                        />
                      </li>
                      <li>
                        <textarea
                          value={message}
                          placeholder="Message"
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                      </li>
                      <li className="send">
                        <Button value="Send" />
                      </li>
                    </ul>
                  </form>
                </div>
                <span className="font-tags text-accent -ml-[0.8rem] text-[0.8rem] dark:text-accent-quaternary xl:text-[1rem] xl:block">
                  &lt;/div&gt;
                </span>
              </div>
              <div className="info-map">
                Garin Caesar,
                <br />
                Indonesia,
                <br />
                Jl.H.Japat I Perum Hilltop No.24, 16417 <br />
                Depok, Jawa Barat <br />
                <span>garincaesar69@gmail.com</span>
              </div>
              <div className="map-wrap">
                <MapContainer
                  center={[-6.400522, 106.845399]}
                  zoom={10}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[-6.400522, 106.845399]}>
                    <Popup>
                      Garin lives here, come over for a cup of coffee :)
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

export default ContactMe;
