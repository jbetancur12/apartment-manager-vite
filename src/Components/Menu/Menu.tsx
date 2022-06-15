import React from 'react'
import {
  MdApartment,
  MdAccountBalance,
  MdOutlineNotificationsNone
} from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { RiParentLine, RiSettings4Line } from 'react-icons/ri'
import './Menu.scss'
import { NavLink } from 'react-router-dom'

const Menu = (): JSX.Element => {
  return (
    <div className='Menu'>
      <a href='/' className='Menu-brand'>
        <MdApartment />
        <span className='Menu-brand-text'>Apartment Manager</span>
      </a>
      <div className='Menu-items'>
        <div className='Menu-items-content'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'Menu-items-item Menu-items-item_active'
                : 'Menu-items-item'}
          >
            <AiOutlineHome />
            <span className='Menu-items-text'>Dashboard</span>
          </NavLink>
          <NavLink
            to='/tenants'
            className={({ isActive }) =>
              isActive
                ? 'Menu-items-item Menu-items-item_active'
                : 'Menu-items-item'}
          >
            <RiParentLine />
            <span className='Menu-items-text'>Tenants</span>
          </NavLink>
          <NavLink
            to='/apartments'
            className={({ isActive }) =>
              isActive
                ? 'Menu-items-item Menu-items-item_active'
                : 'Menu-items-item'}
          >
            <MdApartment />
            <span className='Menu-items-text'>Apartments</span>
          </NavLink>
          <NavLink
            to='/balance'
            className={({ isActive }) =>
              isActive
                ? 'Menu-items-item Menu-items-item_active'
                : 'Menu-items-item'}
          >
            <MdAccountBalance />
            <span className='Menu-items-text'>Balance</span>
          </NavLink>
        </div>
      </div>
      <div className='Menu-items'>
        <div className='Menu-items-content'>
          <a href='/' className='Menu-items-item'>
            <RiSettings4Line />
            <span className='Menu-items-text'>Settings</span>
          </a>
          <a href='/' className='Menu-items-item'>
            <MdOutlineNotificationsNone />
            <span className='Menu-items-text'>Notifications</span>
            <span className='Menu-items-notifications' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Menu
