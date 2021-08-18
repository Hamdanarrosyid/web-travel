
import * as React from 'react'
import Hero from '../components/Hero'
import '../assets/styles.scss'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import { useQuery } from '@apollo/client'
import { GET_DATA_QUERY } from '../apollo/queries'
import CardTrip from '../components/CardTrip'
import Title from '../components/Title'
import Footer from '../components/Footer'
import CardPost from '../components/CardPost'

const IndexPAge = () => {
  const { loading, error, data } = useQuery(GET_DATA_QUERY)

  const checkIndexNumber = (index) => {
    return index % 5 === 0 || (index - 1) % 5 === 0
  }

  return (
    <main>
      <title>Home | Web Travel</title>
      <Hero />
      <Layout>
        <Banner />
        {/* Trips */}
        <section>
          <Title>Get inspired for your next trip</Title>
          <div className={'columns is-1 is-multiline'}>
            {
              loading ? (
                <p>Loading:...</p>
              ) : error ? (
                <p>Error</p>
              ) : (
                data.trips.map((trip, index) => (
                  <CardTrip trip={trip.data} key={trip.id} columnSize={checkIndexNumber(index) ? 'is-half' : 'is-one-third'} />
                ))
              )
            }
          </div>
        </section>
        {/* Posts */}
        <section>
          <Title>Today post top places to visit</Title>
          <div className={'columns is-1 is-multiline'}>
            {
              loading ? (
                <p>Loading:...</p>
              ) : error ? (
                <p>Error</p>
              ) : (
                data.posts.map((post) => (
                  <CardPost post={post.data} key={post.id}/>
                ))
              )
            }
          </div>
        </section>
      </Layout>
      <Footer/>
    </main>
  )
}





export default IndexPAge