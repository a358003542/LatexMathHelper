import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from 'react-bootstrap/Button';

class ModalHelp extends React.Component {
  constructor(props) {
    super(props);
    window.modal_help = this;
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
              <Modal.Title>帮助信息</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <ul>
                <li>Unicode符号查询: <a href="https://unicode-table.com/cn/">unicode-table</a>。
                  如果有一些符号看上去大概差不多的，那么在应用上拉丁字母和扩展分区的优先级会高一些。</li>
                <li>希腊字母有一些没有列出来是因为它们和平时使用的拉丁字母是一样的。</li>
                <li>数学字体的切换只对拉丁大写字母ABC等有意义，一些小写字母加粗推荐使用boldsymbol命令。</li>
                <li>数学着重符号比如$\acute"{"a"}"$等可能有对应的Unicode编码，但显示效果很不一样，个人推断这些生成的符号可能就是Tex排版出来的，并没有所谓的Unicode符号对应。</li>
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

export default ModalHelp;