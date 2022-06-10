import React from 'react'
import {
  MdApartment,
  MdAccountBalance,
  MdOutlineNotificationsNone
} from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { RiParentLine, RiSettings4Line } from 'react-icons/ri'
import './Menu.scss'
import { Link } from 'react-router-dom'

const Menu = (): JSX.Element => {
  return (
    <div className="Menu">
      <a href="/" className="Menu-brand">
        <MdApartment />
        <span className="Menu-brand-text">Apartment Manager</span>
      </a>
      <div className="Menu-items">
        <div className="Menu-items-content">
          <Link to="/" className="Menu-items-item">
            <AiOutlineHome />
            <span className="Menu-items-text">Dashboard</span>
          </Link>
          <Link to="/tenants" className="Menu-items-item">
            <RiParentLine />
            <span className="Menu-items-text">Tenants</span>
          </Link>
          <a href="/" className="Menu-items-item">
            <MdApartment />
            <span className="Menu-items-text">Apartments</span>
          </a>
          <a href="/" className="Menu-items-item">
            <MdAccountBalance />
            <span className="Menu-items-text">Balance</span>
          </a>
        </div>
      </div>
      <div className="Menu-items">
        <div className="Menu-items-content">
          <a href="/" className="Menu-items-item">
            <RiSettings4Line />
            <span className="Menu-items-text">Settings</span>
          </a>
          <a href="/" className="Menu-items-item">
            <MdOutlineNotificationsNone />
            <span className="Menu-items-text">Notifications</span>
            <span className="Menu-items-notifications" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Menu
