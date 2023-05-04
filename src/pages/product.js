import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '../../component/layout'
const inter = Inter({ subsets: ['latin'] })

export default function Product({}) {
    const columns = [
        {
            name: "Product Name",
            selector: row => row.title,
            sortable: true,
        },
        {
            name: "Price",
            selector: row => "$"+row.price,
        },
        {
          name: "Description",
          selector: row => row.description,
      },
        {
            name: "Photo",
            selector: row => <img src={row.images} width={300} height={300}/>,
        },
        {
            name: "Action",
            cell: (row) => <>
            <button className='btn btn-warning' onClick={() => alert("N/A")}>Edit</button>
            <button className='btn btn-danger' onClick={() => alert("N/A")}>Delete</button>
            </> 
        }
    ];
    const Products = async () => {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/`)
        setProduct(response.data)
        setfilterProd(response.data)
        console.log(product)}
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const [filterProd ,setfilterProd] = useState([]);
    const [product, setProduct] = useState([])

    const [rec , setRec] = useState();
    function handleFilter(event)
    {
        const searchData = filterProd.filter(row => 
            {
                return row.title.toLowercase().includes(event.target.value.toLowercase())
            })
            setRec(searchData)

    }
   

  return (
    <Layout>
      <Head>
        <title>PROD</title>
      </Head>
<main className={`${styles.main} ${inter.className}`}>
    <div className='container'>
    <div className="card">
        <DataTable
            title='Products'
            columns={columns}
            data={filterProd}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            pagination
            subHeader
            subHeaderComponent={
              <input type='text'
               placeholder='Search'
                className='form-control w-50'
                onChange={handleFilter}/>
            }>
        </DataTable>
        </div>
        </div>
    
</main>
    </Layout>
  )
}



