import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function Example() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Local Donations Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>510-000000010181354</p>
          <p> CKB Banka AD Podgorica</p>
        </Modal.Body>
        <Modal.Header>
          <Modal.Title>International Donations Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>NVO “Rastimo Zajedno”</p>
          <p>SWIFT: CKBCMEPG</p>
          <p>IBAN: ME25510000000020322510</p>
          <p>CKB Banka AD Podgorica</p>
        </Modal.Body>
      </Modal>
    </>
  )
}
