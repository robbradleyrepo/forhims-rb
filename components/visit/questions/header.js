import PropTypes from "prop-types";
import React from "react";
import ReactMarkdown from "react-markdown";

/**
 * @module QuestionHeader
 */

class QuestionHeader extends React.Component {
  render() {
    let { question, tuples, step } = this.props;

    return (
      <div className="">
        <div>{`${step + 1} of ${tuples.length}`}</div>
        <ReactMarkdown root="div" source={question.title} />
        {this.props.component}
      </div>
    );
  }
}

QuestionHeader.defaultProps = {
  component: null
};

QuestionHeader.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  provider: PropTypes.object,
  question: PropTypes.object,
  step: PropTypes.number,
  tuples: PropTypes.array
};

QuestionHeader.displayName = "QuestionHeader";

export default QuestionHeader;
