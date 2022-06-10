import React from 'react'
import Button from '../Button/Button'
import { BsPlusLg } from 'react-icons/bs'
import { useModal } from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import TenantsTable from './components/TenantsTable/TenantsTable'
import { data } from './data'
import './Tenants.scss'
import Form from './components/Form/Form'

const Tenants = (): JSX.Element => {
  const { isShown, toggle } = useModal()

  return (
    <div>
      <Button
        label="Add Tenant"
        variant="sucess"
        icon={<BsPlusLg />}
        onClick={toggle}
        className="Tenants-button_margin"
      />
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={<Form />}
        classname="Tenants-modalWidth"
      />
      <div>
        <TenantsTable data={data} />
      </div>
    </div>
  )
}

export default Tenants
