import axios from 'axios'

const userURL = 'https://evtssx.deta.dev/users'

// 1 = score update, 2 = score already exists, 3 = user not authorized
async function pushScore(score, userName, password, url) {
  let match = await verifyPassword(userName, password, userURL)
  if (match) {
    const result = postScore(score, userName, url)
    return result
  } else {
    return 3
  }
}

async function verifyPassword(userName, password, userURL) {
  let match = false
  await axios.get(userURL).then((response) => {
    const data = response.data
    for (let i = 0; i < data.length; i++) {
      let name = data[i]['name']
      let currentPassword = data[i]['password']
      if (name === userName && currentPassword === password) {
        match = true
      }
    }
  })
  return match
}

async function postScore(score, userName, url) {
  const result = await axios.post(url, { name: userName, score: score })
  console.log(result.data)
  return result.data
}

export default pushScore
