import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InfiniteScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastLoadPosition: 0
    };
    // this.el = <div></div>;
    this.container = React.createRef();
  }
  componentDidMount() {
    window.onscroll = function(ev) {
      let scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;
      if (scrollTop > document.body.scrollHeight * 0.75) {
        this.setState({
          lastLoadPosition: window.scrollY
        });
        this.props.callBack();
      }
    }.bind(this);
  }

  render() {
    return (
      <div ref={elem => (this.nv = elem)} className="">
        {this.props.children}
      </div>
    );
  }
}

InfiniteScroll.propTypes = {
  callBack: PropTypes.func,
  children: PropTypes.element
};
