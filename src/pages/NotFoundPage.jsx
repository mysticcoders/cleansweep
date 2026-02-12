import { HeaderContainer } from '../containers/HeaderContainer'

export const NotFoundPage = () => {

  return (
    <div className="not-found-panel">
      <HeaderContainer />

      <section className="section">
        <div className="columns is-centered">
          <div className="column is-half">
            <article className="message is-danger is-medium">
              <div className="message-header">
                <h2>404</h2>
              </div>
              <div className="message-body">
                This is not the page you were looking for!
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage
