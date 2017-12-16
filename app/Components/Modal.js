import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { closeModal } from "../actions/App";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { actions, activate } = this.props;
    return (
      <div className={"modal-bg " + activate}>
        <div className="modal-content">
          <span onClick={() => this.props.actions.closeModal()}>close</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activate: state.Modal.active };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ closeModal: closeModal }, dispatch)
  };
}

Modal = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default Modal;
