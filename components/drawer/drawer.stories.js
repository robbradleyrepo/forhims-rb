import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";

import { Curtain } from "../curtain";
import { Drawer } from "./drawer.component";
import { convertConstantsToStorySelect } from "../../utils/storybook";
import { isLeft, isRight } from "./drawer.utils";

import { DRAWER_POSITIONS, DRAWER_STATES } from "../../constants/ui";

storiesOf("Components|Drawer", module)
  .addWithJSX("Left Drawer", () => {
    const displayMode = select(
      "Show Drawer",
      convertConstantsToStorySelect(DRAWER_STATES),
      DRAWER_STATES.CLOSED
    );
    return (
      <Drawer display={displayMode} position={DRAWER_POSITIONS.LEFT}>
        <DrawerDummyContent />
      </Drawer>
    );
  })
  .addWithJSX("Right Drawer", () => {
    const displayMode = select(
      "Show Drawer",
      convertConstantsToStorySelect(DRAWER_STATES),
      DRAWER_STATES.CLOSED
    );
    return (
      <Drawer
        display={displayMode}
        position={DRAWER_POSITIONS.RIGHT}
        displayAboveNavigation
      >
        <DrawerDummyContent />
      </Drawer>
    );
  })
  .addWithJSX("Drawers with curtain", () => {
    const drawerToControl = select(
      "Control Drawer",
      convertConstantsToStorySelect(DRAWER_POSITIONS),
      DRAWER_POSITIONS.LEFT
    );
    const displayMode = select(
      "Show Drawer",
      convertConstantsToStorySelect(DRAWER_STATES),
      DRAWER_STATES.CLOSED
    );
    return (
      <div>
        <Drawer
          key="drawer-left"
          display={isLeft(drawerToControl) ? displayMode : DRAWER_STATES.CLOSED}
          position={DRAWER_POSITIONS.LEFT}
        >
          <DrawerDummyContent />
        </Drawer>
        <Drawer
          key="drawer-right"
          display={
            isRight(drawerToControl) ? displayMode : DRAWER_STATES.CLOSED
          }
          position={DRAWER_POSITIONS.RIGHT}
          displayAboveNavigation
        >
          <DrawerDummyContent />
        </Drawer>
        <Curtain visible={displayMode !== DRAWER_STATES.CLOSED} />
        <PageDummyContent />
      </div>
    );
  });

