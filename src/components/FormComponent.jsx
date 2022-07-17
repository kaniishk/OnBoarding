import React, { Component } from 'react'
import './styles.css';
import { Step1 } from './steps/Step1';
import { Step2 } from './steps/Step2';
import { Step3 } from './steps/Step3';
import { Step4 } from './steps/Step4';
import Stepper from 'react-stepper-horizontal/lib/Stepper';

export default class FormComponent extends Component {
    state = {
        data : {
            fullName : '',
            dispName : '',
            workspName: '',
            workspUrl : '',
            isIndividual : true
        },
        currentStep: 0,
        btnText : 'Create Workspace'
    };
    
    render() {
        // handling changes in Form input components 
        const handleChange = (e) => {
            const {data} = this.state;
            data[e.target.name] = e.target.value;
            this.setState({data});
            
        }
        // Create Workspace button works as next
        const handleNext = (e) => {          
            let {currentStep} = this.state;
            currentStep++;
            this.setState({currentStep});
            if(currentStep === 3)
                this.setState({btnText : 'Launch Eden'});
            if(currentStep > 3){
                this.setState({currentStep:0});
                this.setState({btnText : 'Create Workspace'});
            }
        }

        // Handling radio cards
        const handleTeamClick = (e) => {
            console.log('team');
            const {data} = this.state;
            data['isIndividual'] = false;
            this.setState({data});
        }
        const handleIndvClick = (e) => {
            console.log('indv');
            const {data} = this.state;
            data['isIndividual'] = true;
            this.setState({data});
        }

        // Changing the step Components
        const getStepComp = (step) => {
            switch(step){
                case 0 :
                    return <Step1
                    data={this.state.data}
                    handleChange={handleChange}
                    /> ;
                case 1: 
                    return <Step2
                    data={this.state.data}
                    handleChange={handleChange}
                    /> ;
                case 2 :
                    return <Step3
                    data={this.state.data}
                    handleIndvClick={handleIndvClick}
                    handleTeamClick={handleTeamClick}
                    /> ;
                case 3 :
                    return <Step4
                    data={this.state.data}
                    handleChange={handleChange}
                    /> ;
                default :
                    return <Step1
                    data={this.state.data}
                    handleChange={handleChange}
                    /> ;
            }
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
                    {getStepComp(this.state.currentStep)}
                </div>
                <div className='actionBtn'>
                    <button  
                        className="btn btn-primary btn-lg nextBtn"
                        onClick={handleNext}>
                            {this.state.btnText}
                    </button>
                </div>
            </div>
        )
    }
}
