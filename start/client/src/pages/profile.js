import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { Loading, Header, LaunchTile } from '../components'
import { LAUNCH_TILE_DATA } from './launches'

const GET_MY_TRIPS = gql`
query GetMyTrips {
  me {
    email
    trips {
      ...LaunchTile
    }
  }
}
${LAUNCH_TILE_DATA}
`

export default function Profile() {
  return (
    <Query query={GET_MY_TRIPS} fetchPolicy="network-only">
      {({ data, loading, error }) => {
        if (loading) return <Loading />
        if (error) return <p>ERROR: {error.message}</p>

        return (
          <Fragment>
            <Header>My Trips</Header>
            {data.me
            ? `Hello ${data.me.email}.` : 'Cannot detect a valid user.'
            }
            {data.me && data.me.trips.length ? (
              data.me.trips.map(launch => (
                <LaunchTile key={launch.id} launch={launch} />
              ))
            ) : (
              <p>You have zero trips booked.</p>
            )}
          </Fragment>
        )
      }}
    </Query>
  )
}
