import React, { Fragment } from 'react'
import GoogleAnalytics from './dashboardComponents/GoogleAnalytics'
import DashboardMenu from './dashboardComponents/DashboardMenu'
import './Dashboard.css';
import { BrowserRouter as Switch, Route} from 'react-router-dom'

function Dashboard ({
  subscriberCount,
  onAddContent,
  onViewEditContent,
  onEmailSubscribers,
  onBlogArticle,
  onSignOut,
  onTabClick,
  url
}) {
  return (
    <div className="row">

      <div className="col-md-3 col-lg-3 col-12">
        <DashboardMenu 
          signOut={ (event) => { onSignOut() } }
        />
      </div>
      <div className="col-md-9 col-lg-9 col-12 background-white">
        
          <Switch>
            <Route path={url} exact render={ () => (
              <Fragment>
                hello world
                <div>{ subscriberCount }</div>
                <div>Subscribers</div>
                <GoogleAnalytics title={ 'Google Analytics Placeholder' }/>
              </Fragment>
            ) } />
            <Route path={url + '/newcontent'} render={ () => (
              <Fragment>
                <h1>New Content</h1>
              </Fragment>
            ) } />
            <Route path={url + '/mycontent'} render={ () => (
              <Fragment>
                <h1>Edit Content</h1>
              </Fragment>
            ) } />
            <Route path={url + '/contactsubscribers'} render={ () => (
              <Fragment>
                <h1>Email your subscribers</h1>
              </Fragment>
            ) } />
          </Switch>

      </div>
    </div>
  )
}

export default Dashboard