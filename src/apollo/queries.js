import { gql } from '@apollo/client'
const GET_DATA_QUERY = gql`
query {
  posts {
    data {
      title
      body{
          text
      }
      total_comments
      total_likes
      thumbnail{
        file_name
        url
      }
    }
    id
  }
  trips {
    data {
      title
      thumbnail{
        file_name
        url
      }
    }
    id
  }
}
`

export { GET_DATA_QUERY }