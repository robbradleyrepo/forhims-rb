// import PhotoUpload from "./photo-upload";
// import { ConsentIcon, QuestionsIcon, CameraIcon } from "./header/header.style";

import LegalFooter from "./legal-footer";
import PropTypes from "prop-types";
import Questions from "./questions";
import R from "ramda";
import React from "react";
import { Block } from "../block";
import { Grid } from "../layout";
import { Header } from "./header";
import { VisitBackground, VisitGridContainer } from "./index.style";

const STEPS = [
  {
    component: Questions,
    title: "Questions",
    mobileTitle: "Questions"
  }
];

// const

/**
 * @module Visit
 */

class Visit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 0 };
  }

  componentDidUpdate(_, previousState) {
    if (this.state.step !== previousState.step) {
      /*
       todo/note : Drawer cannot use window.scrollTo/By, need to bring in some
       library, use jquery or write some code using requestAnimationFrame &
       do value interpolation.

       Hims has a 600 ms scroll animation and we should revisit this if the
       animation is crucial, but this one will at least ensure that the
       questionnaire/consent form/photo page will be displayed from the top
       whenever there's a step change.
      */
      this.props.containerRef.current.scrollTop = 0;
    }
  }

  prev() {
    let { step } = this.state;
    this.setState({ step: !step ? 0 : step - 1 });
  }

  next() {
    this.props.confirmOrder();
    // let { step } = this.state;
    // this.setState({ step: step < 1 ? step + 1 : step });
  }

  hasStepBeenTouchedOrCompleted(step) {
    switch (step) {
      case 0:
        return this.props.percentageCompleted > 0;
      case 1:
        return this.props.percentageCompleted === 100;
      default:
        return false;
    }
  }

  isStepCompleted(step) {
    switch (step) {
      case 0:
        return this.props.percentageCompleted === 100;
      default:
        return false;
    }
  }

  isTabActive(step) {
    return this.state.step === step;
  }

  setStep(step) {
    if (this.hasStepBeenTouchedOrCompleted(step)) {
      this.setState({ step });
    }
  }

  render() {
    let { emrEntity, openModal } = this.props;

    return (
      <VisitBackground>
        <Block
          display="flex"
          width="100%"
          justifyContent="center"
          position={"sticky"}
          top={"0%"}
          left={"0%"}
        >
          {/* TODO: This can and should be made into it's own component} */}
          <Header
            emrEntity={emrEntity}
            isTabActive={this.isTabActive.bind(this)}
            isStepCompleted={this.isStepCompleted.bind(this)}
            setStep={this.setStep.bind(this)}
            steps={STEPS}
            percentage={this.props.percentage}
          />
        </Block>
        <VisitGridContainer>
          <Block width={"100%"}>
            <Grid container>
              <Block display="flex" width={"100%"} justifyContent="center">
                {React.createElement(
                  STEPS[this.state.step].component,
                  R.merge(this.props, {
                    next: this.next.bind(this)
                  })
                )}
              </Block>
            </Grid>
          </Block>
          <LegalFooter openModelHandler={openModal} />
        </VisitGridContainer>
      </VisitBackground>
    );
  }
}

Visit.defaultProps = {};

Visit.propTypes = {
  confirmOrder: PropTypes.func,
  containerRef: PropTypes.object,
  emrEntity: PropTypes.object,
  index: PropTypes.number,
  next: PropTypes.func,
  openModal: PropTypes.func,
  percentage: PropTypes.number,
  percentageCompleted: PropTypes.number,
  prev: PropTypes.func,
  tuples: PropTypes.array,
  visit: PropTypes.object
};

Visit.displayName = "Visit";

export default Visit;
