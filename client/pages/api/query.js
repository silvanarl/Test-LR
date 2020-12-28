import { gql } from '@apollo/client';

export const GET_NOTES = gql`
  {
	notes{
    id
    title
    cover_titular
  }
}
`;

export const GET_NOTE = gql`
  {
	notes{
    id
    title
    cover_titular
    text
  }
}
`;