import React from 'react';

function Start() {
    const [activeTab, setActiveTab] = useState('events');

    const showTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <Header />
            <Main activeTab={activeTab} showTab={showTab} />
            <Footer />
        </div>
    );
}




export default Start