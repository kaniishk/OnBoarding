import React, { Component } from 'react'
import './formStyle.css';
import { Step1 } from './steps/Step1';
import Stepper from 'react-stepper-horizontal/lib/Stepper';

export default class FormComponent extends Component {
    state = {
        data : {
            fullName : '',
            dispName : ''
        },
        errors : {},
        currentStep: 0
    };
    
    render() {
        const handleChange = (e) => {
            const {data} = this.state;
            data[e.target.name] = e.target.value;
            this.setState({data});
            // console.log('change');
        }
        const handleNext = (e) => {
            e.preventDefault();
            // console.log('next');
            let {currentStep} = this.state;
            currentStep++;
            this.setState({currentStep});
        }

        return (
            <div className='form-container container col-lg-4 col-md-4 col-sm-6'>
                <div className='row stepper mb-4'>
                <Stepper 
                    steps={ [{},{},{},{}] } 
                    activeStep={this.state.currentStep}
                    activeColor={'#5135e4'}
                    completeColor={'#5135e4'}
                    size={42}
                    circleFontSize={14}
                    completeBarColor={'#5135e4'}
                     />
                </div>
                <div className='row formSteps'>
                    <Step1 
                        data={this.state.data}
                        handleChange={handleChange}
                        />
                </div>
                <div className='actionBtn'>
                    <button  
                        className="btn btn-primary btn-lg nextBtn"
                        onClick={handleNext}>
                            Create Workspace
                    </button>
                </div>
            </div>
        )
    }
}
