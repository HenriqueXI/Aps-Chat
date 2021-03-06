import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

export { Form } from '@unform/web';

export function Input({ name, ...rest }) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])
  return <input ref={inputRef} defaultValue={defaultValue} {...rest} />
}