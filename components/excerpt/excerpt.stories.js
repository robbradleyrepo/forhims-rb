import React from "react";
import { storiesOf } from "@storybook/react";
import { text, number } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";

import { Excerpt } from "./excerpt.component";

storiesOf("Components|Excerpt", module).add("Default Excerpt", () => {
  const limit = number("Excerpt Limit", 120);
  const defaultText = `### What is the most important information I should know about Addyi?
  
  Your risk of severe low blood pressure and fainting (loss of consciousness) is increased if you take Addyi and:
  - drink alcohol. Do not drink alcohol if you take Addyi.
  - take certain prescription medicines, over-the-counter medicines, or herbal supplements. Do not take or start taking any prescription medicines, over-the-counter medicines, or herbal supplements while taking Addyi until you have talked with your doctor. Your doctor will tell you if it is safe to take other medicines or herbal supplements while you are taking Addyi.
  - have liver problems. Do not take Addyi if you have liver problems.
  
  __If you take Addyi and you feel lightheaded or dizzy__, lie down right away. Get emergency medical help or ask someone to get emergency medical help for you if the symptoms do not go away or if you faint (lose consciousness). If you faint (lose consciousness), tell your doctor as soon as you can.
  
  Addyi is only available through the Addyi Risk Evaluation and Mitigation Strategy (REMS) Program because of the increased risk of severe low blood pressure and fainting (loss of consciousness) with alcohol use. You can only get Addyi from pharmacies that are enrolled in the Addyi REMS Program.
  
### Who should not take Addyi?

  __Do not take Addyi if you:__
   - drink alcohol
   - take certain other medicines. Taking Addyi with certain other medicines can increase the amount of Addyi in your blood and cause severe low blood pressure, fainting (loss of consciousness), and sleepiness.
  - Do not take Addyi if you are taking any of the following medicines:
  	- certain medicines used to treat HIV-1 infection
  	- certain medicines that you take by mouth used to treat fungal infections
  	- certain antibiotics, including:
  		- ciprofloxacin (CIPRO, CIPRO XR)
  		- telithromycin (KETEK)
  		- erythromycin (ERY-TAB, ERYC, PCE)
  		- clarithromycin (BIAXIN)
  	- certain medicines used to treat Hepatitis C infection
  	- certain medicines used to treat high blood pressure, chest pain (angina), or other heart problems
  	- nefazodone: a medicine used to treat depression
 
 __Ask your doctor or pharmacist if you are not sure if you take any of these types of medicines.__ These are examples of the types of medicines that you should not take if you are taking Addyi. Tell your doctor about all of the medicines you take before you start taking Addyi.
  - have liver problems`;

  const content = text("Content", defaultText);

  return (
    <Excerpt
      content={content}
      handleReadMore={action("read more")}
      limit={limit}
    />
  );
});
