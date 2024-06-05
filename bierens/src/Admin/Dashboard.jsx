import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import './Dashboard.css'; 

const Dashboard = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [showConversionRate, setShowConversionRate] = useState(true);
    const [showParticipationRate, setShowParticipationRate] = useState(true);
    const [showSales, setShowSales] = useState(true);
    const [showBrandAwareness, setShowBrandAwareness] = useState(true);

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary') || '#5f6368';
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border') || '#e0e0e0';

        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Conversion Rate',
                    data: [65, 59, 80, 81, 56, 235, 400],
                    fill: false,
                    borderColor: '#00388B',
                    tension: 0,
                    hidden: !showConversionRate
                },
                {
                    label: 'Participation Rate',
                    data: [28, 48, 40, 19, 86, 27, 290],
                    fill: false,
                    borderColor: '#BB261C',
                    tension: 0,
                    hidden: !showParticipationRate
                },
                {
                    label: 'Sales',
                    data: [8, 43, 10, 129, 82, 37, 81],
                    fill: false,
                    borderColor: '#007A05',
                    tension: 0,
                    hidden: !showSales
                },
                {
                    label: 'Brand Awareness',
                    data: [18, 48, 55, 309, 56, 27, 495],
                    fill: false,
                    borderColor: '#D38D05',
                    tension: 0,
                    hidden: !showBrandAwareness
                }
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            size: 12,
                            family: "'Roboto', sans-serif"
                        }
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    min: 0,
                    max: 500,
                    ticks: {
                        stepSize: 100,
                        color: textColorSecondary,
                        font: {
                            size: 12,
                            family: "'Roboto', sans-serif"
                        }
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [showConversionRate, showParticipationRate, showSales, showBrandAwareness]);

    const toggleConversionRate = () => setShowConversionRate(!showConversionRate);
    const toggleParticipationRate = () => setShowParticipationRate(!showParticipationRate);
    const toggleSales = () => setShowSales(!showSales);
    const toggleBrandAwareness = () => setShowBrandAwareness(!showBrandAwareness);

    return (
        <div className="dashboard-section">
            <div className='navbar'></div>
            <div className="dashboard">
                <h1 className="dashboard-title">Dashboard</h1>
                <h3 className="dashboard-heading2">Check Conversion rate, Participation rate, Sales and Brand awareness</h3>
                <div className="chart-card">
                    <div className="chart-header">
                        <div 
                            className={`chart-label-box CR ${showConversionRate ? 'active' : 'inactive'}`} 
                            onClick={toggleConversionRate}
                        >
                            <div className="chart-label">Conversion Rate</div>
                        </div>
                        <div 
                            className={`chart-label-box PR ${showParticipationRate ? 'active' : 'inactive'}`} 
                            onClick={toggleParticipationRate}
                        >
                            <div className="chart-label">Participation Rate</div>
                        </div>
                        <div 
                            className={`chart-label-box SA ${showSales ? 'active' : 'inactive'}`} 
                            onClick={toggleSales}
                        >
                            <div className="chart-label">Sales</div>
                        </div>
                        <div 
                            className={`chart-label-box BA ${showBrandAwareness ? 'active' : 'inactive'}`} 
                            onClick={toggleBrandAwareness}
                        >
                            <div className="chart-label">Brand Awareness</div>
                        </div>
                    </div>
                    <div className="chart-container">
                        <Chart type="line" data={chartData} options={chartOptions} />
                    </div>
                </div>
                <div className="activity-feedback">
                    <div className="activity">
                        <h2>Recent Activity</h2>
                        <p><span className="material-icons">lightbulb</span> Steve from Corporate completed 1 referral today.</p>
                    </div>
                    <div className="feedback">
                        <h2>Feedback</h2>
                        <p><span className="material-icons">message</span> "I recently used your referral program to invite a friend and was really satisfied with how..."</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
