import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

class ModalReference extends React.Component {
  constructor(props) {
    super(props);
    window.modal_reference = this;
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false })
  }
  handleShow() {
    this.setState({ show: true })
  }
  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={() => this.handleClose()}>
          <Modal.Dialog>

            <Modal.Header closeButton>
              <Modal.Title>参考资料</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <ul>
                <li>pdf: Unicode characters and corresponding Latex math code commands.</li>
                <li>pdf: Comprehensive List of Mathematical Symbols, Math Vault.</li>
                <li>pdf: Short Math Guide for LaTeX, Michael Downes.</li>
              </ul>

            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </>
    )
  }
}

export default ModalReference;