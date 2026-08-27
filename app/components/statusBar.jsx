import React from 'react';

function StatusBar() {
    return (
        <div className="row">
            <div className="col-6">
              <div className="alert alert-info text-center" role="alert" id="statusBar"></div>
            </div>
            <div className="col-6">
              <div className="alert alert-info text-center" role="alert" id="clickHistory"></div>
            </div>
        </div>
    )
}

export default StatusBar;