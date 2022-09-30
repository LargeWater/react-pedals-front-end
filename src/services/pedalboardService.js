import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/pedalboards`

async function create(pedalboard) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(pedalboard)
  })
	return res.json()
}

async function deleteOne(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return res.json()
}

async function getAll() {
  const res = await fetch(BASE_URL)
  return res.json()
}


async function update(pedalboard) {
  const res = await fetch(`${BASE_URL}/${pedalboard._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: JSON.stringify(pedalboard)
  })
  return res.json()
}


export{
  create,
  deleteOne as delete,
  getAll,
  update
}