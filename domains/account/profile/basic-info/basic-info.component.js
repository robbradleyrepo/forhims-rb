import React from "react";
import PropTypes from "prop-types";
import { Field, Form } from "redux-form";

import { Block } from "../../../../components/block";
import { Button } from "../../../../components/button";
import {
  required,
  phoneNumber,
  minLength,
  email,
  normalizeAge,
  normalizePhone,
  age
} from "../../../../utils/form-validation";
import { TextField } from "../../../../components/text-field";

import {
  BasicInfoLabel,
  BasicInfoValue,
  BasicInfoItem
} from "./basic-info.style";
import { ToggleEditButton } from "../profile.style";

import { EditIcon } from "../../../../components/icons/edit-icon";
import { CloseIcon } from "../../../../components/icons/close-icon";

const minLength2 = minLength(2);
const AUTOCOMPLETE_CONTEXT = "profile";

const BasicInfoForm = ({
  handleClickCancel,
  handleSaveBasicInfo,
  handleSubmit
}) => (
  <Form onSubmit={handleSubmit(handleSaveBasicInfo)}>
    <Block mb={4}>
      <Field
        component={TextField}
        label="First Name"
        name="firstName"
        validate={[required, minLength2]}
        context={AUTOCOMPLETE_CONTEXT}
      />
    </Block>
    <Block mb={4}>
      <Field
        component={TextField}
        label="Last Name"
        name="lastName"
        validate={[required, minLength2]}
        context={AUTOCOMPLETE_CONTEXT}
      />
    </Block>
    <Block mb={4}>
      <Field
        component={TextField}
        label="Phone"
        name="phone"
        normalize={normalizePhone}
        validate={[required, phoneNumber]}
        context={AUTOCOMPLETE_CONTEXT}
        maxLength={11}
      />
    </Block>
    <Block mb={4}>
      <Field
        component={TextField}
        label="Email"
        name="email"
        validate={[required, email]}
        context={AUTOCOMPLETE_CONTEXT}
      />
    </Block>
    <Block mb={4}>
      <Field
        component={TextField}
        label="Birthday"
        name="dob"
        validate={[required, age]}
        normalize={normalizeAge}
        context={AUTOCOMPLETE_CONTEXT}
      />
    </Block>
    <Block display="flex" flexDirection="column" alignItems="center">
      <Block mb={4}>
        <Button label="Save changes" type="submit" />
      </Block>
      <ToggleEditButton type="button" onClick={handleClickCancel}>
        <CloseIcon height={14} />Cancel
      </ToggleEditButton>
    </Block>
  </Form>
);
BasicInfoForm.propTypes = {
  handleClickCancel: PropTypes.func,
  handleSaveBasicInfo: PropTypes.func,
  handleSubmit: PropTypes.func
};

const BasicInfoDisplay = ({ fullName, email, dob, phone, handleClickEdit }) => (
  <Block>
    <Block mb={4}>
      <BasicInfoItem>
        <BasicInfoLabel>Name</BasicInfoLabel>
        <BasicInfoValue>{`${fullName}`}</BasicInfoValue>
      </BasicInfoItem>
      <BasicInfoItem>
        <BasicInfoLabel>Email</BasicInfoLabel>
        <BasicInfoValue>{email}</BasicInfoValue>
      </BasicInfoItem>
      <BasicInfoItem>
        <BasicInfoLabel>Phone</BasicInfoLabel>
        <BasicInfoValue>{phone}</BasicInfoValue>
      </BasicInfoItem>
      <BasicInfoItem>
        <BasicInfoLabel>Birthday</BasicInfoLabel>
        <BasicInfoValue>{dob}</BasicInfoValue>
      </BasicInfoItem>
    </Block>
    <ToggleEditButton type="button" onClick={handleClickEdit}>
      <EditIcon height={16} />Edit
    </ToggleEditButton>
  </Block>
);
BasicInfoDisplay.propTypes = {
  fullName: PropTypes.string,
  email: PropTypes.string,
  dob: PropTypes.string,
  phone: PropTypes.string,
  handleClickEdit: PropTypes.func
};

export const BasicInfoComponent = ({
  userProfile: { fullName, phone, dob, email },
  toggleIsEditing,
  isEditing,
  handleSubmit,
  handleSaveBasicInfo
}) => (
  <Block>
    {isEditing ? (
      <BasicInfoForm
        handleSubmit={handleSubmit}
        handleClickCancel={() => toggleIsEditing(false)}
        handleSaveBasicInfo={handleSaveBasicInfo}
      />
    ) : (
      <BasicInfoDisplay
        fullName={fullName}
        phone={phone}
        dob={dob}
        email={email}
        handleClickEdit={() => toggleIsEditing(true)}
      />
    )}
  </Block>
);

BasicInfoComponent.propTypes = {
  isEditing: PropTypes.bool,
  toggleIsEditing: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleSaveBasicInfo: PropTypes.func,
  userProfile: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    fullName: PropTypes.string,
    email: PropTypes.string,
    dob: PropTypes.string,
    phone: PropTypes.string
  })
};
