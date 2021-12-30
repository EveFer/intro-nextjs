import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { loginAccount } from '../services/users/auth'
import ClipLoader from 'react-spinners/ClipLoader'

const schema = yup.object({
  email: yup.string().email('El email no es valido').required('El campo es requerido'),
  password: yup.string().required('El campo es requerido')
}).required('El campo es requerido')

export default function Home () {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  console.log(errors)
  const submitLogin = async (data) => {
    console.log(data)
    setLoading(true)
    const response = await loginAccount(data)
    console.log(response)
    const responseJSON = await response.json()
    console.log(responseJSON)
    if (response.status === 200) {
      router.push('/dashboard')
      sessionStorage.setItem('token', responseJSON.token)
      setLoading(false)
    }
  }

  return (
    <Layout title='Home'>
      {/* children */}
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 offset-md-3'>
            <form className='border rounded p-4 mt-5' onSubmit={handleSubmit(submitLogin)}>
              <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
                <input {...register('email')} type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
                <div id='emailHelp' className='form-text text-danger'>{errors.email?.message}</div>
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
                <input {...register('password')} type='password' className='form-control' id='exampleInputPassword1' />
                <div id='emailHelp' className='form-text text-danger'>{errors.password?.message}</div>
              </div>
              <div>
                <ClipLoader color='red' loading={loading} size={50} />
              </div>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}
