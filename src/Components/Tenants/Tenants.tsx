import React from 'react'
import Button from '../Button/Button'
import { BsPlusLg } from 'react-icons/bs'
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import TenantsTable from './components/TenantsTable/TenantsTable'
// import { data } from './data'
import './Tenants.scss'
import Form from './components/Form/Form'
import useAxios from 'axios-hooks'

const Tenants = (): JSX.Element => {
  const { isShown, toggle } = useModal()

  const [{ data, loading, error }] = useAxios('http://192.168.0.6:3000/tenants')

  if (loading) return <p>Loading...</p>
  if (error != null) return <p>Error!</p>

  const columns = [
    {
      header: 'Doc',
      cell: 'doc'
    },
    {
      header: 'Name',
      cell: 'firstName'
    },
    {
      header: 'LastName',
      cell: 'lastName'
    },
    {
      header: 'E-mail',
      cell: 'email'
    },
    {
      header: 'Phone',
      cell: 'phone'
    },
    {
      header: 'Address',
      cell: 'address'
    }
  ]

  return (
    <div>
      <Button
        label='Add Tenant'
        variant='sucess'
        icon={<BsPlusLg />}
        onClick={toggle}
        className='Tenants-button_margin'
      />
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<Form toogle={toggle} />}
        classname='Tenants-modalWidth'
      />
      <div>
        <TenantsTable data={data} columns={columns} />
      </div>
    </div>
  )
}

export default Tenants
