import React from "react";
import { storiesOf } from "@storybook/react";

import { TreatmentPlan } from "./treatment-plan.component";

const title = "Mock Treatment";
const description = "Please read carefully before consuming any mock products.";
const content = `**Your risk of SEVERE LOW BLOOD PRESSURE AND FAINTING (LOSS OF CONSCIOUSNESS) is increased if you take ADDYI and:**

- **drink alcohol. Do not drink alcohol if you take ADDYI.**
- **take certain prescription medicines, over-the-counter medicines, or herbal supplements. Do not take or start taking any prescription medicines, over-the-counter medicines, or herbal supplements while taking ADDYI until you have talked with your doctor.** Your doctor will tell you if it is safe to take other medicines or herbal supplements while you are taking ADDYI.
- **have liver problems.** Do not take ADDYI if you have liver problems.
`;

storiesOf("Domains|Treatments", module).add("Treatment Plan Page", () => (
  <TreatmentPlan title={title} description={description} content={content} />
));
