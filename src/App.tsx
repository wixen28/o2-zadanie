import { useForm, Controller } from "react-hook-form"

import { emailPattern } from "./global/utils/regex-patterns"
import { TextInputState, TextInputBodySize, TextInputLabelSize } from "./global/components/textInput/TextInput"
import useMockMutation from "./hooks/useMockApi"
import TextInput from "./global/components/textInput/TextInput"

const App = () => {
  const { handleSubmit, control, formState: { errors } } = useForm()  
  const { mockMutation, error, loading } = useMockMutation()

  const onSubmit = async (data: any) => {
    await mockMutation(data)
  }

  return (
    <div className='flex flex-col justify-start items-center h-screen'>
      <div className='flex flex-col'>
        <h1 className='mt-12 text-xl font-semibold'>Text input</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <div className='flex flex-col lg:flex-row  gap-[50px]'>
              <div className='flex flex-col mt-2 relative'>
                <h2 className=''>Enabled state</h2>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: emailPattern,
                      message: "Invalid email format"
                    }
                  }}
                  render={({ field }) => (
                    <TextInput 
                      type="email"
                      label="Input"
                      placeholder="Enter your email"
                      state={errors.email ? TextInputState.ERROR : TextInputState.ENABLED}
                      labelSize={TextInputLabelSize.LABEL_S} 
                      bodySize={TextInputBodySize.BODY_M}    
                      disabled={loading}
                      {...field}
                    />
                  )}
                />
                { errors.email && <p className='fixed mt-[120px] text-o2-content-onNeutral-danger text-xs'>{errors?.email.message?.toString()}</p> }
              </div>
              <div className='flex flex-col mt-2 pb-10'>
                <h2 className=''>Focus state</h2>
                <Controller
                  name="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 5,
                      message: "Password must be at least 5 characters long"
                    }
                  }}                 
                  render={({ field }) => (
                    <TextInput 
                      type="password"
                      label="Input"
                      placeholder="Enter your password"
                      state={errors.password ? TextInputState.ERROR : TextInputState.ENABLED}
                      labelSize={TextInputLabelSize.LABEL_S} 
                      bodySize={TextInputBodySize.BODY_M}
                      disabled={loading} 
                      {...field}
                    />
                  )}
                />
                { errors.password && <p className='fixed mt-[120px] text-o2-content-onNeutral-danger text-xs'>{errors?.password.message?.toString()}</p>}
              </div>
            </div>
            <button
              type="submit"
              className='w-[300px] md:w-[400px] h-[48px] mt-5 p-2 bg-o2-surface-brand text-white rounded-[12px] m-auto'  
            >
              Submit
            </button>
            { error && <p className='text-o2-content-onNeutral-danger text-xs m-auto'>{error}</p> }
          </form>
        </div>
      </div>
  )
}

export default App
