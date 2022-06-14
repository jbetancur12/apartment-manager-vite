import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Button from '../../../Button/Button'
import Input from '../../../Input/Input'
import useAxios from 'axios-hooks'

interface Tenant {
  firstName: string
  lastName: string
  email: string
  doc: number
  phone: string
  address: string
}

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Tenant>()

  const [
    /* eslint no-empty-pattern: "error" */
    { data },
    executePost
  ] = useAxios(
    {
      url: 'http://192.168.0.6:3000/tenants',
      method: 'POST'
    },
    { manual: true }
  )

  console.log(data)

  const onSubmit: SubmitHandler<Tenant> = (data) => {
    void executePost({
      data
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type='number'
        min='0'
        placeholder='Id Document'
        label='Document'
        {...register('doc', {
          required: 'Document is required.',
          valueAsNumber: true,
          min: { value: 0, message: 'Min Value is 0' }
        })}
        error={errors.doc?.message}
      />
      <Input
        type='text'
        placeholder='firstname'
        label='Name'
        {...register('firstName', { required: 'Name is required.' })}
        error={errors.firstName?.message}
      />
      <Input
        type='text'
        placeholder='lastname'
        label='LastName'
        {...register('lastName', { required: 'LastName is required.' })}
        error={errors.lastName?.message}
      />

      <Input
        type='email'
        placeholder='Email'
        label='Email'
        {...register('email', { required: 'email is required.' })}
        error={errors.email?.message}
      />

      <Input
        type='tel'
        placeholder='Phone'
        label='Phone'
        {...register('phone', {
          required: 'Phone is required.',
          pattern: { value: /^[0-9]*$/, message: 'Fill a valid number phone' }
        })}
        error={errors.phone?.message}
      />

      <Input
        type='text'
        placeholder='Address'
        label='Address'
        {...register('address', { required: 'Address is required.' })}
        error={errors.address?.message}
      />

      <Button type='submit' label='Submit' variant='secondary' />
    </form>
  )
}

export default Form
