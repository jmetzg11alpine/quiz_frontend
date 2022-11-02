import axios from 'axios'

const getData = (url, setScores) => {
  axios.get(url).then((response) => {
    const rawScores = response.data
    let sortable = []
    for (let name in rawScores) {
      sortable.push([name, rawScores[name]])
    }
    sortable.sort(function (a, b) {
      return a[1] - b[1]
    })
    setScores(sortable)
  })
}

export default getData
