import React from 'react';

const ButtonGroup = () => {
    return (
        <div className="d-flex">
            <input type="submit" className="w-100 btn btn-lg button-close fw-bold text-white rounded-0 py-2 fs-4" value="Close" />
            <input type="submit" className="w-100 btn btn-lg btn-confirm fw-bold text-white rounded-0 py-2 fs-4" value="Confirm" />
        </div>
    );
};

export default ButtonGroup;