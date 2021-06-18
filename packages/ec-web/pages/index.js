import StrapiClient from '../lib/strapi-client';
import Card from '../components/categoryCard';
import Head from 'next/head'
//import Posts from './posts'

const client = new StrapiClient()
export const getStaticProps = async () => {
    const lists = await client.fetchData('/navigation');
    return {
        props: {
            data: lists
        }
    }
}

export default function Home({ data }) {
    return (
        <div className="container">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/> 
        </Head>
        <section className="u-clearfix u-custom-color-1 u-section-1" id="sec-9709" >
        <div className="u-clearfix u-sheet u-sheet-1">
            <div className='title'>Cần tìm người? Hãy đến với chúng tôi</div>
            <div className="input-group">
              <input type="search" className="form-control rounded" placeholder="logo design" aria-label="logo design"
                aria-describedby="search-addon" />
              <button type="button" className="btn btn-outline-primary">Tìm kiếm</button>
            </div>
        </div>
      </section>
      <section
        className="u-clearfix u-custom-color-6 u-section-2"
        id="sec-b0f3"
      >
          <div className='title'>Những phân loại được yêu thích</div>
          <div className='container'>
          {
                (data.categories).map(card => (
                    <Card key={card._id} props={card} className='one-card'/>
                ))
          }
          </div>
      </section>

    <section
        className="u-clearfix u-custom-color-8 u-section-3"
        id="sec-3036"
      >
        <div className='title'>BEST FREELANCER</div>
        <div className='container'>

        </div>
    </section>
        
    <style jsx>
        {`
            .title{
                text-align: center;
                font-size: 3.5rem;
                font-weight: 700;
                margin: 25px;
                display: block;
                padding: 10px;
                }
            #sec-9709{
                font-family: Georgia, sans-serif;
                padding: 20px;
                
                .input-group{
                width: 90%;
                margin-left: auto;
                margin-right: 7%;
                .form-control.rounded{
                    align-items: center;
                }
                }
            }
            section > .container{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                margin-left: 4%;
                margin-right: 5%;
                .one-card{
                    margin-bottom: 10px;
                }
            }
        `}
    </style>
    </div>
    )
  }
