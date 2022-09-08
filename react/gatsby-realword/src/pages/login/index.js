import useInput from "../../hooks/use-input"
import { useLoginMutation } from "../../store/services/auth"

export default function Login() {
  const email = useInput("")
  const password = useInput("")
  const [login, { isLoading, error }] = useLoginMutation()
  const handleSubmit = async e => {
    e.preventDefault()
    await login({
      user: {
        email: email.input.value,
        password: password.input.value,
      },
    })
  }

  const ErrorMessage = () => {
    if (error) {
      const message = []
      for (let attr in error.data.errors) {
        error.data.errors[attr].forEach(item => {
          message.push(`${attr} ${item}`)
        })
      }
      return message.map((item, index) => <li key={index}>{item}</li>)
    }
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign up</h1>
            <ul className="error-messages">
              <ErrorMessage />
            </ul>
            <form onSubmit={handleSubmit}>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  {...email.input}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  {...password.input}
                />
              </fieldset>
              <button
                className="btn btn-lg btn-primary pull-xs-right"
                disabled={isLoading}
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
