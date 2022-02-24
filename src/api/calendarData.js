var gapi = window.gapi // global variables
var CLIENT_ID = "795572168562-s9cp2c49nq3l5ejfp27e28sgnboannvd.apps.googleusercontent.com"
var API_KEY = "AIzaSyAtXNKNudFCJb4qxvC6pqz1U8bZtQRbP1M"
var DISCOVERY_DOCS = "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
var SCOPES = "https://www.googleapis.com/auth/calendar.events" // accessing Google Calendar REST API

export const clickHandler = () => { // what happens when you click
  gapi.load("client:auth2", () => {
    console.log("Loaded the client")

    gapi.client.init({
      apiKey: API_KEY,
      client_id: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES,
    })

    gapi.client.load('calendar', 'v3', () => console.log("Calendar loaded"))

    gapi.auth2.getAuthInstance().signIn()
    .then(() => {
      gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime',
      }).then(response => {
        const events = response.result.items
        console.log('EVENTS: ', events)
      })
    })
  })
}