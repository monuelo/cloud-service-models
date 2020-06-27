import React from 'react';
import { Managed, Provided } from './Technology';
import Header from './Header';

const ServicesTable = () => {

    return (
        <div id="services" className="spaced">
            <div className="plan card">
                <div className="plan-inner">
                    <Header title="On-Premises" subtitle="On-Premises Server"/>
                    <div className="entry-content">
                        <ul>
                            <Managed>Applications</Managed>
                            <Managed>Data</Managed>
                            <Managed>Runtime</Managed>
                            <Managed>O/S</Managed>
                            <Managed>Virtualization</Managed>
                            <Managed>Servers</Managed>
                            <Managed>Storage</Managed>
                            <Managed>Networking</Managed>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="plan card">
                <div className="plan-inner">
                <Header title="IaaS" subtitle="Infrastructure as a Service"/>
                    <div className="entry-content">
                        <ul>
                            <Managed>Applications</Managed>
                            <Managed>Data</Managed>
                            <Managed>Runtime</Managed>
                            <Managed>O/S</Managed>
                            <Provided>Virtualization</Provided>
                            <Provided>Servers</Provided>
                            <Provided>Storage</Provided>
                            <Provided>Networking</Provided>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="plan card">
                <div className="plan-inner">
                <Header title="PaaS" subtitle="Platform as a Service"/>
                    <div className="entry-content">
                        <ul>
                            <Managed>Applications</Managed>
                            <Managed>Data</Managed>
                            <Provided>Runtime</Provided>
                            <Provided>O/S</Provided>
                            <Provided>Virtualization</Provided>
                            <Provided>Servers</Provided>
                            <Provided>Storage</Provided>
                            <Provided>Networking</Provided>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="plan card">
                <div className="plan-inner">
                <Header title="SaaS" subtitle="Software as a Service"/>
                    <div className="entry-content">
                        <ul>
                            <Provided>Applications</Provided>
                            <Provided>Data</Provided>
                            <Provided>Runtime</Provided>
                            <Provided>O/S</Provided>
                            <Provided>Virtualization</Provided>
                            <Provided>Servers</Provided>
                            <Provided>Storage</Provided>
                            <Provided>Networking</Provided>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesTable;