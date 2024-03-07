import { InputTextFieldInterfaces } from '@/interfaces/common.interfaces';
import React from 'react';
import { Form } from 'react-bootstrap';

const InputTextField: React.FC<InputTextFieldInterfaces> = ({
    fieldName,
    value,
    placeholder,
    inputFieldRef,
    handleOnChange,
    handleKeyDown,
    handleOnBlur,
    handleOnFocus,
    maxLength,
    minLength,
    isDisabled,
    isReadOnly,
    labelName,
    isRequired,
    type = 'text'
}) => {
    return (
        <Form.Group className="input-group-sm">
            {labelName && <label className="form-label form-text">{labelName} {isRequired && <span className="text-danger">*</span>} </label> }
            <input
                type={type}
                autoComplete="off"
                className={`form-control form-control-sm`}
                name={fieldName}
                placeholder={placeholder}
                ref={inputFieldRef}
                value={value}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                maxLength={maxLength}
                minLength={minLength}
                disabled={isDisabled}
                readOnly={isReadOnly}
                required={isRequired}
            />
        </Form.Group>
    );
}

export default InputTextField