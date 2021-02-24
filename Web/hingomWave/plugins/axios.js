import applyCaseMiddleware from 'axios-case-converter'

export default ({ $axios }, inject) => {
  const api = applyCaseMiddleware($axios.create({}))

  inject('api', api)
}
