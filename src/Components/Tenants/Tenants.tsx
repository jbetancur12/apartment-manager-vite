import React from "react";
import Button from "../Button/Button";
import { BsPlusLg } from "react-icons/bs";
import { useModal } from "../../hooks/useModal";
import Modal from "../Modal/Modal";
import Table from "./Table";
import { data } from "./data";
import "./Tenants.scss";
import Form from "./components/Form";

const Tenants = () => {
  const { isShown, toggle } = useModal();

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
      {/* <Table data={data} /> */}
      <Table />
    </div>
  );
};

export default Tenants;
