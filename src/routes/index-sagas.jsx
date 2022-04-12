import SignupSaga from '../redux/signup/sagas'
import LoginSaga from '../redux/login/sagas'


export default function* IndexSaga () {
  yield [
    SignupSaga(),
    LoginSaga(),

  ]
}
