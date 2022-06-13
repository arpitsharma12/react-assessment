import React from "react";
import Sleep1 from "./../img/sleep1.jpg";
import VolvoBuses from "./../img/VolvoBuses.png";
import interier from "./../img/interier.webp";
import road from "./../img/road.jpg";
import Manali from "./../img/Manali.jpg";



const Destinations = () => {
  return (
    <>
      <section className="grid">
        <h3>Happy Buses</h3>
        <div className="grid-items">
          <div>
            <img src={Sleep1} alt="Buzzz" />
            <h1>Sleep Well Think Well</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium accusamus doloribus omnis harum, quis quisquam facere
              sapiente
            </p>
          </div>

          <div>
            <img src={VolvoBuses} alt="Buzzz" />
            <h1>Sleep Well Think Well</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium accusamus doloribus omnis harum, quis quisquam facere
              sapiente
            </p>
          </div>

          <div>
            <img src={interier} alt="Buzzz" />
            <h1>Sleep Well Think Well</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium accusamus doloribus omnis harum, quis quisquam facere
              sapiente
            </p>
          </div>

          <div>
            <img src={road} alt="Buzzz" />
            <h1>Sleep Well Think Well</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium accusamus doloribus omnis harum, quis quisquam facere
              sapiente
            </p>
          </div>

          <div>
            <img src={Manali} alt="Buzzz" />
            <h1>Sleep Well Think Well</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium accusamus doloribus omnis harum, quis quisquam facere
              sapiente
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
