import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Default extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.display ? (
          <Alert
            className={`alert alert-custom alert-outline alert-outline-${
              this.props.status === undefined ? 'danger' : this.props.status
            } fade show mb-5`}>
            <div className="alert-icon">
              <span
                className={`svg-icon svg-icon-${
                  this.props.status === undefined ? 'danger' : this.props.status
                } svg-icon-2x`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1">
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd">
                    <rect x={0} y={0} width={24} height={24} />
                    <circle
                      fill="#000000"
                      opacity="0.3"
                      cx={12}
                      cy={12}
                      r={10}
                    />
                    <path
                      d="M16.7689447,7.81768175 C17.1457787,7.41393107 17.7785676,7.39211077 18.1823183,7.76894473 C18.5860689,8.1457787 18.6078892,8.77856757 18.2310553,9.18231825 L11.2310553,16.6823183 C10.8654446,17.0740439 10.2560456,17.107974 9.84920863,16.7592566 L6.34920863,13.7592566 C5.92988278,13.3998345 5.88132125,12.7685345 6.2407434,12.3492086 C6.60016555,11.9298828 7.23146553,11.8813212 7.65079137,12.2407434 L10.4229928,14.616916 L16.7689447,7.81768175 Z"
                      fill="#000000"
                      fillRule="nonzero"
                    />
                  </g>
                </svg>
              </span>
              <div className="alert-text">
                {' '}
                {this.props.message === undefined ? '' : this.props.message}
              </div>
            </div>
          </Alert>
        ) : (
          <></>
        )}
      </React.Fragment>
    );
  }
}

export default Default;
