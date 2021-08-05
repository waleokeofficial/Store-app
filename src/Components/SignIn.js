import { Formik, Form, useField } from 'formik';
import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { string, object } from 'yup';


    const InputField = (props) => {
        const [field, meta] = useField(props);
        // console.log(field);

        return(
            <>
                <div className="InputField">
                    <label htmlFor={props.name}>{props.label}</label>
                    <input {...props} {...field}></input> 
                    {meta.touched && meta.error && <div className="text-danger">{meta.error}</div>}
                </div>
            </>
        )
    }

    const Schema = object ({
        username: string()
        .required("Username is Required"),
        password: string()
        .required("Passowrd is Required")
    })


const Signin = ()=>{
    const submitter=(e)=>{
        console.log(e)
    }

    return(
        <div className="row">
            <div className="col-2"></div>
            <div className="Formik col-2 block">

                <Formik
                initialValues
                initialValues={{
                    username: "",
                    password: ""
                }}
                validationSchema={Schema}
                onSubmit={submitter}
                >

                    <Form>
                        <h2>Signin Form</h2>
                        <InputField label="Username" name="username" id="username" placeholder="Username" type="text"></InputField> <br></br>
                        <InputField label="Password" name="password" id="password" placeholder="Password" type="password"></InputField> <br></br>
                        <button type="submit">Sign In</button>
                    </Form>
                </Formik>
            </div>
            <div className="col-2"></div>
        </div>
        
    )
}

export default Signin;



//     return(
//         <div>

//         </div>
//     )
//     // return(
//     //     <div className="row">
//     //         <div className="col-1"></div>
//     //         <div className="col-2">
//     //             <h2>Sign In</h2>
//     //             <div>
//     //                 <label>Username</label>
//     //                 <input></input>
//     //             </div>
//     //             <div>
//     //                 <label>Password</label>
//     //                 <input></input>
//     //             </div>
//     //             <div>
//     //                 <button>Sign In</button>
//     //             </div>
//     //         </div>
//     //         <div className="col-1"></div>
//     //     </div>
//     // )

// }
