import React from 'react';
import Scroll from './Scroll';
import config from '../../config';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>{config.heading}</h1>
      </Link>
      <p>{config.subHeading}</p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="first">
            <a href="#first" className="arrow">
              <span className="label">Next</span>
            </a>
          </Scroll>
        </li>
      </ul>
    </header>
  );
}
