import { Formik, Form,Field, ErrorMessage } from 'formik';
import { Loginvalidation } from './LoginValidation';
import './App.css';

const initialValue = {
  email: '',
  password: ''
}

function App() {

  return (
    <>
      <div className='w-[450px] ml-auto mr-auto border border-gray-100 rounded-sm box-shadow-sm  bg-slate-50 mt-[100px] p-5'>
        <h2 className='text-[30px] mb-8 text-center'>Login Form</h2>
        <Formik
          initialValues={initialValue}
          validationSchema={Loginvalidation}
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
