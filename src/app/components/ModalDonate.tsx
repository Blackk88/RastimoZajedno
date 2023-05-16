"use client";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import heart from "@/assets/heart.png";

interface Props {
  dictionary: {
    title: string;
    local: string;
    international: string;
    clickHere: string;
  };
}

export default function ModalDonate({ dictionary }: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="my-5 text-center">
        <h2 className="text-center my-4 fw-bold">{dictionary.title}</h2>
        <Image
          src={heart}
          alt="Picture of big red heart on yellow background"
          className="heart-image cursor-pointer"
          width={300}
          height={250}
          role="button"
          onClick={handleShow}
        />
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <div className="bg-main rounded py-1 px-2">
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold">{dictionary.local}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>510-000000010181354</p>
            <p>CKB Banka AD Podgorica</p>
          </Modal.Body>
          <Modal.Header>
            <Modal.Title className="fw-bold">
              {dictionary.international}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>NVO “Rastimo Zajedno”</p>
            <p>SWIFT: CKBCMEPG</p>
            <p>IBAN: ME25510000000020322510</p>
            <p>CKB Banka AD Podgorica</p>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
