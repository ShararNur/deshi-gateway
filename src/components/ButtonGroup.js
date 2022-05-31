import React from 'react';

const ButtonGroup = () => {
    return (
        <div className="d-flex pt-3">
            <input type="submit" className="w-50 btn btn-lg button-close fw-bold text-white rounded-0 py-3 fs-4" value="Close" />
            <input type="submit" className="w-50 btn btn-lg btn-confirm fw-bold text-white rounded-0 fs-4" value="Confirm" />
        </div>
    );
};

export default ButtonGroup;