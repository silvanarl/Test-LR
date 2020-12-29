import { gql } from '@apollo/client';

export const GET_NOTES = {
  query: gql`
  {
	notes{
    id
    title
    cover_titular
    }
  }`
};

export const GET_NOTE = {
  query: gql`
  {
	notes(id: "2" ){
    id
    title
    cover_titular
    text
    }
  }`
};