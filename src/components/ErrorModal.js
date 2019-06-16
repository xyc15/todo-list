import React from 'react';
import Modal from 'react-modal';

export default class ErrorModal extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Modal 
                    className='modal'
                    contentLabel='Error Message'
                    isOpen={!!this.props.message}
                    onAfterOpen={this.handleAfterOpen}
                    onRequestClose={this.handleRequestClose}
                    closeTimeoutMS={100}
                    ariaHideApp={false}
                >
                    <div>
                        <p>{this.props.message}</p>
                        <button className='button--small' onClick={this.props.handleCloseModal}>Okay</button>
                    </div>
                </Modal>
            </div>
        )
    }
}
