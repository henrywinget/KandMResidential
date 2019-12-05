import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <form class="container contact-form">
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">From</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control is-expanded has-icons-left">
                <input className="input" type="text" placeholder="Name"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
                      </p>
                    </div>
                    <div className="field">
                      <p className="control is-expanded has-icons-left has-icons-right">
                        <input className="input is-success" type="email" placeholder="Email" value="alex@smith.com"/>
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                          <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label"></div>
          <div className="field-body">
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control">
                  <a className="button is-static">
                    +44
                  </a>
                </p>
                <p className="control is-expanded">
                  <input className="input" type="tel" placeholder="Your phone number"/>
                </p>
              </div>
              <p className="help">Do not enter the first zero</p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">How did you hear about us? </label>
          </div>
          <div className="field-body">
            <div className="field is-narrow">
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                    <option>Other</option>
                    <option>Healthcare Professional/Physician Referral</option>
                    <option>Online Ad</option>
                    <option>Online Search</option>
                    <option>Billboards</option>
                    <option>Phone Call</option>
                    <option>Radio</option>
                    <option>Print Ad</option>
                    <option>Direct Mail</option>
                    <option>Event</option>
                    <option>Family/Friend</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<div className="field is-horizontal">*/}
          {/*<div className="field-label">*/}
            {/*<label className="label">Already a member?</label>*/}
          {/*</div>*/}
          {/*<div className="field-body">*/}
            {/*<div className="field is-narrow">*/}
              {/*<div className="control">*/}
                {/*<label className="radio">*/}
                  {/*<input type="radio" name="member"/>*/}
                    {/*Yes*/}
                {/*</label>*/}
                {/*<label className="radio">*/}
                  {/*<input type="radio" name="member"/>*/}
                    {/*No*/}
                {/*</label>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Subject</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input className="input is-danger" type="text" placeholder="e.g. Partnership opportunity"/>
              </div>
              <p className="help is-danger">
                This field is required
              </p>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Message</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
  );
  }
}

export default ContactForm;