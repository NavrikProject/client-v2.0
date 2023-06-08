import React from "react";

const AddressMap = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <iframe
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.063875055694!2d77.18755731489182!3d28.56784458244348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d86bdb46071%3A0x94ca3faac5c7b753!2sNavrik%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1674540697611!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{
          border: 0,
          width: "60%",
          height: "80vh",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default AddressMap;
