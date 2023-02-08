import { IProduct } from '../interfaces/IProduct'

interface Props {
  product: IProduct
}

export default function Product (props: Props): JSX.Element {
  const {
    product: {
      comments,
      description,
      imgAlt,
      imgSrc,
      name,
      uploadDate,
      warranty
    }
  } = props

  return (
    <div tabIndex={0} className='focus:outline-none mx-2 w-72 xl:mb-0 mb-8'>
      <div>
        <img alt={imgAlt} src={imgSrc} tabIndex={0} className='focus:outline-none w-full h-44' />
      </div>
      <div className='bg-white'>
        <div className='flex items-center justify-between px-4 pt-4'>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' tabIndex={0} className='focus:outline-none' width='20' height='20' viewBox='0 0 24 24' strokeWidth='1.5' stroke='#2c3e50' fill='none' strokeLinecap='round' strokeLinejoin='round'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2' />
            </svg>
          </div>
          <div className='bg-yellow-200 py-1.5 px-6 rounded-full'>
            <p tabIndex={0} className='focus:outline-none text-xs text-yellow-700'>Featured</p>
          </div>
        </div>
        <div className='p-4'>
          <div className='flex items-center'>
            <h2 tabIndex={0} className='focus:outline-none text-lg font-semibold'>{name}</h2>
            <p tabIndex={0} className='focus:outline-none text-xs text-gray-600 pl-5'>{uploadDate}</p>
          </div>
          <p tabIndex={0} className='focus:outline-none text-xs text-gray-600 mt-2'>{description}</p>
          <div className='flex mt-4'>
            <div>
              <p tabIndex={0} className='focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1'>{warranty}</p>
            </div>
            <div className='pl-2'>
              <p tabIndex={0} className='focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1'>{comments}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
