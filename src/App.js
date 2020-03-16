import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//const AuthenticatedApp = React.lazy(() => import('./authenticated-app'))
//const UnauthenticatedApp = React.lazy(() => import('./unauthenticated-app'))


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Row>
          <h1>let's heal responsibly</h1>
          <h2>a public, transparent and anonymised contact tracing system for covid 19</h2>
          <p>for more information on contact tracing technology and systems, see: <a href="https://wikipedia.org/wiki/Contact_tracing">wikipedia.org/wiki/Contact_tracing</a>.</p>
        </Row>
        <hr />
        <Row>
          <h3>mission</h3>
          <p>provide a simple mechanism to discover if an individual has been exposed to covid 19 through contact with an exposed person, location or mode of transport</p>
        </Row>
        <Row>
          <h3>how it works</h3>
        </Row>
        <Row>
          <ul>
            <li>add places you have visited or shared transport you have used, to your personal and strictly confidential profile.</li>
            <li>get notified if or when one or more of the locations you have visited or transport you have used, has been identified as a contact point for covid 19.</li>
            <li>update your profile if you experience covid 19 symptoms or if you test positive for covid 19.</li>
          </ul>
        </Row>
        <Row>
          <h3>contact severity</h3>
        </Row>
        <Row>
          <dl>
            <dt>
              <h4>yellow flag</h4>
            </dt>
            <dd>
              close proximity contact with a person, mode of travel or location which has been identified and disclosed as having <strong>suspected</strong> symptoms associated with covid 19.<br />
              <span class="text-muted">persons in this category should consider their own health and determine whether they have exhibited symptoms associated with covid 19 and take appropriate action to receive care or testing.</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <h4>amber flag</h4>
            </dt>
            <dd>
              close proximity contact with a person, mode of travel or location which has been identified and disclosed as having <strong>had contact with</strong> a red flag contact.<br />
              <span class="text-muted">persons in this category should consider self isolation and follow national guidelines for quarantine and reporting.</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <h4>red flag</h4>
            </dt>
            <dd>
              close proximity contact with a person who has been identified and disclosed as having <strong>tested positive</strong> for covid 19.<br />
              <span class="text-muted">persons in this category should immediately self isolate and follow national guidelines for quarantine and reporting.</span>
            </dd>
          </dl>
        </Row>
        <Row>
          <h3>how is privacy protected?</h3>
        </Row>
        <Row>
          <ul>
            <li>no details of any specific persons identity, whereabouts, travel or exposure will be disclosed to any other person.</li>
            <li>no details of contact relating to any specific location or mode of transport will be disclosed, except to:
              <ul>
                <li>law enforcement</li>
                <li>public health officials</li>
                <li>the location or transport-provider management</li>
              </ul>
            </li>
          </ul>
        </Row>
        <Row>
          <h3>how is the contact tracing system implemented</h3>
        </Row>
        <Row>
          <ul>
            <li>individuals disclose their own location history which is recorded in a central database against that individuals user account.</li>
            <li>individuals disclose their own health status (one of: healthy, suspected-symptoms or tested-positive).</li>
            <li>individuals are notified if their location history intersects with a contact and what the severity of the contact was.</li>
            <li>no details about the individual, location or transport is disclosed when a contact is identified. only that a contact has been identified and what severity (yellow, amber, red) was identified.</li>
          </ul>
        </Row>
        <Row>
          <h3>what technology is used</h3>
        </Row>
        <Row>
          <ul>
            <li>oauth authentication identifies individual users using their google, facebook or apple id. a simple username/password can also be used where a user elects to do so.</li>
            <li>an atlas mongo database cluster is used to store user location and health disclosures.</li>
            <li>a react application serves as a web portal for user interactions and disclosures.</li>
            <li>contribution towards rapid development of this application is actively sought.</li>
            <li>
              <a href="https://github.com/letshealresponsibly/org">source code for the react application</a> is open source and released under an MIT license
            </li>
          </ul>
        </Row>
      </Container>
    );
  }
}

export default App;
