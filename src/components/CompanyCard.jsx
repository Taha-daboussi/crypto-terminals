import { useState } from "react";
import MyButton from "./MyButton";
import MyImage from "./MyImage";
import NavItem from "./NavItem";

const CompanyCard = ({ id, logo, name, type, bestFor }) => {
  const [likes, setLikes] = useState(0);

  return (
    <section className="card mb-4">
      <div className="text-center mt-2">
        <MyImage src={logo} alt={name} />
      </div>
      <div className="card-body">
        <h4 className="card-title text-center">{name}</h4>
        <h5 className="text-center text-secondary">{type}</h5>
        <p className="card-text fw-bold">Best for: {bestFor}</p>
        <p className="card-text text-center">
          <NavItem to={`/Companies/${id}`} label="More Details" />
        </p>
      </div>
      <div className="text-center mt-2 mb-2">
        <p>Likes: {likes}</p>
        <MyButton
          style="btn btn-outline-success"
          label="Like"
          onclick={() => setLikes(likes + 1)}
        />
      </div>
    </section>
  );
};

export default CompanyCard;
