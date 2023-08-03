import * as yup from 'yup'
import { categoriesOptions } from './categoriesOptions'
import { IOption } from '../models/IOption'

export const schema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  category: yup.string().oneOf(categoriesOptions.map((item: IOption): string => item.value)).required()
})