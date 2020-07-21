import React from "react";
import PropTypes from "prop-types";
import { equals } from "ramda";

import { PlainRadioField } from "../../../../../components/radio-field-list-item/plain";
import { Markdown } from "../../../../../components/markdown";
import { OptionText, OptionLink } from "./questionnaire-option.style";
import { Field } from "redux-form";
import { TextField } from "../../../../../components/text-field";
import { required } from "../../../../../utils/form-validation";

const ParagraphRenderer = props => <OptionText {...props} />;
const LinkRenderer = ({ href, children }) => (
  <OptionLink to={href}>{children}</OptionLink>
);
LinkRenderer.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any
};

export const QuestionnaireOption = ({ input, meta, ...moreInputProps }) => {
  const { id, name, value, label, alwaysDisabled } = moreInputProps;
  const optionIsTextInput = equals(value, "userInput");
  return (
    <PlainRadioField
      input={input}
      meta={meta}
      name={name}
      value={value}
      id={id}
      disabled={alwaysDisabled}
    >
      {optionIsTextInput ? (
        <Field
          component={TextField}
          id={`${name}-comments`}
          label={label}
          name={`${name}-userInput`}
          validate={equals(input.value, value) ? [required] : []}
        />
      ) : (
        <Markdown
          content={label}
          renderers={{
            paragraph: ParagraphRenderer,
            link: LinkRenderer
          }}
        />
      )}
    </PlainRadioField>
  );
};

QuestionnaireOption.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  onEdit: PropTypes.func,
  isEditable: PropTypes.bool,
  address: PropTypes.object
};
