import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { GET_LAUNCH_DETAILS }from '../pages/launch'
import { Button } from '../components'

export { GET_LAUNCH_DETAILS }
export const TOGGLE_CART = gql`
mutation addOrRemoveFromCart($launchId: ID!) {
  addOrRemoveFromCart(id: $launchId) @client
}
`

export const CANCEL_TRIP = gql`
mutation cancel($launchId: ID!) {
  cancelTrip(launchId: $launchId) {
    success
    message
    launches {
      id
      isBooked @client
    }
  }
}
`

export default function ActionButton({ isBooked, id, isInCart }) {
  return (
    <Mutation
      mutation={isBooked ? CANCEL_TRIP : TOGGLE_CART}
      variables={{ launchId: id }}
      refetchQueries={[
        {
          query: GET_LAUNCH_DETAILS,
          variables: { launchId: id }
        }
      ]}
      >
        {(mutate, { loading, error }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>An error occurred.</p>

          return (
            <div>
              <Button
                onClick={mutate}
                isBooked={isBooked}
                data-testid={'action-button'}
              >
                {isBooked
                  ? 'Cancel this trip'
                  : isInCart
                    ? 'Remove from cart'
                    : 'Add to cart'}
              </Button>
            </div>
          )
        }}
      </Mutation>
  )
}
