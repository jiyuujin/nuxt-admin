export const fetchMeetups = async (): Promise<
  Array<{
    event_id: string
    event_name: string
    community_id: string
    community_name: string
    type: string
    category_id: string
    category_name: string
    date: string
    participants: string
    is_sponsor: boolean
    sponsor_name: string
    is_co_sponsor: boolean
    co_sponsor_name: string
  }>
> => {
  let result: Array<{
    event_id: string
    event_name: string
    community_id: string
    community_name: string
    type: string
    category_id: string
    category_name: string
    date: string
    participants: string
    is_sponsor: boolean
    sponsor_name: string
    is_co_sponsor: boolean
    co_sponsor_name: string
  }> = []

  const mtUrl = process.env.NUXT_APP_MEETUP_API
  const res = await fetch(mtUrl!)
  const json = await res.json()
  result = json.data

  return result
}
