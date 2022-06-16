import React, { Component } from 'react'

export default class Uptodate extends Component {
    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.activateurl = this.activateurl.bind(this);
    }

   activateurl() {
      window.open(this.props.mainurl, '_blank');
      console.log(this.props.mainurl);
   }

    render() {
        return (
            <div className="singlebox" onClick={this.activateurl}>
                <img src={this.props.urltoimage} alt="newsphoto" />
                <p className="title">{this.props.title}</p>
                <p className="desc">{this.props.desc}</p>
            </div>
        )
    }
}
