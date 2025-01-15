import React, { useState } from "react";
import IntroductionTab from "./tabs/introductionTab/IntroductionTab";
import content from "../content/MainPage.json"


const MainPage = () => {
    const introductionTab = 'introduction'
    const campaignTab = 'campaign'
    const endgameTab = 'endgame'
    const craftingTab = 'crafting'

    const act1SubTab = 'act1'
    const act2SubTab = 'act2'
    const act3SubTab = 'act3'
    const act1CruelSubTab = 'act1C'
    const act2CruelSubTab = 'act2C'
    const act3CruelSubTab = 'act3C'

    const [activeTab, setActiveTab] = useState(introductionTab);
    const [activeSubTab, setActiveSubTab] = useState(null);

    const renderContent = () => {
        switch (activeTab) {
            case introductionTab:
                return <IntroductionTab />;
        }
    }

    return (
        <div>
            <nav>
                <button onClick={() => setActiveTab(introductionTab)}>
                    {content.tabTitles.introduction}
                </button>
                <button onClick={() => setActiveTab(campaignTab)}>
                    {content.tabTitles.campaign}
                </button>
            </nav>
            <div>
                {renderContent()}
            </div>
        </div>
    )
}

export default MainPage;