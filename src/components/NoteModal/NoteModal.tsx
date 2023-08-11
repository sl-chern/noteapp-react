import { useEffect } from 'react'
import { INote } from "../../models/INote"
import { Modal } from "../Modal"
import { Portal } from "../Portal"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from "../../data/noteValidationSchema"
import { categoriesOptions } from '../../data/categoriesOptions'
import { IOption } from '../../models/IOption'
import { Button } from '../Button'
import classNames from 'classnames'
import { NoteSubmitForm } from '../../types'

export type NoteModalProps = {
  header: string,
  buttonLabel: string,
  initialValue?: INote,
  onSubmit: (data: NoteSubmitForm) => void,
  visibility: boolean,
  setVisibility: (newVisibility: boolean) => void
}

export const NoteModal: React.FC<NoteModalProps> = ({header, buttonLabel, initialValue, onSubmit, visibility, setVisibility}): React.ReactNode => {
  const { register, handleSubmit, setValue, reset } = useForm<NoteSubmitForm>({
    resolver: yupResolver(schema),
    mode: "onTouched"
  })

  useEffect(() => {
    if(!visibility) {
      reset()
      document.body.classList.remove('overflow-hidden', 'h-screen')
    }
    else {
      if(typeof initialValue !== 'undefined') {
        setValue('name', initialValue.name)
        setValue('content', initialValue.content)
        setValue('category', initialValue.category)
      }
      document.body.classList.add(classNames('overflow-hidden'), classNames('h-screen'))
    }
  }, [visibility])

  return visibility
    ? (
        <Portal>
          <Modal
            closeModal={() => { setVisibility(false) }}
          >
            <div className="flex justify-center">
              <h2 className="font-bold font-openSans text-3xl text-light-300">{header}</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-2 p-4'>
                <label className="flex flex-col text-light-300 font-roboto text-lg">
                  Name
                  <input {...register('name')} name="name" type="text" className="bg-transparent p-2 border-2 border-light-300 border-solid rounded outline-none text-light-300 font-roboto w-full"/>
                </label>

                <label className="flex flex-col text-light-300 font-roboto text-lg">
                  Category
                  <select {...register('category')} name="category" className=" w-full h-12 bg-transparent p-2 border-2 border-light-300 border-solid rounded outline-none text-light-300 font-roboto">
                    <option value="" disabled selected>Select category</option>
                    {
                      categoriesOptions.map((item: IOption, index: number): React.ReactElement => 
                        <option key={`categoryoption${index}`} value={item.value} className="text-dark-200 font-roboto p-2">{item.label}</option>
                      )
                    }
                  </select>
                </label>

                <label className="flex flex-col text-light-300 font-roboto text-lg  w-full">
                  Content
                  <textarea {...register('content')} name="content" className="bg-transparent p-2 border-2 border-light-300 border-solid rounded outline-none text-light-300 font-roboto resize-none h-24"></textarea>
                </label>

                <Button 
                  className={classNames('w-32 mx-auto hover:bg-light-300 hover:text-dark-200 mt-4')}
                  type='submit'
                >
                  {buttonLabel}
                </Button>
              </div>
            </form>
          </Modal>
        </Portal>
      )
    : null
}