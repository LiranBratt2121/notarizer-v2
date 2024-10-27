 import React from 'react'
import { FormField, Input } from './styles'
import { DropDownProps } from './types'

const DropDown: React.FC<DropDownProps> = ({name, onChange, options, value}) => {
  return (
    <FormField> 
      <Input as="select" name={name} value={value} onChange={onChange}>
        <option>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.value}</option>
        ))}
      </Input>
    </FormField>
  )
}

export default DropDown
