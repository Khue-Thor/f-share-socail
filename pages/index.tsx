import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NextPage } from 'next'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <h1 className='text-3xl font-bold underline mt-3'>Social Friend</h1>
  )
}

export const getServerSideProps = async () => {
  const response = await axios.get('http://localhost:3000/api/post');

  console.log(response)

  return {
    props: {}
  }
}

export default Home