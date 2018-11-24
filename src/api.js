const baseUrl = 'animals.json'

function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText)
  }
  console.log(response)
  return response
}

function request({ type }) {
  const url = `${baseUrl}`
  const settings = {
    method: type,
    mode: "cors"
  }
    return fetch(url, settings)
      .then(handleErrors)
}

export function getDataFromApi() {
  return request({ type: 'GET' })
    .then(response => response.json())
}