const PageDummyContent = () => (
  <div
    style={{
      padding: "2rem 4rem"
    }}
  >
    <h3> IMPORTANT SAFETY INFORMATION </h3>
    <p>
      <strong> Finasteride </strong> is for use by <strong> MEN ONLY </strong>
      and should <strong> NOT </strong> be used by women or children.
    </p>
    <p>
      Read this Patient Information before you start taking Finasteride and each
      time you get a refill.There may be new information.This information does
      not take the place of talking with your healthcare provider about your
      medical condition or treatment.
    </p>
    <p>
      <strong> What is Finasteride ? </strong>
    </p>
    <p>
      Finasteride is a prescription medicine used for the treatment of male
      pattern hair loss(androgenetic alopecia).
    </p>
    <p>
      It is not known if Finasteride works for a receding hairline on either
      side of and above your forehead(temporal area).
    </p>
    <p>
      <strong> Finasteride is not for use by women and children. </strong>
    </p>
    <p>
      <strong> Who should not take Finasteride ? </strong>
    </p>
    <p>
      <strong> Do not take Finasteride if you : </strong>
    </p>
    <ul>
      <li>
        are pregnant or may become pregnant.Finasteride may harm your unborn
        baby.
        <ul>
          <li>
            Finasteride tablets are coated and will prevent contact with the
            medicine during handling, as long as the tablets are not broken or
            crushed.Females who are pregnant or who may become pregnant should
            not come in contact with broken or crushed Finasteride tablets.
          </li>
          <li>
            If a pregnant woman comes in contact with crushed or broken
            Finasteride tablets, wash the contact area right away with soap and
            water.If a woman who is pregnant comes into contact with the active
            ingredient in Finasteride, a healthcare provider should be
            consulted.If a woman who is pregnant with a male baby swallows or
            comes in contact with the medicine in Finasteride, the male baby may
            be born with sex organs that are not normal.
          </li>
        </ul>
      </li>
      <li>
        <p>
          are allergic to any of the ingredients in Finasteride.See the end of
          this leaflet for a complete list of ingredients in Finasteride.
        </p>
        <p>
          <strong>
            What should I tell my healthcare provider before taking Finasteride
            ? Before taking Finasteride,
          </strong>
          tell your healthcare provider if you :
        </p>
      </li>
      <li>
        <p>
          have any other medical conditions, including problems with your
          prostate or liver
        </p>
        <p>
          <strong>
            Tell your healthcare provider about all the medicines you take,
          </strong>
          including prescription and nonprescription medicines, vitamins, and
          herbal supplements.
        </p>
        <p>
          Know the medicines you take.Keep a list of them to show your
          healthcare provider and pharmacist when you get a new medicine.
        </p>
        <p>
          <strong> How should I take Finasteride ? </strong>
        </p>
      </li>
      <li>
        Take Finasteride exactly as your healthcare provider tells you to take
        it.
      </li>
      <li> You may take Finasteride with or without food. </li>
      <li>
        <p>
          If you forget to take Finasteride, do not take an extra tablet.Just
          take the next tablet as usual.
        </p>
        <p>
          Finasteride will not work faster or better if you take it more than
          once a day.
        </p>
        <p>
          <strong> What are the possible side effects of Finasteride ? </strong>
        </p>
      </li>
      <li>
        <p>
          <strong>
            decrease in your blood Prostate Specific Antigen(PSA) levels.
          </strong>
          Finasteride can affect a blood test called PSA(Prostate - Specific
          Antigen) for the screening of prostate cancer.If you have a PSA test
          done you should tell your healthcare provider that you are taking
          Finasteride because Finasteride decreases PSA levels.Changes in PSA
          levels will need to be evaluated by your healthcare provider.Any
          increase in follow - up PSA levels from their lowest point may signal
          the presence of prostate cancer and should be evaluated, even if the
          test results are still within the normal range for men not taking
          Finasteride.You should also tell your healthcare provider if you have
          not been taking Finasteride as prescribed because this may affect the
          PSA test results.For more information, talk to your healthcare
          provider.
        </p>
      </li>
      <li>
        <p>
          There may be an increased risk of a more serious form of prostate
          cancer in men taking finasteride at 5 times the dose of Finasteride.
        </p>
        <p> The most common side effects of Finasteride include : </p>
      </li>
      <li> decrease in sex drive </li>
      <li> trouble getting or keeping an erection </li>
      <li>
        <p> a decrease in the amount of semen </p>
        <p>
          The following have been reported in general use with Finasteride :
        </p>
      </li>
      <li>
        breast tenderness and enlargement.Tell your healthcare provider about
        any changes in your breasts such as lumps, pain or nipple discharge.
      </li>
      <li> depression; </li>
      <li>
        decrease in sex drive that continued after stopping the medication;
      </li>
      <li>
        allergic reactions including rash, itching, hives and swelling of the
        lips, tongue, throat, and face;
      </li>
      <li>
        problems with ejaculation that continued after stopping medication;
      </li>
      <li> testicular pain; </li>
      <li>
        difficulty in achieving an erection that continued after stopping the
        medication;
      </li>
      <li> male infertility and / or poor quality of semen. </li>
      <li>
        <p> in rare cases, male breast cancer. </p>
        <p>
          Tell your healthcare provider if you have any side effect that bothers
          you or that does not go away.
        </p>
        <p>
          These are not all the possible side effects of Finasteride.For more
          information, ask your healthcare provider or pharmacist.Call your
          doctor for medical advice about side effects.You may report side
          effects to FDA at 1 - 800 - FDA1088.
        </p>
        <p>
          <strong> How should I store Finasteride ? </strong>
        </p>
      </li>
      <li>
        Store Finasteride at room temperature between 59˚ F to 86˚ F(15˚ C to
        30˚ C).
      </li>
      <li>
        <p>
          Keep Finasteride in a closed container and keep Finasteride tablets
          dry(protect from moisture).
        </p>
        <p>
          <strong>
            Keep Finasteride and all medicines out of the reach of children.
          </strong>
        </p>
        <p>
          <strong>
            General information about the safe and effective use of Finasteride.
          </strong>
        </p>
        <p>
          Medicines are sometimes prescribed for purposes other than those
          listed in this Patient Information.Do not use Finasteride for a
          condition for which it was not prescribed.Do not give Finasteride to
          other people, even if they have the same symptoms you have.It may harm
          them.
        </p>
      </li>
    </ul>
  </div>
);

const DrawerDummyContent = () => (
  <div
    style={{
      padding: "4rem"
    }}
  >
    <h2>Ideas for the Perfect Fall Getaway</h2>
    <p>
      When most people think of ideal times for a weekend getaway, summer is
      usually the first season that comes to mind. The sun is out, the tunes are
      cranked to 11 and generally speaking, it’ s the best time to be outside
      doing fun things. Or, at least, that’ s common perception....
    </p>
  </div>
);
