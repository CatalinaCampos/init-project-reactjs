import React from "react";
import PropTypes from "prop-types";
import {
  InputGroup,
  FormControl,
  Button,
  DropdownButton,
  Dropdown
} from "react-bootstrap";

const BasicInput = ({ size, placeholder, value }) => (
  <InputGroup size={size}>
    <FormControl placeholder={placeholder} value={value} />
  </InputGroup>
);

BasicInput.propTypes = {
  size: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

BasicInput.defaultProps = {
  size: "sm",
  placeholder: null,
  value: null
};

const InputPrepend = ({
  size,
  text,
  placeholder,
  ariaLabel,
  ariaDescribedby
}) => (
  <InputGroup size={size} className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1">{text}</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder={placeholder}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
    />
  </InputGroup>
);

InputPrepend.propTypes = {
  size: PropTypes.string,
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaDescribedby: PropTypes.string
};

InputPrepend.defaultProps = {
  size: "sm",
  placeholder: null,
  ariaLabel: null,
  ariaDescribedby: null
};

const InputPrependRight = ({
  size,
  placeholder,
  ariaLabel,
  ariaDescribedby,
  text
}) => (
  <InputGroup size={size} className="mb-3">
    <FormControl
      placeholder={placeholder}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
    />
    <InputGroup.Append>
      <InputGroup.Text id="basic-addon2">{text}</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
);

InputPrependRight.propTypes = {
  size: PropTypes.string,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaDescribedby: PropTypes.string,
  text: PropTypes.string.isRequired
};

InputPrependRight.defaultProps = {
  size: "sm",
  placeholder: null,
  ariaLabel: null,
  ariaDescribedby: null
};

const InputCheckbox = ({ size, ariaLabelInp, ariaLabelForm }) => (
  <InputGroup size={size} className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label={ariaLabelInp} />
    </InputGroup.Prepend>
    <FormControl aria-label={ariaLabelForm} />
  </InputGroup>
);

InputCheckbox.propTypes = {
  size: PropTypes.string,
  ariaLabelInp: PropTypes.string,
  ariaDescribedby: PropTypes.string
};

InputCheckbox.defaultProps = {
  size: "sm",
  ariaLabelInp: null,
  ariaDescribedby: null
};

const InputRadio = ({ size, ariaLabelInp, ariaLabelForm }) => (
  <InputGroup size={size}>
    <InputGroup.Prepend>
      <InputGroup.Radio aria-label={ariaLabelInp} />
    </InputGroup.Prepend>
    <FormControl aria-label={ariaLabelForm} />
  </InputGroup>
);

InputRadio.propTypes = {
  size: PropTypes.string,
  ariaLabelInp: PropTypes.string,
  ariaLabelForm: PropTypes.string
};

InputRadio.defaultProps = {
  size: "sm",
  ariaLabelInp: null,
  ariaLabelForm: null
};

const InputMultiAddon = ({ addon1, addon2, placeholder, ariaLabel }) => (
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>{addon1}</InputGroup.Text>
      <InputGroup.Text>{addon2}</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl placeholder={placeholder} aria-label={ariaLabel} />
  </InputGroup>
);

InputMultiAddon.propTypes = {
  addon1: PropTypes.string.isRequired,
  addon2: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string
};

InputMultiAddon.defaultProps = {
  placeholder: null,
  ariaLabel: null
};

const InputMultiAddonRight = ({ placeholder, ariaLabel, addon1, addon2 }) => (
  <InputGroup className="mb-3">
    <FormControl placeholder={placeholder} aria-label={ariaLabel} />
    <InputGroup.Append>
      <InputGroup.Text>{addon1}</InputGroup.Text>
      <InputGroup.Text>{addon2}</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
);

InputMultiAddonRight.propTypes = {
  addon1: PropTypes.string.isRequired,
  addon2: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string
};

InputMultiAddonRight.defaultProps = {
  placeholder: null,
  ariaLabel: null
};

const InputBtn = ({ variant, title, ariaDescribedby, placeholder }) => (
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <Button variant={variant}>{title}</Button>
    </InputGroup.Prepend>
    <FormControl aria-describedby={ariaDescribedby} placeholder={placeholder} />
  </InputGroup>
);

InputBtn.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string.isRequired,
  ariaDescribedby: PropTypes.string,
  placeholder: PropTypes.string
};

InputBtn.defaultProps = {
  variant: "info",
  ariaDescribedby: null,
  placeholder: null
};

const InputBtnRight = ({
  placeholder,
  ariaLabel,
  ariaDescribedby,
  variant,
  title
}) => (
  <InputGroup className="mb-3">
    <FormControl
      placeholder={placeholder}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
    />
    <InputGroup.Append>
      <Button variant={variant}>{title}</Button>
    </InputGroup.Append>
  </InputGroup>
);

InputBtnRight.propTypes = {
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaDescribedby: PropTypes.string,
  variant: PropTypes.string,
  title: PropTypes.string.isRequired
};

InputBtnRight.defaultProps = {
  placeholder: null,
  ariaLabel: null,
  ariaDescribedby: null,
  variant: "info"
};

const InputDropdown = ({ items, variant, title, ariaDescribedby, size }) => (
  <InputGroup className="mb-3" size={size}>
    <DropdownButton
      as={InputGroup.Prepend}
      variant={variant}
      title={title}
      id="input-group-dropdown-1"
    >
      {items.map((item) => (
        <Dropdown.Item href={item.path} key={item.key}>
          {item.text}
        </Dropdown.Item>
      ))}
    </DropdownButton>
    <FormControl aria-describedby={ariaDescribedby} />
  </InputGroup>
);

InputDropdown.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string.isRequired,
  ariaDescribedby: PropTypes.string,
  size: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired
    })
  ).isRequired
};

InputDropdown.defaultProps = {
  variant: "info",
  ariaDescribedby: null,
  path: null,
  size: "md"
};

const InputDropdownRight = ({
  items,
  placeholder,
  ariaLabel,
  ariaDescribedby,
  variant,
  title,
  size
}) => (
  <InputGroup size={size}>
    <FormControl
      placeholder={placeholder}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
    />
    <DropdownButton
      as={InputGroup.Append}
      variant={variant}
      title={title}
      id="input-group-dropdown-2"
    >
      {items.map((item) => (
        <Dropdown.Item href={item.path} key={item.key}>
          {item.text}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  </InputGroup>
);

InputDropdownRight.propTypes = {
  variant: PropTypes.string,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaDescribedby: PropTypes.string,
  size: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      ariaDescribedby: PropTypes.string,
      key: PropTypes.string.isRequired
    })
  ).isRequired
};

InputDropdownRight.defaultProps = {
  variant: "info",
  ariaDescribedby: null,
  ariaLabel: null,
  placeholder: null,
  size: "md"
};

export {
  BasicInput,
  InputPrepend,
  InputPrependRight,
  InputCheckbox,
  InputRadio,
  InputMultiAddon,
  InputMultiAddonRight,
  InputBtn,
  InputBtnRight,
  InputDropdown,
  InputDropdownRight
};
