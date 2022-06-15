import React from "react";

const Card = ({ cases }) => {
  return (
    <div>
      <div className="row mt-3 gy-4">
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <div className="card-body bg-primary p-5">
              <h2>
                <small>Our</small> Country
              </h2>
              <h1>{cases.country}</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <div className="card-body bg-success p-5">
              <h2>
                <small>Total</small> Cases
              </h2>
              <h1>{cases.cases}</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <div className="card-body bg-danger p-5">
              <h2>
                <small>Recovered</small> Cases
              </h2>
              <h1>{cases.recovered}</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 ">
          <div className="card">
            <div className="card-body bg-dark p-5">
              <h2>
                <small>Total</small> Death
              </h2>
              <h1>{cases.deaths}</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <div className="card-body bg-warning p-5">
              <h2>
                <small>Total</small> Active
              </h2>
              <h1>{cases.active}</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="card">
            <div className="card-body bg-secondary p-5">
              <h2>
                <small>Today</small> Cases
              </h2>
              <h1>{cases.todayCases}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
