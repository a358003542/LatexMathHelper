import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from 'react-bootstrap/Button';

class ModalExample1 extends React.Component {
    constructor(props) {
        super(props);
        window.modal_example1 = this;
        this.state = {
            show: false
        };
    }

    handleClose(){
        this.setState({show:false})
    }
    handleShow(){
        this.setState({show:true})
    }

    render() {
        return (
            <>
                <Modal id="example1" show={this.state.show} onHide={() =>this.handleClose()}>
                    <Modal.Dialog>

                        <Modal.Header closeButton>
                            <Modal.Title>Example1</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div className="row">
                                <div className="col">
                                    <pre>$$a_1x_1 + a_2x_2 + \cdots + a_nx_n = b$$
                                    </pre>
                                </div>

                                <div className="col">
                                    $$a_1x_1 + a_2x_2 + \cdots + a_nx_n = b$$
                                </div>

                            </div>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={()=>this.handleClose()}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>
            </>
        )
    }
}

export default ModalExample1;