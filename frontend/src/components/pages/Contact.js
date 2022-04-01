import React from "react";
import Navbar from "../Navbar";

const Contact = () => {
    return (
        <section className="Contact">
            <Navbar />
            <h1>This is the Contact page</h1>
            <div>Probably shouldn't put sensitive information on here and we don't have a dedicated means of contact for this web app, so...</div>
            <div>Sorry.</div>
        </section>
    );
};

export default Contact;