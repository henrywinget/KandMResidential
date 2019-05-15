import React from "react";
import {
  FaSass,
  FaHtml5,
  FaReact,
  FaMobileAlt,
  FaRocket,
  FaOsi
} from "react-icons/fa";

import "./style.scss";
import Emoji from "./emoji";

const Midsection = () => (
  <div>
    <section className="section about-me-content">
      <div className="container">
        <div className="columns is-multiline">
          <div className="column is-one-third">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Uses Bulma</h1>
                  <img src=" https://via.placeholder.com/400" />
                </div>
              </div>
            </article>
          </div>
          <div className="column is-two-third">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Lorem ipsum</h1>
                  <p className="subtitle is-size-5 about-me-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum pretium ex et sem vestibulum rhoncus. Praesent
                    porttitor arcu diam. Vestibulum varius turpis sit amet porta
                    maximus. Mauris dapibus ipsum at pretium fermentum. Etiam
                    sodales sem in quam dictum, nec sollicitudin nisl luctus.
                    Pellentesque sit amet erat vitae ligula eleifend
                    pellentesque. Aliquam erat volutpat. Maecenas lobortis, arcu
                    commodo pretium vehicula, nisi elit molestie libero, id
                    molestie nulla diam quis ligula. Integer euismod nulla sit
                    amet urna ultricies mattis. Maecenas feugiat velit ut
                    volutpat interdum.
                  </p>
                  <p className="subtitle is-size-5 about-me-content">
                    Pellentesque sit amet felis iaculis, tempor magna eget,
                    ultrices magna. Praesent facilisis, mauris vitae volutpat
                    dapibus, neque augue auctor elit, a ultricies diam lacus
                    quis augue. Integer ut commodo arcu. Donec at velit risus.
                    Proin blandit facilisis orci, in sagittis augue vestibulum
                    sed. Cras sit amet nibh ut enim condimentum condimentum at
                    ac arcu. Nunc sed mauris vel nisl consectetur faucibus id
                    sed dui. Donec sagittis mi tempus sodales eleifend.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="columns is-multiline">
          <div className="column is-two-third">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Lorem ipsum</h1>

                  <p className="subtitle is-size-5 about-me-content">
                    Pellentesque sit amet felis iaculis, tempor magna eget,
                    ultrices magna. Praesent facilisis, mauris vitae volutpat
                    dapibus, neque augue auctor elit, a ultricies diam lacus
                    quis augue. Integer ut commodo arcu. Donec at velit risus.
                    Proin blandit facilisis orci, in sagittis augue vestibulum
                    sed. Cras sit amet nibh ut enim condimentum condimentum at
                    ac arcu. Nunc sed mauris vel nisl consectetur faucibus id
                    sed dui. Donec sagittis mi tempus sodales eleifend.
                  </p>
                  <p className="subtitle is-size-5 about-me-content">
                    Nulla aliquet mollis pellentesque. Vivamus sit amet diam
                    eget libero porta vehicula. Cras eu nunc fermentum, lobortis
                    purus non, mollis tortor. Sed sem nisl, blandit eget purus
                    congue, mattis consequat augue. Donec vehicula vulputate
                    ipsum, non imperdiet nunc tempus nec. Nulla facilisi. Sed eu
                    nunc mattis, vestibulum magna et, efficitur felis. Etiam
                    iaculis nibh vitae posuere tincidunt. Maecenas eu tincidunt
                    arcu. Curabitur id molestie elit. Sed vitae finibus ligula,
                    vitae rhoncus libero. Mauris finibus volutpat massa ut
                    venenatis. Vestibulum sed accumsan lacus. Duis placerat
                    risus odio, vel mattis nibh porta non. Maecenas efficitur
                    ornare eros, a imperdiet est malesuada vel.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="column is-one-third">
            <article className="media">
              <div className="media-content">
                <div className="content">
                  <h1 className="title is-size-4">Uses Bulma</h1>
                  <img src=" https://via.placeholder.com/400" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Midsection;
