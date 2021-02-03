import React from 'react';

import './activity-view.scss';

const ActivityViewerComp = (props) => {

    <div className="activity-viewer page">

        <div className='page-header'>
        </div>

        <div className='page-content'>

        </div>
    </div>
}

const ActivityViewer = (props) => React.useMemo(() => <ActivityViewerComp {...props} />, [props]);

export default ActivityViewer;