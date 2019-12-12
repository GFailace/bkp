import React from 'react'
import ScanData from './scans.json'

import './Scan.css'

export default function Scans() {

  return (
    <div className="scanResult">
      {ScanData.map(item => (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{item.id}</h4>
            <h5 className="card-text">Área - {item.area}</h5>
            <h5 className="card-text issues">Issues</h5>
            <p className="card-text critico">Críticas - {item.criticos}</p>
            <p className="card-text alto">Altas - {item.altos}</p>
          </div>
        </div>
      ))}
    </div>
  );
}