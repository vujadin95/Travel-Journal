import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../destination.css";

function Destination(props) {
  return (
    <section className="destination">
      <div className="destination-img">
        <img src={props.location.imageUrl} />
      </div>
      <div className="destination-desc">
        <div className="location-container">
          <FaMapMarkerAlt className="location-icon" />
          <span className="location">{props.location.location}</span>
          <a
            href={props.location.googleMapsUrl}
            target="_blank"
            className="destination-url"
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="location-title">{props.location.title}</h2>
        <p className="visiting-date">
          {props.location.startDate} - {props.location.endDate}
        </p>
        <p className="description">{props.location.description}</p>
      </div>
    </section>
  );
}

export default Destination;
