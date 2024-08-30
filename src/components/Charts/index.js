import React from 'react';
import { CiCircleInfo } from "react-icons/ci";
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import "./index.css"
ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const Charts = () => {
  const pieData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['#E76161', '#6AD4DD'],
        borderWidth: 0,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 20,
          boxHeight: 12,
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const lineData = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [1.6, 0.8, 0.8], 
        borderColor: 'orange',
        borderWidth: 1,
        pointStyle: 'circle',
        pointBackgroundColor: 'orange',
        pointRadius: 4,
        tension: 0.3, 
      },
      {
        label: 'Sales',
        data: [1.4, 0.8, 0.5], 
        borderColor: 'cyan',
        borderWidth: 1,
        pointStyle: 'circle',
        pointBackgroundColor: 'cyan',
        pointRadius: 4,
        tension: 0.3, 
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: true,
          borderDash: [5, 5], 
          drawOnChartArea: true, 
          drawBorder: false, 
        },
        border: {
          display: true,
          color: 'black',
        },
      },
      y: {
        position: 'left',
        beginAtZero: true,
        min: 0, 
        max: 1.6, 
        grid: {
          display: true,
          borderDash: [5, 5],
          drawOnChartArea: true, 
          drawBorder: false, 
        },
        border: {
          display: true,
          color: 'black',
        },
        ticks: {
          stepSize: 0.4,
          callback: function (value) {
            return value.toFixed(1) + 'k';
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className='container'>
      <div className='line-chart-container'>
        <div className='top-name'>
          <p className='top-para'>Sales vs Orders</p>
          <CiCircleInfo />
        </div>
        <hr className='hr-line'/>
        <div className='pad'>
        <div className='line-chart'>
          <Line data={lineData} options={lineOptions} />
        </div>
        <div className='info-box'>
          <div className="info-item">
            <div>6/30/2024 - 7/6/2024</div>
          </div>
          <div className="info-item">
            <div className="legend-color orders"></div>
            <div>Orders - 4</div>
          </div>
          <div className="info-item">
            <div className="legend-color sales"></div>
            <div>Sales - 1404</div>
          </div>
          <div className="info-item">
            <div className="legend-color avg-order-value"></div>
            <div>Avg Order Value - 351.00</div>
          </div>
        </div>
        </div>
      </div>
      
      <div className='pie-chart-container'>
      <div className='top-name'>
          <p className='top-para'>Portion of Sales</p>
          <CiCircleInfo />
        </div>
        <hr className='hr-line'/>
        <div className='pie-chart'>
          <Pie data={pieData} options={pieOptions} />
          <div className='total-box'>
            <div className='total-text'>
              <div>Total</div>
              <div className='total-number'>2659</div>
            </div>
          </div>
          <div className='pie-label percentage-1'>44.2%</div>
          <div className='pie-label percentage-2'>55.8%</div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
