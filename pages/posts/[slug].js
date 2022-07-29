import { GraphQLClient, gql } from 'graphql-request'
import Navbar from '../../components/Navbar';

const graphcms = new GraphQLClient(
  'https://api-eu-west-2.hygraph.com/v2/cl5z9pdqb2zjg01ut4ql1d7ib/master'
);

const QUERY = gql`
  query Post($slug: String!){
    post(where: {slug: $slug}){
        id
      title
      datePublished
      slug
      content {
        html
        text
      }
      coverPhoto {
        url
        publishedAt
        createdBy {
          id
        }
      }
      author {
        name
        author {
          url
        }
      }
    }
  }
`


const SLUGLIST = gql`
  {
    posts {
       slug 
    }
  }
`

export async function getStaticPaths() {
    const {posts} = await graphcms.request(SLUGLIST);
    return {
        paths: posts.map((post) => ({params: {slug: post.slug}})),
        fallback: false,
    }
}

export async function getStaticProps({params}) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, {slug})
    const post = data.post;
    return {
        props: {
            post,
        },
    revalidate: 10,
    }
}

export default function BlogPost({post}) {
    return (
        <main className= "blog">
          <div className='main blog__details'>
            <Navbar className="blog__nav"/>
            <h2 className='title'>{post.title}</h2>
            <div className='post_author'>
                <div className='author_text'>
                    <h6>AUTHOR:</h6>
                    <img src={post.author.author.url} alt="Author's Picture" />
                    <h6>{post.author.name}</h6>
                </div>
                <h6 className='post_date'>{post.datePublished}</h6>
            </div>
            <img src={post.coverPhoto.url} alt="Blog Image" className='cover' />
            
            <div className='post_content' dangerouslySetInnerHTML={{ __html: post.content.html}}>

            </div>
          </div>
            
        </main>
    )
}