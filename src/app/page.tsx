"use client";
import { Button } from "@/components/Button";
import { FormAddNewCar } from "@/components/FormAddNewCar/FormAddNewCar";
import { ListCars } from "@/components/ListCars";
import Modal from "@/components/Modal/Modal";
import { DataProvider } from "@/contexts/data";
import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <DataProvider>
      <main>
        <h1 className="title">Lista de veículos</h1>
        <h2 className="sub-title">Agrupados por marca</h2>

        <ListCars />

        <Button
          onClick={() => setModalOpen((modalState) => !modalState)}
          text="Adicionar novo carro"
          icon={<IoAddCircle size={22} />}
        />
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <FormAddNewCar />
        </Modal>
        <ToastContainer />
      </main>
    </DataProvider>
  );
}
