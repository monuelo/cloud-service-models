import React, { useEffect } from 'react';
import './App.css';
import ServicesTable from './components/ServicesTable';

function App() {

  useEffect(() => {
    let bodyheight = document.body.scrollHeight;
    const progressbar = document.querySelector(".progressbar");

    window.addEventListener("scroll", function () {
      progressbar.style.width = window.scrollY / (bodyheight - window.innerHeight) * 100 + "%";
    });

    var tooltips = document.querySelectorAll('.tooltip span');
    window.onmousemove = function (e) {
      var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
      for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
        console.log(i);
      }
    };
  });

  return (
    <div className="App">
      <div className="progressbar"></div>
      <div className="progress"></div>
      <h1 className="heading spaced">Understanding Service Models</h1>
      <ServicesTable />
      <div className="captions spaced card">
        <div className="caption">
          <div className="dot managed"></div>
          <span>
            You Manage
            </span>
        </div>
        <div className="caption">
          <div className="dot provided"></div>
          <span>
            Provider Manages
          </span>
        </div>
      </div>
      <h2 className="subheading spaced">Infrastructure as a Service</h2>
      <section id="iaas" className="content-card spaced">
        <h3>In a few words</h3>
        <p>
          <strong>With Infrastructure as a Service, or IaaS, you are only managing the workloads and applications that are running on virtual machines and containers.</strong>
        </p>
        <p>
          IaaS is like a virtual datacenter, with the main objective of making it easier and more accessible to provide resources, such as servers, network, storage and other computing resources essential to building an on-demand environment, which can incorporate operating systems and applications.
        </p>
        <h3>Provides</h3>
        <p>
          Basic computing infrastructure: servers, storage, and networking resources.
          </p>
        <h3>Examples</h3>
        <p>
          DigitalOcean, Linode, Rackspace, Amazon Web Services (AWS), Cisco Metapod, Microsoft Azure, Google Compute Engine (GCE).
        </p>

      </section>
      <h2 className="subheading spaced">Platform as a Service</h2>
      <section id="paas" className="content-card spaced">
        <h3>In a few words</h3>
        <p><strong>With Platform as a Service, or PaaS, you are only responsible for applications and their data.</strong></p>
        <p>In this model, you do not manage or control the infrastructure behind PaaS, such as network, servers, operating systems or storage, but you gain absolute control over all implemented applications and the settings for the hosting environment.</p>
        <h3>Provides</h3>
        <p>Runtime environments for developing, testing, and managing applications.</p>
        <h3>Examples</h3>
        <p>
          AWS Elastic Beanstalk, Windows Azure, Heroku, Force.com, Google App Engine, Apache Stratos, OpenShift.
        </p>

      </section>
      <h2 className="subheading spaced">Software as a Service</h2>
      <section id="saas" className="content-card spaced">
        <h3>In a few words</h3>
        <p><strong>With a Software as a Service, or SaaS, model, every aspect of the infrastructure is provided to you. The only thing that you are required to manage is the data. Everything else is being managed by a provider.</strong></p>
        <p>
          SaaS is a form of software distribution and marketing. In the SaaS model, you do not need to be responsible for all the necessary structure for the availability of the system (servers, connectivity, care with information security), this is the responsibility of the software distributor and the customer uses the software via the internet, paying for the service.
        </p>
        <h3>Provides</h3>
        <p>
          Software services that are usually available with a pay-as-you-go (which means subscription) pricing model.
        </p>
        <h3>Examples</h3>
        <p>
          Google Apps, Dropbox, Salesforce, Cisco WebEx, Concur, GoToMeeting.
        </p>

      </section>
      <footer className="footer">
        <div className="container">
          <section className="social spaced">
            <h2>Made with love by @hericlesme</h2>
            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/hericlesme">
                <span className="title">GitHub</span>
                <svg version="1.1" width="32" height="32" viewBox="0 0 42 42">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z" />
                </svg>
              </a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/hericlesme">
                <span className="title">twitter</span>
                <svg version="1.1" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
                </svg>
              </a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/hericlesme">
                <span className="title">linkedin</span>
                <svg version="1.1" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path>
                  <path d="M2 12h6v18h-6v-18z"></path>
                  <path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                </svg>
              </a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://instagram.com/hericlesme">
                <span className="title">instagram</span>
                <svg version="1.1" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
                  <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
                  <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
                </svg>
              </a></li >
            </ul >
          </section >
        </div >
      </footer >
    </div >

  );
}

export default App;
