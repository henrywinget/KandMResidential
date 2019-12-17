import React, { Component } from "react";

class FaqCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    }
  }

  toggleCard = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  };

  render() {
    const style = {};
    if(this.state.isOpen) {
      style.display = 'none';
    }

    return (
      <div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              {this.props.question}
            </p>
            <a tabIndex={this.props.index}
               onClick={this.toggleCard}
               className="card-header-icon"
               aria-label="more options">
              <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div className="card-content" style={style}>
            <div className="content">
              {this.props.children}
              {/*<a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>*/}
              {/*<br/>*/}
                {/*<time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>*/}
            </div>
          </div>
          {/*<footer className="card-footer">*/}
            {/*<a href="#" className="card-footer-item">Save</a>*/}
            {/*<a href="#" className="card-footer-item">Edit</a>*/}
            {/*<a href="#" className="card-footer-item">Delete</a>*/}
          {/*</footer>*/}
        </div>
      </div>
    );
  }
}

export default FaqCard;