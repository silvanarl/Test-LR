import { gql } from '@apollo/client';

export const GET_NOTES = {
  query: gql`
  {
	notes{
    id
    title
    cover_titular
    text
    }
  }`
};
