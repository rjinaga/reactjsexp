/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { CustomerFormViewProps, CustomerFormViewState } from './customer-form-view-props-state';
import customerValidator from '../../../business-rules/validate-customer';

class CustomerFormView extends React.Component<CustomerFormViewProps, CustomerFormViewState> {
    constructor(props: CustomerFormViewProps) {
        super(props);
        this.state = { name: '', email: '', isEdit: false };

        // Event Handler's
        this.handleEvent = this.handleEvent.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);

    }
    componentDidMount() {
        const {match} = this.props;

        const name = match && match.params && match.params.name;
        if (name) {
            this.props.editCustomer(name);
        }
    }
    componentWillReceiveProps(nextProps: CustomerFormViewProps) {
        const customerInfo = nextProps.customerInfo;
        if (customerInfo) {
            this.bindCustomerInfo(customerInfo.name, customerInfo.email);
        }
    }
    componentWillUnmount() {
        this.props.clearStore();
    }
    render(): JSX.Element {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-2 mb-3">
                            <label>Name</label>
                        </div>
                        <div className="col-md-4 mb-3">
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control" 
                                value={this.state.name}
                                onChange={(e): void => this.handleEvent(e)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mb-3">
                            <label>Email</label>
                        </div>
                        <div className="col-md-4 mb-3">
                            <input 
                                type="text" 
                                name="email" 
                                className="form-control" 
                                value={this.state.email}
                                onChange={(e): void => this.handleEvent(e)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mb-3">
                            <label/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                disabled={this.state.isEdit}
                                onClick={(): void => this.handleOnSubmit()}
                            >{this.state.isEdit ? 'Update' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    private handleEvent(event: any) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value } as any);
    }

    private handleOnSubmit() {
        const { name, email } = this.state;
        const result = customerValidator({name: name, email: email});
        if (result) {
            const validateMsg = this.handleValidateMsg(result);

            if (validateMsg) {
                alert(validateMsg);
                return;
            } else {
                const response = this.props.onSubmit(this.state);
                if (response) {
                    this.setState({name: '', email: ''});
                }
            }
        }
    }
    
    private handleValidateMsg(result: any) {
        let validateMsg = '';

        if (result) {

            // validate customer name
            result.name && result.name.forEach((val: any) => {
                validateMsg += (val + '\n');
            });

            // validate email
            result.email && result.email.forEach((val: any) => {
                validateMsg += (val + '\n');
            });
        }
        return validateMsg;
    }

    private bindCustomerInfo(name: string, email: string) {
        this.setState({name: name, email: email, isEdit: true});
    }
}

export default CustomerFormView;