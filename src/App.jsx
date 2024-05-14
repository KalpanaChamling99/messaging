import { Formik, Form,Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
import { Loginvalidation } from './LoginValidation';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

const initialValue = {
  email: '',
  password: ''
}
const loginApi = import.meta.env.VITE_LOGIN_KEY;

function App() {
  const submitHandler = async({values,resetForm}) =>{
    // const payload = {
    //   email: values.email,
    //   password: values.password
    // }
    const payload = {
      username: 'kminchelle',
      password: '0lelplR',
      country:''
    }
    try{
      const response = await axios.post(loginApi, payload,{
        header:{
          'Content-Type': 'application/json'
        }
      });
      if( response.status == 200 ){
        toast.success('Login successfully!')
      }
    }catch{
      toast.error('Login failed !')
    }
  }

  return (
    <>
      <ToastContainer />
      <div className='w-[450px] ml-auto mr-auto border border-gray-100 rounded-sm box-shadow-sm  bg-slate-50 mt-[100px] p-5'>
        <h2 className='text-[30px] mb-8 text-center'>Login Form</h2>
        <Formik
          initialValues={initialValue}
          validationSchema={Loginvalidation}
          onSubmit={submitHandler}
        >
          {({setFieldValue,errors}) =>(
            <Form>
              <div className="form-input">
                <label className='w-100 block'>Email</label>
                <Field name='email' />
              </div>
              <ErrorMessage component="div"  name="email" className='mt-1 text-sm text-rose-400'/>

              <div className="form-input mt-5">
                <label className='w-100 block'>Password</label>
                <Field type='password' name='password' />
              </div>
              <ErrorMessage component='div' name='password' className='mt-1 text-sm text-rose-400'/>
              <div className="btn-section mt-4">
                <button type='submit'>Login</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  )
}

export default App
