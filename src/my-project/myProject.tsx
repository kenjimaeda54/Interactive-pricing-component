import React, { useState } from 'react';
import '../assests/css/myProject.css';
import { SliderBlue } from '../components/slider';
import { PurpleSwitch } from '../components/switch';

export default function MyProject(): JSX.Element {
  const [valueMounth, setValueMounth] = useState(0);
  const [valueChecked, setValueChecked] = useState(false);

  const handleChange = (p: any) => {
    if (typeof p === 'number') {
      setValueMounth(p);
      return;
    }
    return null;
  };

  return (
    <div className="container">
      <div className="title">
        <h1> Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial</p>
        <p> No credit card required. </p>
      </div>
      <div className="main">
        <h2 className="desktop-h2">100K PAGEVIEWS</h2>
        <div className="div-slider">
          <SliderBlue
            disabled={valueChecked}
            marks={valueChecked}
            value={valueMounth}
            className="slider"
            onChange={(item, value) =>
              item.target.addEventListener('mouseup', function () {
                return handleChange(value);
              })
            }
          />
        </div>
        <div className="month">
          <div className="mount item-slider">${valueMounth}</div>
          <span className="mount span"> /month</span>
        </div>
        <div className="billing">
          <span className="billing span"> Monthly Billing </span>
          <div className="billing switch ">
            <PurpleSwitch
              onChange={(item) => setValueChecked(item.target.checked)}
            />
          </div>
          <p className="billing p1">Yearly Billing</p>
          <p className="billing p2">-25%</p>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>Unlimited websites</li>
              <li style={{ margin: '1vh auto' }}>100% data ownership</li>
              <li>Email reports</li>
            </ul>
          </nav>
          <button className="button">Start My Trial </button>
        </div>
      </div>
    </div>
  );
}
