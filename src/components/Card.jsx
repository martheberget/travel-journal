import pin from "../assets/pin.png";
import img from "../assets/london.jpg";
import { getImageUrl } from "../utils";

export function Card(props) {
  let location = props.card.location.toUpperCase();
  let date = `${props.card.startDate} - ${props.card.endDate}`;
  let img;
  return (
    <>
      <div className="card">
        <div className="card__container">
          <img className="card__image" src={getImageUrl(props.card.imageUrl)} alt={props.card.title.toLowerCase()} />
          <div className="card__text--container">
            <div className="card__location--container">
              <img className="card__location--pin" src={pin} alt="pin" />
              <h2 className="card__location--location">{location}</h2>
              <a href={props.card.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="card__location--link">
                View on Google Maps
              </a>
            </div>
            <h1 className="card__location--title">{props.card.title}</h1>
            <h3 className="card__location--date">{date}</h3>
            <p className="card__location--description">{props.card.description}</p>
          </div>
        </div>
        <hr className="card__line" />
      </div>
    </>
  );
}
